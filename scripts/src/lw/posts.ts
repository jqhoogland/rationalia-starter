import fs from "fs";
import request, { gql } from "graphql-request";
import yaml from 'js-yaml';
import { ReadingOrder } from "./orders";
import { db, TableOfContents, TagPreview } from "./shared";

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

export const postsToMD = async () => {
    const getFrontmatter = (post: Post) => {
        const sequence = db.sequences.find(s => s.chapters.flatMap(c => c.posts).find(p => p._id === post._id));
        const chapter = sequence?.chapters?.find(c => c.posts.find(p => p._id === post._id));
        // const orders = db.orders.flatMap(o => o.chapters.flatMap(c => c.children.filter(p => p.type === "post" && p.href === post._id)));

        return (
            "---\n"
            + yaml.dump({
                title: post.title,
                href: `https://www.lesswrong.com/posts/${post._id}/${post.slug}`,
                type: "post",
                tags: [
                    "LessWrong",
                    "Concept",
                    "Post"
                ],
                ...(sequence ? { sequence: sequence.title } : {}),
                ...(chapter ? { chapter: chapter.title } : {}),
                // ...(orders ? { orders } : {}),
            })
            + "---"
        )
    }

    for (const post of db.posts) {
        if (post.forceInclude || post.voteCount > 200) {

            let mdFile = ""
            mdFile += getFrontmatter(post)
            mdFile += "\n\n"
            // mdFile += await fixLinks(post?.contents?.markdown ?? "");

            console.log(post.title)
            console.log(mdFile)

            const name = post.title.replaceAll(":", '—').replaceAll("/", ", ").replace(" ,", ",").replace("  ", " ");

            fs.writeFileSync(`../LW/Posts/${name}.md`, mdFile)
        }
    }
}




// gatherPosts().then(writePosts)
// console.log(JSON.stringify(gatherPosts(), null, 2))
// await postsToMD();