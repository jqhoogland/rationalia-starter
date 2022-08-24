import fs from 'fs';
import { gql, request } from 'graphql-request';
import { Response, TableOfContents, TagPreview } from './types';


interface Tag {
    _id: string,
    name: string,
    core: boolean,
    slug: string,
    tableOfContents: TableOfContents;
    postCount: number,
    parentTag?: null | {
        name: string
    }
    subtags: TagPreview[]
    description: {
        markdown: string
    }
}

export const loadTags = async (limit?: number) => {
    const query = gql`
    {
        tags(input: { 
          ${limit ? `terms:{
            limit: ${limit},
          }` : ""}
        }) {
          results {
            _id
            name
            core
            slug
            tableOfContents
            postCount
            description {
                markdown
            }
            parentTag {
                name        
            }
            subTags {
                name
              }
          }
        }
    }`

    return request('https://www.lesswrong.com/graphql', query).then(({ tags }: { tags: Response<Tag> }) => {
        fs.writeFileSync('./data/tags.json', JSON.stringify(tags.results, null, 2))
        return tags.results;
    })
}

// (await loadTags().then(tags => console.log(JSON.stringify(tags, null, 2))))