/**
 * Compiled from the [CFAR Jargon Appendix](https://www.lesswrong.com/posts/fbv9FWss6ScDMJiAx/appendix-jargon-dictionary).
 */

import fs from "fs";
import request, { gql } from "graphql-request";
import type { TableOfContents, TagPreview } from "./types";

interface Post {
    _id: string;
    title: string;
    slug: string;
    url: string;
    tags: TagPreview[],
    tableOfContents: TableOfContents,
    contents: {
        markdown: string
    }
}

export const loadJargon = async () => {
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
        }).then(sections => {
            fs.writeFileSync('./data/jargon.json', JSON.stringify(sections, null, 2))
            return sections;
        })
}

export const splitSections = async (markdown: string) => {
    // Unfortunately, some posts use `\n\n**Section Heading**\n\n` to mark headings (instead of `#`s)
    return ("\n\n" + markdown).split("\n\n**")
        .map(section => section.split("**\n\n"))
        .filter((items) => items.length === 2 && items[0])
        .map(([title, body]) => ({ title, body }))    

}

// (await loadJargon().then(jargon => console.log(JSON.stringify(jargon, null, 2))))