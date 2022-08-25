import fs from "fs";
import request, { gql } from "graphql-request";
import type { Response, TagPreview } from "./shared";

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
        posts: { _id: string, title: string, tags: TagPreview[] }[]
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
                    _id
                    title 
                    subtitle
                    number
                    contents {
                        markdown
                    }
                    posts {
                        _id
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