import fs from "fs";
import request, { gql } from "graphql-request";
import yaml from "js-yaml";
import { Post } from "./posts";
import { db, fixLinks, fixTitle, Response } from "./shared";

export interface Sequence {
    _id: string;
    title: string;
    curatedOrder: number;
    contents: {
        markdown: string
    }
    chapters: {
        _id: string;
        title: string;
        subtitle: string;
        number: number;
        contents: {
            markdown: string
        }
        posts: Post[]
    }[]
}

export const loadSequences = async () => {
    const getQuery = (limit: number, offset: number) => gql`
    {
        sequences(input: { 
         terms: { 
            limit: ${limit}
            offset: ${offset}
          }
        }) {
            results{
                _id
                title
                curatedOrder
                contents {
                    markdown
                }
                chapters{
                    _id
                    title 
                    subtitle
                    number
                    contents {
                        markdown
                    }
                    posts {
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
                        voteCount
                    }
                }
            }
        }
    }`

    let i = 0;
    let lastReturnedSize = 1;
    let allSequences: Sequence[] = [];

    while (lastReturnedSize === 1) {
        // We need to paginate otherwise the requests will timeout (yes, with 1-item pages)
        console.log(`Fetching sequence ${i}`);
        const { sequences } = await request('https://www.lesswrong.com/graphql', getQuery(lastReturnedSize, i++)) as { sequences: Response<Sequence> };
        
        for (const sequence of sequences.results) {
            for (const chapter of sequence.chapters) {
                for (const post of chapter.posts) {
                    if (!!post.tableOfContents?.html) {
                        delete post.tableOfContents.html;
                    }
                }
            }
        }
            
            
        allSequences = [...allSequences, ...sequences.results];
        lastReturnedSize = sequences.results.length;


        fs.writeFileSync('./data/sequences.json', JSON.stringify(allSequences, null, 2))
    }
    return allSequences;
}

// (await loadSequences().then(sequences => console.log(JSON.stringify(sequences, null, 2))))

export const sequencesToMD = async () => {
    const getFrontmatter = (sequence: Sequence) => {
        
        return (
            "---\n"
            + yaml.dump({
                title: sequence.title,
                type: "sequence",
                tags: [
                    "LessWrong",
                    "Sequence"
                ],
            })
            + "---"
        )
    }

    for (const sequence of db.sequences) {
        // There are placeholder (?) books called `Book I: ...` , `Book II: ...`, etc.
        if (!sequence.title || sequence.chapters.length === 0) {
            continue
        }
        let mdFile = ""
        mdFile += getFrontmatter(sequence)
        mdFile += "\n\n"
        mdFile += await fixLinks(sequence.contents?.markdown ? sequence.contents?.markdown + "\n\n" : "");
        mdFile += "# Chapters\n\n"
        mdFile += sequence.chapters.map(chapter => `## ${fixTitle(sequence.title)}\n\n` + chapter.posts.map(post => `- [[${fixTitle(post.title)}]]`).join("\n")).join("\n\n\n")

        const name = fixTitle(sequence.title);


        fs.writeFileSync(`../LW/Sequences/${name}.md`, mdFile)
    }
}

await sequencesToMD()