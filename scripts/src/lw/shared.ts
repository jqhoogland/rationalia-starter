import fs from "fs";
import { Book } from "./books";
import { Collection } from "./collections";
import { Jargon } from "./jargon";
import { loadOrder } from "./orders";
import { Post } from "./posts";
import { Sequence } from "./sequences";
import { Tag } from "./tags";

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
        return JSON.parse(fs.readFileSync('data/tags.json', 'utf8')) as Tag[]
    }
    tag({ slug, name }: { slug?: string, name?: string }) {
        return this.tags.find(tag => (slug && tag.slug === slug) || tag.name === name)
    }

    get posts() {
        return JSON.parse(fs.readFileSync('data/posts.json', 'utf8')) as Post[]
    }
    post({ _id, slug, title }: { _id?: string, slug?: string, title?: string }) {
        return this.posts.find(post => (_id && post._id === _id) || (slug && post.slug === slug) || post.title === title)
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