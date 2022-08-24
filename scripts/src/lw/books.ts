import fs from "fs";
import request, { gql } from "graphql-request";
import type { Response } from "./types";

interface Book {
    _id: string;
    title: string;
    subtitle: string;
    number: number;
    contents: {
        markdown: string
    }
    sequences: {
        title: string;
    }
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
                contents {
                    markdown
                }
                sequences {
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

(await loadBooks().then(books => console.log(JSON.stringify(books, null, 2))))