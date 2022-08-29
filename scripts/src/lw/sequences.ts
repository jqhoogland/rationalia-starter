import fs from "fs";
import request, { gql } from "graphql-request";
import { Post } from "./posts";
import { db, fixLinks, fixTitle, getFrontmatter, Response } from "./shared";

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
        posts: Omit<Post, 'content' | 'tableOfContents'>[]
    }[]
}

const loadSequences = () => JSON.parse(fs.readFileSync('./data/sequences.json', 'utf8')) as Sequence[]

export const fetchSequences = async () => {
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
                        voteCount
                    }
                }
            }
        }
    }`

    let i = 21;
    let j = 0;
    let allSequences: Sequence[] = loadSequences();

    while (i < 350) {
        // We need to paginate otherwise the requests will timeout (yes, with 1-item pages)
        console.log(`Fetching sequence ${i}`);
        const { sequences } = await request('https://www.lesswrong.com/graphql', getQuery(1, i++)) as { sequences: Response<Sequence> };
        
        for (const sequence of sequences.results) {
            // Keep only sequences whose posts have been voted on at least 200 times (or written by Eliezer)
            if (!sequence.chapters.flatMap(c => c.posts).some(p => p.voteCount > 200 || p.author === "Eliezer_Yudkowsky" || p.author === "Eliezer Yudkowsky")) {
                console.error("Not included:", sequence.title, )
                continue
            }
            allSequences[j++] = sequence;
        }
            
        fs.writeFileSync('./data/sequences.json', JSON.stringify(allSequences, null, 2))
    }
    return allSequences;
}

// (await fetchSequences().then(sequences => console.log(JSON.stringify(sequences, null, 2))))

export const sequencesToMD = async () => {
    for (const sequence of db.sequences) {
        if (!sequence.title || sequence.chapters.length === 0) {
            continue
        }
        let mdFile = ""
        mdFile += getFrontmatter(sequence, ['_id', 'title'], {type: "sequence", tags: ["LessWrong", "Sequence"]})
        mdFile += "\n\n"
        mdFile += await fixLinks(sequence.contents?.markdown ? sequence.contents?.markdown + "\n\n" : "");
        mdFile += "## Chapters\n\n"
        mdFile += sequence.chapters.map(chapter => `### ${fixTitle(chapter.title ?? sequence.title)}\n\n` + chapter.posts.map(post => `- [[${fixTitle(post.title)}]]`).join("\n")).join("\n\n\n")

        const name = fixTitle(sequence.title) + " (Sequence)";


        fs.writeFileSync(`../LW/Sequences/${name}.md`, mdFile)
    }
}

 await sequencesToMD()

