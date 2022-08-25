import fs from 'fs';
import { gql, request } from 'graphql-request';
import * as yaml from 'js-yaml';
import { Response, TagPreview } from './shared';

export interface Tag {
    _id: string,
    name: string,
    core: boolean,
    slug: string,
    postCount: number,
    parentTag?: null | {
        name: string
    }
    subTags: TagPreview[]
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
    
export const writeTags = async () => {
    
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

    const getTitle = (href: string, alias: string) => {
        alias = alias.replace(":", "—")

        if (alias?.[0] === "*" && alias?.[alias.length] === "*") {
            alias = alias.slice(1, alias.length - 1)
        }
        
        return alias
    }

    const fixLinks = (md: string) => {
        return md.replace(/\[([^\]]+)\]\(([^\)]+)\)/g, (match, alias, href) => {
            if (href.includes('lesswrong.com')) {
                const title = getTitle(href, alias); // TODO: check aliases
                return `[[${title}|${alias}]]`
            } 
            return match;
        })  
    }

    for (const tag of tags) {
        let mdFile = ""        
        mdFile += getFrontmatter(tag)
        mdFile += "\n\n"
        mdFile += fixLinks(tag?.description?.markdown ?? "")

        console.log(tag.name)   
        console.log(mdFile)
    }
}

(await writeTags())