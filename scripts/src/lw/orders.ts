import fs from "fs";
import request, { gql } from "graphql-request";

interface ChapterOrder {
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

interface ReadingOrder {
    author: string;
    description?: string;
    chapters: ChapterOrder[]
}

const loadOrder = (name: string) =>
    JSON.parse(fs.readFileSync(`./data/reading-orders/${name}.json`, 'utf8')) as ReadingOrder;

const writeOrder = (name: string, order: ReadingOrder) =>
    fs.writeFileSync(`./data/reading-orders/${name}.json`, JSON.stringify(order, null, 2))


// TODO: This actually isn't perfect, so it'll need some correction after
const getSlug = (name: string) => 
    name.replace(/\&/g, 'and').replace(/[\s',\+\=]/g, '-').replace(/[^\w-]+/g, "").replace(/--/g, "").toLowerCase();
    

const getIdBySlug = async (slug: string) => {
    try {
        const query = gql`
        {
            post(input: {
                selector: { slug: "${slug}" }
            }) {
                result {
                    _id
                }
            }
        }`

        return request('https://www.lesswrong.com/graphql', query).then(({ post }: { post: { result: { _id: string } } }) => {
            return post.result._id;
        })
    } catch (e) {
        console.log("---")
        console.log(slug)
        console.log("---")
        console.error(e)
        return null
    }   
}

const normalize = async (name: string) => {
    const order = loadOrder(name);

    for (const chapter of order.chapters) {
        for (const item of chapter.children) {
            item.type = item.type ?? "post";

            if (!item.href) {
                item.slug = item.slug ?? getSlug(item.name);

                if (item.type === "post") {
                    item._id = item._id ?? await getIdBySlug(item.slug)
                    console.log(item._id)
                }
            }

            writeOrder(name, order)
        }
    }

}

export const normalizeOrders = async () => (
    Promise.all([
        // normalize('academian'),
        // normalize('jimrandomh'),
        normalize('xixidu')
    ])
);

(async () => await normalizeOrders())()