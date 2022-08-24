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