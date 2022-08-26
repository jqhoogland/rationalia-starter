import fs from 'fs';
import { gql, request } from 'graphql-request';
import * as yaml from 'js-yaml';
import { db, fixLinks, Response, TagPreview } from './shared';

export interface Tag {
    _id: string,
    name: string,
    core: boolean,
    slug: string,
    oldSlugs: string,
    postCount: number,
    parentTag?: null | {
        name: string
    }
    subTags: TagPreview[]
    description: {
        markdown: string
    }
}

export const readTags = () => JSON.parse(fs.readFileSync('data/tags.json', 'utf8')) as Tag[]
export const writeTags = (tags: Tag[]) => fs.writeFileSync('./data/tags.json', JSON.stringify(tags, null, 2));

export const fetchTags = async (limit?: number) => {
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
            oldSlugs
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
        writeTags(tags.results);
        return tags.results;
    })
}

export const fetchTag = async (slug: string) => {
    const query = gql`
    {
        tag(input: { 
            selector: {
                slug: "${slug}"
            }
        }) {
          result {
            _id
            name
            core
            slug
            oldSlugs
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

    return request('https://www.lesswrong.com/graphql', query).then(({ tag }: { tag: { result: Tag } }) => {
        writeTags([...readTags(), tag.result]);
        return tag.result
    })
}


// (await loadTags().then(tags => console.log(JSON.stringify(tags, null, 2))))
    
export const tagsToMD = async () => {
    const getFrontmatter = (tag: Tag) => {
        return (
            "---\n"
            + yaml.dump({
                title: tag.name,
                href: `https://lesswrong.com/tags/${tag.slug}`,
                type: "tag",
                tags: [
                    "LessWrong",
                    "Concept",
                    "Tag"
                ],
                ...(tag.core ? { core: tag.core } : {}),
                ...(tag.parentTag ? { parent: tag.parentTag.name } : {}),
                ...(tag.subTags.length > 0 ? { children: tag.subTags.map(subtag => subtag.name) } : {}),
            })
            + "---"
        )
    }

    for (const tag of db.tags) {
        let mdFile = ""        
        mdFile += getFrontmatter(tag)
        mdFile += "\n\n"
        mdFile += await fixLinks(tag?.description?.markdown ?? "");

        console.log(tag.name)   
        console.log(mdFile)

        const name = tag.name.replaceAll(":", '—').replaceAll("/", ", ").replace(" ,", ",").replace("  ", " ");

        fs.writeFileSync(`../LW/Concepts/${name}.md`, mdFile)
    }
}

 (await tagsToMD())