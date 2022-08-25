import fs from "fs";
import { Book } from "./books";
import { Collection } from "./collections";
import { Jargon } from "./jargon";
import { loadOrder } from "./orders";
import { fetchPost, readPosts } from "./posts";
import { Sequence } from "./sequences";
import { fetchTag, readTags } from "./tags";

export type Response<T> = {
    results: T[]
}

export interface TableOfContents {
    html: string,
    sections: {title: string, anchor: string, level: number}[],
    headingsCount: number
}

export interface TagPreview {
    name: string
}

export class DB {
    get tags() {
        return readTags()
    }
    async tag({ slug, name }: { slug?: string, name?: string }) {
        const tag = this.tags.find(tag => (slug && tag.slug === slug) || (tag?.oldSlugs ?? []).includes(slug) || tag.name === name)
        if (!tag && slug) {
            return fetchTag(slug)
        }
        return tag
    }

    get posts() {
        return readPosts()
    }
    post({ _id, slug, title }: { _id?: string, slug?: string, title?: string }) {
        const post = this.posts.find(post => (_id && post._id === _id) || (slug && post.slug === slug) || post.title === title)

        if (!post) {
            return fetchPost({slug, _id})
        }

        return post
    }

    get books() {
        return JSON.parse(fs.readFileSync('data/books.json', 'utf8')) as Book[]
    }
    book({ _id, title }: { _id?: string, title?: string }) {
        return this.books.find(book => (_id && book._id === _id) || book.title === title)
    }

    get sequences() {
        return JSON.parse(fs.readFileSync('data/sequences.json', 'utf8')) as Sequence[]
    }
    sequence({ _id, title }: { _id?: string, title?: string }) {
        return this.sequences.find(sequence => (_id && sequence._id === _id) || sequence.title === title)
    }

    get collections() {
        return JSON.parse(fs.readFileSync('data/collections.json', 'utf8')) as Collection[]
    }
    collection({ _id, title }: { _id?: string, title?: string }) {
        return this.collections.find(collection => (_id && collection._id === _id) || collection.title === title)
    }
  
    order(name: "academian" | "jimrandomh" | "xixidu") {
        return loadOrder(name);
    }

    get jargon() {
        return JSON.parse(fs.readFileSync('data/jargon.json', 'utf8')) as Jargon[]
    }

}


export const db = new DB();

const getTitleFromLink = async (href: string) => {
    try {
        if (href.includes("/tag/")) {
            const slug = href.split("/tag/")[1].split("/")[0]
            return (await db.tag({ slug })).name
        } else if (href.includes("/lw/")) {  // E.g.: /lw/nc/newcombs_problem_and_regret_of_rationality/ 
            const slug = href.split("/lw/")[1].split("/")[1].split("?")[0]
            return (await db.post({slug})).title
        } else if (href.includes("/posts/")) {
            const _id = href.split("/posts/")[1].split("/")[0].split("?")[0]
            return (await db.post({ _id })).title
        } else if (href.includes("/book/")) {
            const _id = href.split("/book/")[1].split("/")[0]
            return db.book({ _id }).title
        } else if (href.includes("/s/")) {
            const _id = href.split("/s/")[1].split("/")[0]
            return db.sequence({ _id }).title
        }
        throw new Error("Unrecognized link")
    } catch (e) {
        console.error("---\n\n", e, "\n", href, "\n\n---")
        return false;
    }
}

async function replaceAsync(str: string, regex: RegExp, asyncFn: (match: string, alias: string | null, href: string | null) => Promise<string>): Promise<string> {
    const promises = (str.match(regex) ?? []).map((match) => asyncFn(...(regex.exec(match) ?? [match, null, null]) as [string, string | null, string | null]));
    const data = await Promise.all(promises);
    return str.replace(regex, () => data.shift()!);
  }

export const fixLinks = async (md: string) => {
    return replaceAsync(md, /\[([^\]]+)\]\(([^\)]+)\)/g, async (match, alias, href) => {        
        if (!alias || !href) {
            return match
        }

        if (href.includes('lesswrong.com')) {
            const title = await getTitleFromLink(href); // TODO: check aliases

            if (!title) {
                if (href[0] === "/") {
                    href = "https://lesswrong.com" + href;
                }
                return `[${alias}](${href})`;
            }

            return `[[${title}|${alias}]]`
        } 
        return match;
    })  
}
