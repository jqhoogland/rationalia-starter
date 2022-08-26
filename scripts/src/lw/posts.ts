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
    },
    voteCount: number;
    forceInclude?: boolean
}

/**
 * We force-include all the posts included in the sequences & in the reading orders.
 * We include any posts that we find will fixing links if their vote count > 200.
 */
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
    ].filter(p => !!p).map(p => ({...p, forceInclude: true})) as Post[]
}

export const readPosts = () => JSON.parse(fs.readFileSync('data/posts.json', 'utf8')) as Post[];
export const writePosts = async (posts: Post[]) => {
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
                voteCount
            }   
        }
    }`

    return request('https://www.lesswrong.com/graphql', query)
        .then(({ post }: { post: { result: Post } }) => {
            if (!!post?.result?.tableOfContents?.html) {
                delete post.result.tableOfContents.html;
            }
            writePosts([...readPosts(), post.result]);
            return post.result;
        })
}

gatherPosts().then(writePosts)

// console.log(JSON.stringify(gatherPosts(), null, 2))