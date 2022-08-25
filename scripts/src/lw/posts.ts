import fs from "fs";
import request, { gql } from "graphql-request";
import { ReadingOrder } from "./orders";
import { TableOfContents, TagPreview } from "./shared";

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
export const gatherPosts = async () => {
    const DB = await import("./shared").then(mod => mod.DB);
    const db = new DB();

    const fromOrder = (order: ReadingOrder) => {
        return order.chapters
            .flatMap(c => c.children.filter(p => p.type === "post" && !p.href))
            .map(({name, _id, slug, comment}) => ({title: name, _id, slug, comment}))
    }


    return [
        ...new Set([
            ...db.sequences.flatMap(({ chapters }) => chapters.flatMap(c => c.posts)),
            ...fromOrder(db.order("academian")),
            ...fromOrder(db.order("jimrandomh")),
            ...fromOrder(db.order("xixidu")),
        ]).values()
    ] // .filter(p => !!p)
}

export interface PostPreview {
    title: string;
    _id?: string;
    slug?: string;
    comment?: string;
    tags?: TagPreview[]
}

export const readPosts = () => JSON.parse(fs.readFileSync('data/posts.json', 'utf8')) as PostPreview[];
export const writePosts = async (posts: PostPreview[]) => {
    fs.writeFileSync("data/posts.json", JSON.stringify(posts, null, 2));
}


export const fetchPost = ({ slug, _id }: { slug?: string, _id?: string }) => {
    const query = gql`{
        post(input: {
            selector:{
                ${slug ? `slug: "${slug}"`: ""}
                ${_id ? `_id: "${_id}"`: ""}
            }
        }) {
            result {
                _id
                url
                title
                slug
                author
                question
                tags {
                    name
                }
                tableOfContents
                contents {
                    markdown
                }
            }   
        }
    }`

    return request('https://www.lesswrong.com/graphql', query)
        .then(({ post }: { post: { result: Post } }) => {
            writePosts([...readPosts(), post.result]);
            return post.result;
        })
}

// gatherPosts().then(writePosts)

// console.log(JSON.stringify(gatherPosts(), null, 2))