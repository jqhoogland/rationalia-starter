import fs from "fs";
import request, { gql } from "graphql-request";
import type { Response } from "./shared";

export interface Collection {
    _id: string;
    title: string;
    contents: {
        markdown: string
    }
    books: {
        _id: string;
        title: string;
    }
}

export const loadCollections = async (limit?: number) => {
    const query = gql`
    {
        collections(input: {}) {
            results{
                _id
                title
                contents {
                    markdown
                }
                books {
                    _id
                    title
                }
            }
        }
    }`
    
    return request('https://www.lesswrong.com/graphql', query).then(({ collections }: { collections: Response<Collection> }) => {
        fs.writeFileSync('./data/collections.json', JSON.stringify(collections.results, null, 2))
        return collections.results;
    })
}

(await loadCollections().then(collections => console.log(JSON.stringify(collections, null, 2))))