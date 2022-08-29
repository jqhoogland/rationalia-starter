import request, { gql } from 'graphql-request';
import * as yaml from 'js-yaml';
import { Editor, MarkdownView, Notice, Plugin } from 'obsidian';

// Remember to rename these classes and interfaces!

interface MyPluginSettings {
}

const DEFAULT_SETTINGS: MyPluginSettings = {
}
export default class MyPlugin extends Plugin {
	settings: MyPluginSettings;

	async onload() {
		await this.loadSettings();

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

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}

const syncNote = async (editor: Editor, view: MarkdownView) => {
	// @ts-ignore TODO: Add to declarations
	const frontmatter = JSON.parse(view!.lastFrontmatter);

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

const syncTag = async (editor: Editor, view: MarkdownView, frontmatter: { type: 'tag', _id?: string, slug?: string  } & { [key: string]: any}) => {
	console.log(editor, view)

	let selector = "";

	if (frontmatter._id) {
		selector = `_id: "${frontmatter._id}"`
	} else if (frontmatter.slug) {
		selector = `slug: "${frontmatter.slug}"`
	} else {
		selector = `slug: "${frontmatter}"`
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

	return request('https://www.lesswrong.com/graphql', query).then(({ tag }: { tag: { result: Tag } }) => {
		
		// Inserted by who knows
		if ("position" in frontmatter) {
			delete frontmatter.position;
		}

		updateFrontmatter(editor, view, {
			...frontmatter,
			_id: tag.result._id,
			title: tag.result.name,
			synchedAt: new Date().toISOString(),
		})

		// We only update the remaining contents if they're currently empty

		return tag.result;
	})		
}

const updateFrontmatter = (editor: Editor, view: MarkdownView, frontmatter: Record<string, any>) => {
	const lines = view.data.split("\n");
	const lineIndex = lines.slice(1).findIndex(line => line.startsWith("---")) + 1;
	const head = {
		line: lineIndex,
		ch: 3
	}
	console.log("SETTING", frontmatter)

	editor.replaceRange(
		`---\n` + yaml.dump(frontmatter) + "---",
		{ line: 0, ch: 0 },
		head
	)
	// editor.
}