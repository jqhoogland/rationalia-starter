import fs from "fs";
import request, { gql } from "graphql-request";
import { db, fixLinks, fixTitle, getFrontmatter, Response } from "./shared";
export interface Collection {
    _id: string;
    title: string;
    slug: string;
    gridImageId: string;
    user: {
        username
    }
    contents: {
        markdown: string
    }
    books: {
        _id: string;
        title: string;
    }[]
}

export const loadCollections = async (limit?: number) => {
    const query = gql`
    {
        collections(input: {}) {
            results{
                _id
                title
                slug
                gridImageId
                contents {
                    markdown
                }
                user {
                    username
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

// (await loadCollections().then(collections => console.log(JSON.stringify(collections, null, 2))))

export const booksToMD = async () => {
    for (const collection of db.collections) {
        // There are placeholder (?) books called `Book I: ...` , `Book II: ...`, etc.
        const books = collection.books.filter(book => book?.title)

        if (!collection.title || books.length === 0) {
            continue
        }
        let mdFile = ""
        mdFile += getFrontmatter(
            collection,
            ["_id", "title", "slug", "gridImageId"],
            { type: "collection", tags: ["LessWrong", "Collection"], author: collection?.user?.username }
        )

        mdFile += "\n\n"
        mdFile += await fixLinks(collection.contents?.markdown ? collection.contents?.markdown + "\n\n" : "");
        mdFile += "# Books\n\n"
        mdFile += books.map(sequence => `- [[${fixTitle(sequence.title)}]]`).join("\n")

        const name = fixTitle(collection.title);


        fs.writeFileSync(`../LW/Collections/${name}.md`, mdFile)
    }
}

await booksToMD()