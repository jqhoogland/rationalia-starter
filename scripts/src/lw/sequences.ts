import fs from "fs";
import request, { gql } from "graphql-request";
import type { Response, TagPreview } from "./types";

interface Sequence {
    _id: string;
    title: string;
    curatedOrder: number;
    contents: {
        markdown: string
    }
    chapters: {
        title: string;
        subtitle: string;
        number: number;
        contents: {
            markdown: string
        }
        posts: { title: string, tags: TagPreview[] }[]
    }
}

export const loadSequences = async (limit?: number) => {
    const query = gql`
    {
        sequences(input: { 
         terms: { ${limit ? `terms:{
            limit: ${limit},
          }` : ""}
        }}) {
            results{
                _id
                title
                curatedOrder
                contents {
                    markdown
                }
                chapters{
                    title 
                    subtitle
                    number
                    contents {
                        markdown
                    }
                    posts {
                        title
                        tags {
                            name
                        }
                    }
                }
            }
        }
    }`
    
          return request('https://www.lesswrong.com/graphql', query).then(({ sequences }: { sequences: Response<Sequence> }) => {
            fs.writeFileSync('./data/sequences.json', JSON.stringify(sequences.results, null, 2))
              console.log(sequences.results)
            return sequences.results;
        })
}

(await loadSequences().then(sequences => console.log(JSON.stringify(sequences, null, 2))))