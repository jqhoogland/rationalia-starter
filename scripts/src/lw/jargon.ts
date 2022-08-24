/**
 * Compiled from the [CFAR Jargon Appendix](https://www.lesswrong.com/posts/fbv9FWss6ScDMJiAx/appendix-jargon-dictionary).
 */

import request, { gql } from "graphql-request";
import { splitSections } from "../utils/md";
import type { TableOfContents, TagPreview } from "./types";

interface Post {
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

export const loadJargon = async () => {
    const query = gql`{
        post(input: {
            selector:{
                _id: "fbv9FWss6ScDMJiAx"
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
        return splitSections(post.result.contents.markdown);
    })
}

(await loadJargon().then(jargon => console.log(JSON.stringify(jargon, null, 2))))