import fs from "fs";
import { ReadingOrder } from "./orders";
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

// (Does not return the above)
export const gatherPosts = () => {
    const db = new DB();

    const fromOrder = (order: ReadingOrder) => {
        return order.chapters
            .flatMap(c => c.children.filter(p => p.type === "post" && !p.href))
            .map(({name, _id, slug, comment}) => ({title: name, _id, slug, comment}))
    }

    return [
        ...new Set([
            ...db.sequences.flatMap(({ chapters }) => chapters.posts),
            ...fromOrder(db.order("academian")),
            ...fromOrder(db.order("jimrandomh")),
            ...fromOrder(db.order("xixidu")),
        ].filter(p => !!p)).values()
    ]
}

interface PostPreview {
    title: string;
    _id?: string;
    slug?: string;
    comment?: string;
}

export const writePosts = async (posts: PostPreview[]) => {
    fs.writeFileSync("data/posts.json", JSON.stringify(posts, null, 2));
}


writePosts(gatherPosts())
