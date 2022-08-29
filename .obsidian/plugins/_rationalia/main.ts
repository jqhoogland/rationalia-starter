import request, { gql } from 'graphql-request';
import * as yaml from 'js-yaml';
import { Editor, MarkdownView, Notice, Plugin } from 'obsidian';
import { getAPI } from "obsidian-dataview";

const api = getAPI();

export default class Rationalia extends Plugin {
	settings = {};
	
	async onload() {

		// This adds a simple command that can be triggered anywhere
		this.addCommand({
			id: 'sync-note',
			name: 'Sync active note with LW/EA',
			editorCallback: (editor: Editor, view: MarkdownView) => {
				syncNote(editor, view)
			}
		})
	}

	onunload() {
	}
}

const syncNote = async (editor: Editor, view: MarkdownView) => {
	// @ts-ignore TODO: Add to declarations
	const frontmatter = JSON.parse(view!.lastFrontmatter);

	// Inserted by who knows
	if ("position" in frontmatter) {
		delete frontmatter.position;
	}

	switch (frontmatter.type) {
		case 'tag':
			return syncTag(editor, view, frontmatter)
		default: 
			new Notice("Frontmatter has invalid `type`")
			return
	}
}


export interface TagPreview {
    name: string
}


export interface Tag {
    _id: string,
    name: string,
    core: boolean,
    slug: string,
    oldSlugs: string,
    postCount: number,
    parentTag?: null | {
        name: string
    }
    subTags: TagPreview[]
    description: {
        markdown: string
    }
}

export type TagFrontmatter = { type: 'tag', _id?: string, slug?: string  } & { [key: string]: any}

const syncTag = async (editor: Editor, view: MarkdownView, frontmatter: TagFrontmatter) => {
	console.log(editor, view)

	let selector = "";

	if (frontmatter._id) {
		selector = `_id: "${frontmatter._id}"`
	} else if (frontmatter.slug) {
		selector = `slug: "${frontmatter.slug}"`
	} else {
		// @ts-ignore
		selector = `slug: "${getSlug(view.titleEl.innerText)}"`
	}

	const query = gql`{
    	tag(input: { 
			selector: {
				${selector}	
			}
        }) {
          result {
            _id
            name
            core
            slug
            oldSlugs
            description {
                markdown
            }
            parentTag {
                name        
            }
            subTags {
                name
              }
          }
        }
    }`

	return request('https://www.lesswrong.com/graphql', query)
		.then(({ tag }: { tag: { result: Tag } }) => {
			console.log(tag)
			updateTag(editor, view, frontmatter, tag.result)

			return tag.result;
		})		
		.catch((e) => new Notice(e.message))
}

const updateTag = async (editor: Editor, view: MarkdownView, frontmatter: TagFrontmatter, tag: Tag) => {
	const lines = view.data.split("\n");
	const lineIndex = lines.slice(1).findIndex(line => line.startsWith("---")) + 1;
	const head = {
		line: lineIndex,
		ch: 3
	}
	

	const remainder = lines.slice(lineIndex + 1).join("\n").trim();
	
	if (remainder === "") {
		// We only fill in the retrieved body if they're currently empty
		editor.replaceRange(
			await fixLinks(tag.description.markdown),
			{ line: lineIndex + 1, ch: 0 },
		)
	} else {
		// Otherwise we just fix the links
		editor.replaceRange(
			await fixLinks(remainder),
			{ line: lineIndex + 1, ch: 0 },
			{ line: lines.length + 1, ch: lines[lines.length-1].length }
		)
	}

	// Update frontmatter
	const newFrontmatter: TagFrontmatter = {
		...frontmatter,
		_id: tag._id,
		title: tag.name,
		slug: tag.slug,
		href: `https://www.lesswrong.com/tag/${tag.slug}`,
		synchedAt: new Date().toISOString(),
		type: 'tag',
		tags: 
			[...new Set([
				...(frontmatter?.tags ?? []),
				"LessWrong",
				"Tag",
				"Concept",
		  ]).values()]
	}

	if (tag.parentTag) {
		newFrontmatter.parent = tag.parentTag.name
	} 
	if (tag.subTags?.length > 0) {
		newFrontmatter.children = tag.subTags.map(t => t.name)
	}

	editor.replaceRange(
		`---\n${yaml.dump(newFrontmatter)}---`,
		{ line: 0, ch: 0 },
		head
	)	
}



const getSlug = (name: string) => 
    name.replace(/\&/g, 'and').replace(/[\s',\+\=]/g, '-').replace(/[^\w-]+/g, "").replace(/--/g, "").toLowerCase();

async function replaceAsync(str: string, regex: RegExp, replacer: (match: string, alias: string | null, href: string | null) => Promise<string>) {
	const fns: Promise<any>[] = []
	str.replace(regex, (m, ...args) => {
		fns.push(replacer(m, ...(args as [string, string])))
		return m
	})
	return Promise.all(fns).then(replacements => {
		return str.replace(regex, () => replacements.shift())
	})
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

			if (title === alias) {
				return `[[${title}]]`
			}

			return `[[${title}|${alias}]]`
		} 
		return match;
	})  
}


const getTitleFromLink = async (href: string) => {
	let id_or_slug = "";

    try {
		if (href.includes("/tag/")) {
			id_or_slug = href.split("/tag/")[1].split("/")[0].split("?")[0]	
		} else if (href.includes("/wiki/")) {
			id_or_slug = href.split("/wiki/")[1].split("/")[0].split("?")[0]	
		} else if (href.includes("/lw/")) {  // E.g.: /lw/nc/newcombs_problem_and_regret_of_rationality/ 
			id_or_slug = href.split("/lw/")[1].split("/")[1].split("?")[0]
		} else if (href.includes("/posts/")) {
			id_or_slug = href.split("/posts/")[1].split("/")[0].split("?")[0]
		} else if (href.includes("/p/")) {
			id_or_slug = href.split("/p/")[1].split("/")[0].split("?")[0]
		} else if (href.includes("/book/")) {
			id_or_slug = href.split("/book/")[1].split("/")[0]
		} else if (href.includes("/s/")) {
			id_or_slug = href.split("/s/")[1].split("/")[0]
		}
		
		const page = api!.pages('#LessWrong').where(p => p._id === id_or_slug || p.slug === id_or_slug).first()
		
		if (!page?.title) {
			console.error(page)
			throw new Error(id_or_slug)
		}

		return page.title
        
	} catch (e) {
		console.log("External:", e)
        return false;
    }
}