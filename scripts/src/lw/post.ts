import { DB, TableOfContents, TagPreview } from "./shared";

export interface Post {
    _id: string;
    title: string;
    slug: string;
    url: string;
    tags: TagPreview[],
    tableOfContents: TableOfContents,
    contents: {
        markdown: string
    }
}

export const gatherPosts = () => {
    const db = new DB();

    return [
        ...db.sequences.flatMap(({ chapters }) => chapters.posts)
        
    ]
}