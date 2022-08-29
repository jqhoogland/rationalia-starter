/**
 * Compiled from:
 * - [CFAR Jargon Appendix](https://www.lesswrong.com/posts/fbv9FWss6ScDMJiAx/appendix-jargon-dictionary).
 * - [LW "Jargon" tag](https://www.lesswrong.com/tag/lesswrong-jargon)
 */

import fs from "fs";
import request, { gql } from "graphql-request";
import { Post } from "./posts";
import { db, fixLinks, getFrontmatter } from "./shared";

export interface Jargon {
    title: string;
    body: string;
}

const loadCAFRJargon = async () => {
    const query = gql`{
        post(input: {
            selector:{
                _id: "fbv9FWss6ScDMJiAx"
            }
        }) {
            result {
                _id
                url
                title
                slug
                author
                question
                tags {
                    name
                }
                tableOfContents
                contents {
                    markdown
                }
            }   
        }
    }`

    return request('https://www.lesswrong.com/graphql', query)
        .then(({ post }: { post: { result: Post } }) => {
            return splitSections(post.result.contents.markdown);
        })
}

const loadLWJargon = async () => {
    const query = gql`{
        tag(input: {
          selector:{
            slug: "lesswrong-jargon"
          }
        }) {
            result {
                _id
                  name
                  description {
                  markdown
                }
            }
        }
    }`

    return request('https://www.lesswrong.com/graphql', query)
        .then(({ tag }: { tag: { result: { _id: string, name: string, description: { markdown: string } } } }) => {
            return splitSections(tag.result.description.markdown);
        }).then(sections => sections
            .filter(({ body }) => body !== "\n-----")
            .map((item) => {
                if (item.title.endsWith(":")) {
                    item.title = item.title.slice(0, -1);
                } else if (item.body.startsWith(":")) {
                    item.body = item.body.slice(2);
                }
                return item
            })
        )
}


export const splitSections = async (markdown: string) => {
    // Unfortunately, some posts use `\n\n**Section Heading**\n\n` to mark headings (instead of `#`s)
    return ("\n\n" + markdown).split("\n\n**")
        .map(section => section.split("**"))
        .filter((items) => items.length === 2 && items[0])
        .map(([title, body]) => ({ title, body }))    
}

export const loadJargon = async () => {
    const jargon = [
        ...(await loadCAFRJargon()),
        ...(await loadLWJargon()),
    ];

    fs.writeFileSync('./data/jargon.json', JSON.stringify(jargon, null, 2))
    return jargon;

}

// (await loadJargon().then(jargon => console.log(JSON.stringify(jargon, null, 2))))


export const jargonToMD = async () => {
    for (const word of db.jargon) {
        let mdFile = ""
        mdFile += getFrontmatter(
            word,
            ["title"],
            { type: "jargon", tags: ["LessWrong", "Concept", "Jargon"] }
        )
        mdFile += "\n\n"
        mdFile += await fixLinks(word.body);

        console.log(word.title)
        console.log(mdFile)

        const name = word.title.replaceAll(":", '—').replaceAll("/", ", ").replace(" ,", ",").replace("  ", " ");

        fs.writeFileSync(`../LW/Jargon/${name}.md`, mdFile)
    }
}

// (await jargonToMD())