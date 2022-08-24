import fs from 'fs';
import { gql, request } from 'graphql-request';

type Response<T> = {
    results: T[]
}

interface TagPreview {
    _id: string,
    name: string,
    core: boolean,
    slug: string,
    tableOfContents: {
        html: string,
        sections: {title: string, anchor: string, level: number}[],
        headingsCount: number
    };
    postCount: number,
    descriptionVersion: number,
    parentTag?: null | {
        name: string
    }
    subtags: {name: string}[]
}

type Tag = TagPreview & {
    description: {
        markdown: string
    }
}


const loadTags = async (limit = 5) => {
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

    request('https://www.lesswrong.com/graphql', query).then(({ tags }: { tags: Response<TagPreview> }) => {
        fs.writeFileSync('./data/tags.json', JSON.stringify(tags.results, null, 2))
        console.log(JSON.stringify(tags.results));
    })
}

loadTags(null)