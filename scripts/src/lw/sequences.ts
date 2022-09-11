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

const loadSequences = () => {
    try {
        return JSON.parse(fs.readFileSync('./data/sequences.json', 'utf8')) as Sequence[]
    } catch (e) {
        return []
    }
}
    

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

    let i = 0;
    let j = 0;
    let allSequences: Sequence[] = loadSequences();

    while (i < 220) { // 350 for LW
        // We need to paginate otherwise the requests will timeout (yes, with 1-item pages)
        console.log(`Fetching sequence ${i}`);
        const { sequences } = await request('https://forum.effectivealtruism.org/graphql', getQuery(1, i++)) as { sequences: Response<Sequence> };
        
        for (const sequence of sequences.results) {
            // Keep only sequences whose posts have been voted on at least 200 times (or written by Eliezer)
            const lwAuthors = ["Eliezer Yudkowsky", "Eliezer_Yudkowsky", "Scott Alexander"]
            const eaAuthors = ["MaxDalton", "EA Handbook", "Centre for Effective Altruism"]
            const authors = [...lwAuthors, ...eaAuthors]

            // if (
            //     !sequence.chapters.flatMap(c => c.posts).some(p => p.voteCount > 200 || authors.includes(p.author))
            //     && !['coordination', 'curiosity', 'trust', 'incentives', 'failure', 'coordination & constraint', 'alignment & agency', 'replacing guilt', 'cfar handbook'].includes(sequence.title?.toLowerCase())
            // ) {
            //     console.error("Not included:", sequence.title, `(${sequence.chapters?.[0]?.posts?.[0]?.author})`)
            //     continue
            // }
            allSequences[j++] = sequence;
        }
            
        fs.writeFileSync('./data/sequences.json', JSON.stringify(allSequences, null, 2))
    }
    return allSequences;
}


export const sequencesToMD = async () => {
    for (const sequence of db.sequences) {
        if (!sequence.title || sequence.chapters.length === 0) {
            continue
        }
        const name = fixTitle(sequence.title);
        
        let mdFile = ""
        mdFile += getFrontmatter(sequence, ['_id', 'title', 'curatedOrder'], {type: "sequence", tags: ["LessWrong", "Sequence"], aliases: [name]})
        mdFile += "\n\n"
        mdFile += await fixLinks(sequence.contents?.markdown ? sequence.contents?.markdown + "\n\n" : "");
        mdFile += "## Chapters\n\n"
        mdFile += sequence.chapters.map(chapter => `### ${fixTitle(chapter.title ?? sequence.title)}\n\n` + chapter.posts.map(post => `- [[${fixTitle(post.title)}]]`).join("\n")).join("\n\n\n")
        
        
        fs.writeFileSync(`../EA/Sequences/${name} (Sequence).md`, mdFile)
    }
}


await fetchSequences()
await sequencesToMD()

