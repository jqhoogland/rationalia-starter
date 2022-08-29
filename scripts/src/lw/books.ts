import fs from "fs";
import request, { gql } from "graphql-request";
import yaml from 'js-yaml';
import { db, fixLinks, fixTitle, Response } from "./shared";
export interface Book {
    _id: string;
    title: string;
    subtitle: string;
    slug: string;
    number: number;
    author: string;
    contents: {
        markdown: string
    }
    sequences: {
        _id: string;
        title: string;
    }[]
    // Include posts as well?
}

export const loadBooks = async (limit?: number) => {
    const query = gql`
    {
        books(input: {}) {
            results{
                _id
                title
                subtitle
                number
                author
                contents {
                    markdown
                }
                sequences {
                    _id
                    title
                }
            }
        }
    }`
    
    return request('https://www.lesswrong.com/graphql', query).then(({ books }: { books: Response<Book> }) => {
        fs.writeFileSync('./data/books.json', JSON.stringify(books.results, null, 2))
        return books.results;
    })
}

// (await loadBooks().then(books => console.log(JSON.stringify(books, null, 2))))


export const booksToMD = async () => {
    const getFrontmatter = (book: Book) => {
        
        return (
            "---\n"
            + yaml.dump({
                title: book.title,
                subtitle: book.subtitle,
                // author: book.author,
                type: "book",
                tags: [
                    "LessWrong",
                    "Book"
                ],
            })
            + "---"
        )
    }

    for (const book of db.books) {
        // There are placeholder (?) books called `Book I: ...` , `Book II: ...`, etc.
        if (!book.title || book.sequences.length === 0 || book.title.startsWith("Book")) {
            continue
        }
        let mdFile = ""
        mdFile += getFrontmatter(book)
        mdFile += "\n\n"
        mdFile += await fixLinks(book.contents?.markdown ? book.contents?.markdown + "\n\n" : "");
        mdFile += "# Sequences\n\n"
        mdFile += book.sequences.map(sequence => `- [[${fixTitle(sequence.title)}]]`).join("\n")

        const name = fixTitle(book.title);


        fs.writeFileSync(`../LW/Books/${name}.md`, mdFile)
    }
}

await booksToMD()