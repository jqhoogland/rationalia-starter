import request, { gql } from 'graphql-request';
import * as yaml from 'js-yaml';
import { Editor, MarkdownView, Notice, Plugin } from 'obsidian';
import { getAPI } from "obsidian-dataview";

const api = getAPI();

// Do not update any notes that have been synched within this many milliseconds of the current time (default = 1 day.)
// TODO: Make this a configurable setting.
const IGNORE_PERIOD_MS = 1000 * 60 * 60;

export default class Rationalia extends Plugin {
	settings = {};
	

	async onload() {

		this.addCommand({
			id: 'sync-note',
			name: 'Sync active note with LW/EA',
			editorCallback: async (editor: Editor, view: MarkdownView) => {
				// @ts-ignore
				const title = view.titleEl.innerText;
				
				this.app.vault.modify(
					view.file,
					(await syncNote(title, editor.getValue())) ?? ""
				)
			}
		})

		this.addCommand({
			id: 'sync-all-notes',
			name: 'Sync all notes with LW/EA',
			callback: async () => {
				let numberOfErrors = 0;

				const files = this.app.vault.getMarkdownFiles();

				// Batches of 100
				const batchSize = 10;
				for (let i = 0; i < files.length / batchSize; i++) {
					console.log("Synching files " + (i * batchSize) + " to " + ((i + 1) * batchSize));
					await Promise.all(files.slice(i * batchSize, (i + 1) * batchSize).map(async (file) => {
						try {
							console.log(file.basename)
							this.app.vault.modify(
								file,
								(await syncNote(file.basename, await this.app.vault.read(file))) ?? ""
							)
						} catch (error) {
							if (error?.message === "Network request failed") {
								throw error;
							}
							console.error("Error:", error)
							numberOfErrors += 1;
						}
					}));
					
					await new Promise((resolve) => setTimeout(resolve, 10));
				}
				if (numberOfErrors === 0) {
					new Notice('Synched all files');
				} else {
					const amountOfErrorsMessage = numberOfErrors === 1 ? 'was 1 error' : 'were ' + numberOfErrors + ' errors';
					new Notice('Synched all files and there ' + amountOfErrorsMessage + '.');
				}
			}
		})

		this.addCommand({
			id: 'add-flashcards',
			name: 'Add flashcard(s) for current note.',
			editorCallback: (editor: Editor, view: MarkdownView) => {
				addFlashcards(editor, view)
			}
		})
	}

	onunload() {
	}
}
const getFlashcardTemplate = (title: string) => `

%%

% START
Basic (and reversed card)
What is **${title}**?
Back: {TODO}
Tags: LessWrong
END

%%
	
`

const addFlashcards = (editor: Editor, view: MarkdownView) => {
	// @ts-ignore titleEl
	const title = view.titleEl.innerText;
	const cardsString = getFlashcardTemplate(title)

	editor.replaceRange(
		cardsString,
		{
			line: view.data.split("\n").length,
			ch: 0
		}
	)

}

type NoteFrontmatter = TagFrontmatter | PostFrontmatter | { [key: string]: any }

const syncNote = async (title: string, value: string) => {
	const lines = value.split("\n");
	const frontmatterEnd = lines.slice(1).findIndex(line => line.startsWith("---")) + 1;

	// @ts-ignore TODO: Add to declarations
	const frontmatter = yaml.load(lines.slice(1, frontmatterEnd).join("\n")) as NoteFrontmatter;
	
	// We only update those notes not synced in the past day
	if (!frontmatter || (frontmatter.synchedAt && new Date(frontmatter.synchedAt).getTime() > new Date().getTime() - IGNORE_PERIOD_MS)) {
		return value;
	}
	
	const body = lines.slice(frontmatterEnd + 1).join("\n");
	
	// Inserted by who knows
	if ("position" in frontmatter) {
		delete frontmatter.position;
	}


	switch (frontmatter.type) {
		case 'tag':
		 	return syncTag(title, frontmatter as TagFrontmatter, body)
		case 'post': 
			console.log("[Post]: Synching " + title)
			return syncPost(title, frontmatter as PostFrontmatter, body)
		default: 
			return syncMisc(frontmatter, body)
	}
	return value;
}

const combine = (frontmatter: NoteFrontmatter, body: string) => {
	return (
		`---\n${yaml.dump(frontmatter)}---\n`
		+ body
	)	
}

const syncMisc = async (frontmatter: { [key: string]: any }, body: string) => {
	const newFrontmatter: typeof frontmatter = {
		...frontmatter,
		status: frontmatter?.status ?? "todo"
	}

	return combine(
		newFrontmatter,
		body
	)	
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

const getTag = (title: string, frontmatter: TagFrontmatter) => {
	const selector = getGQLSelector(frontmatter, title)

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

	return request('https://www.lesswrong.com/graphql', query, {}, { Host: "www.lesswrong.com"})
		.then(({ tag }: { tag: { result: Tag } }) => {
			return tag.result;
		})		
		.catch((e) => {
			new Notice(e.message)
			throw e;
		})
}

const syncTag = async (title: string, frontmatter: TagFrontmatter, body: string) => {
	return getTag(title, frontmatter).then(tag => 
		updateTag(title, frontmatter, body, tag)
	)
}


const updateTag = async (title: string, frontmatter: TagFrontmatter, body: string, tag: Tag) => {
	if (body === "") {
		// We only fill in the retrieved body if they're currently empty
		// body = await fixLinks(tag.description.markdown)
	} else {
		// Otherwise we just fix the links
		// body = await fixLinks(body)
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
			]).values()],
		status: frontmatter?.status ?? "todo",
	}

	if (tag.parentTag) {
		newFrontmatter.parent = tag.parentTag.name
	} 
	if (tag.subTags?.length > 0) {
		newFrontmatter.children = tag.subTags.map(t => t.name)
	}

	if (!body.includes("START")) {
		body += getFlashcardTemplate(title)
	}

	return combine(
		newFrontmatter,
		body
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
	let type_ = "";

    try {
		if (href.includes("/tag/")) {
			id_or_slug = href.split("/tag/")[1].split("/")[0].split("?")[0]	
			type_ = "tag";
		} else if (href.includes("/wiki/")) {
			id_or_slug = href.split("/wiki/")[1].split("/")[0].split("?")[0]	
			type_ = "tag";
		} else if (href.includes("/lw/")) {  // E.g.: /lw/nc/newcombs_problem_and_regret_of_rationality/ 
			id_or_slug = href.split("/lw/")[1].split("/")[1].split("?")[0].replaceAll("_", "-")
			type_ = "post";
		} else if (href.includes("/posts/")) {
			id_or_slug = href.split("/posts/")[1].split("/")[0].split("?")[0]
			type_ = "post";
		} else if (href.includes("/p/")) {
			id_or_slug = href.split("/p/")[1].split("/")[0].split("?")[0]
			type_ = "post";
		} else if (href.includes("/book/")) {
			id_or_slug = href.split("/book/")[1].split("/")[0]
			type_ = "book";
		} else if (href.includes("/s/")) {
			id_or_slug = href.split("/s/")[1].split("/")[0]
			type_ = "sequence";
		}
		
		const page = api!.pages('#LessWrong').where(p =>
			p.type === type_ && (
				p._id === id_or_slug
				|| p.slug === id_or_slug
				|| p.slug === id_or_slug
			)
		).first()
		
		if (!page?.title) {
			throw new Error(id_or_slug)
		}

		return page.title
	} catch (e) {
        return false;
    }
}

const getGQLSelector = (frontmatter: { _id?: string, slug?: string }, title: string) => {
	if (frontmatter._id) {
		return `_id: "${frontmatter._id}"`
	} else if (frontmatter.slug) {
		return `slug: "${frontmatter.slug}"`
	} else {
		return `slug: "${getSlug(title)}"`
	}
}

interface Post {
	_id: string;
	title: string;
	slug: string;
	tags: TagPreview[];
	author: string;
	pageUrl: string;
	canonicalCollection: {
		title: string
	},
	canonicalBook: {
		title: string
	},
	canonicalSequence: {
		title: string
	},
	contents: {
		markdown: string
	}
}

const getPost = async (title: string, frontmatter: Partial<PostFrontmatter>) => {
	const selector = getGQLSelector(frontmatter, title)

	const query = gql`{
    	post(input: { 
			selector: {
				${selector}	
			}
        }) {
          result {
            _id
            title
            slug
            author
            pageUrl
            canonicalCollection {
                title        
            }
			canonicalBook {
				title
			}
			canonicalSequence {
				title
			}
            tags {
                name
			}
			contents {
				markdown
			}
          }
        }
    }`

	return request('https://www.lesswrong.com/graphql', query, {}, { Host: "www.lesswrong.com"})
		.then(({ post }: { post: { result: Post } }) => {
			return post.result;
		})		
		.catch((e) => {
			new Notice(e.message);
			throw e;
		})
}

const syncPost = async (title: string, frontmatter: Partial<PostFrontmatter>, body: string) => {
	return getPost(title, frontmatter).then(post => 
		updatePost(title, frontmatter, body, post)
	)	
}

const updatePost = async (title: string, frontmatter: Partial<PostFrontmatter>, body: string, post: Post) => {
	const newFrontmatter: PostFrontmatter = {
		...frontmatter,
		_id: post._id,
		title: post.title,
		slug: post.slug,
		href: post.pageUrl,
		synchedAt: new Date().toISOString(),
		type: 'post',
		tags: 
			[...new Set([
				...(frontmatter?.tags ?? []),
				"LessWrong",
				"Post",
				...post.tags.map(tag => makeTag(tag.name)),
			]).values()],
		collection: post?.canonicalCollection?.title,
		book: post?.canonicalBook?.title,
		sequence: post?.canonicalSequence?.title,
		author: post.author,
		status: frontmatter?.status ?? "todo",
	}

	if (!body.contains("# Related")) {
		const related = new Set([
			...post.tags.map(tag => `[[${tag.name}]]`),
			...(await getLinks(post.contents.markdown))
		])

		body += `\n\n# Related\n\n${[...related.values()].map(tag => `- ${tag}`).join("\n")}`
	}

	return combine(
		newFrontmatter,
		body // await fixLinks(body)
	)	
}

const makeTag = (tag: string) => tag.replaceAll(" ", "_");
const getLinks = async (body: string) => {
	// Matches `.[alias](href)` (with one preceding character to avoid images)
	const links = body.match(/[^\!]\[([^\]]+)\]\(([^\)]+)\)/g) ?? []
	
	return Promise.all(
		links.map(async (link) => {
			// Don't match footnote links
			const [, , href] = link.match(/\[([^\]\^][^\]]+)\]\(([^\)\#][^\)]+)\)/) ?? []
			const fixedLink = await getTitleFromLink(href)
			if (!fixedLink) {
				return `"${link.slice(1)}"`;
			}
			return `[[${fixedLink}]]`
	}))
}

type Status = "todo" | "in progress" | "done"

export interface PostFrontmatter {
	_id: string;
	title: string;
	slug: string;
	type: "post";
	tags: string[];
	href: string;
	collection: string | null;
	book: string | null;
	sequence: string | null;
	chapter?: string | null;
	synchedAt: string;
	author: string;
	status: Status
}
