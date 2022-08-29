import fs from "fs";
import yaml from 'js-yaml';
import { fetchPost } from "./posts";
import { fixLinks, fixTitle } from "./shared";

export interface ChapterOrder {
    title: string;
    description?: string;
    children: {
        name: string;
        _id?: string;
        type?: "tag" | "post";
        slug?: string;
        href?: string;
        comment?: string;
    }[]
}

export interface ReadingOrder {
    author: string;
    description?: string;
    chapters: ChapterOrder[]
}

export const loadOrder = (name: string) =>
    JSON.parse(fs.readFileSync(`./data/reading-orders/${name}.json`, 'utf8')) as ReadingOrder;

const writeOrder = (name: string, order: ReadingOrder) =>
    fs.writeFileSync(`./data/reading-orders/${name}.json`, JSON.stringify(order, null, 2))


// TODO: This actually isn't perfect, so it'll need some correction after
const getSlug = (name: string) => 
    name.replace(/\&/g, 'and').replace(/[\s',\+\=]/g, '-').replace(/[^\w-]+/g, "").replace(/--/g, "").toLowerCase();
    

const normalize = async (name: string) => {
    const order = loadOrder(name.toLowerCase());

    for (const chapter of order.chapters) {
        for (const item of chapter.children) {
            item.type = item.type ?? "post";

            if (!item.href) {
                item.slug = item.slug ?? getSlug(item.name);

                if (item.type === "post") {
                    const query: { _id?: string, slug?: string } = {}
                    if (item._id) query._id = item._id; 
                    else query.slug = item.slug

                    Object.entries(await fetchPost(query)).forEach(([key, value]) => {
                        item[key] = value;
                    })
                }
            }

            writeOrder(name, order)
        }
    }

}

export const normalizeOrders = async () => (
    Promise.all([
        normalize('academian'),
        normalize('jimrandomh'),
        normalize('xixidu')
    ])
);

// (async () => await normalizeOrders())()

export const orderToMD = async (author: string) => {
    const order = loadOrder(author);

    const frontmatter = (
            "---\n"
            + yaml.dump({
                author: order.author,
                type: "sequence",
                tags: [
                    "LessWrong",
                    "Sequence"
                ],
            })
            + "---"
        )
    let mdFile = ""
    mdFile += frontmatter;
    mdFile += "\n\n"
    mdFile += await fixLinks(order.description ?? "");
    mdFile += "# Chapters\n\n"
    mdFile += order.chapters.map(chapter => `## ${fixTitle(chapter?.title ?? "")}\n\n` + chapter.children.map(post => (
        post.href 
        ? `- [${post.name}](${post.href})`
        : `- [[${fixTitle(post.name)}]]`
    )).join("\n")).join("\n\n\n")


    const name = `${(order.author)}'s order`
    fs.writeFileSync(`../LW/Reading Orders/${name}.md`, mdFile)
}

export const ordersToMD = async () => (
    Promise.all(
        [
            orderToMD('Academian'),
            orderToMD('jimrandomh'),    
            orderToMD('XiXiDu'),
        ]
    )
)

// await ordersToMD()
