import os, re, json

from scripts.md import Markdown
from scripts.load_concepts import load_concept_from

def get_slug(url: str):
    return url[url.rindex("/")+ 1:]

url_safe_regex = "[\.\:\/\?\s\w\d\&\-\_]"

def fix_links(path="../Concepts"):
    md = Markdown()

    # Work with slugs rather than full urls because some pages link to lesserwrong and greaterwrong.
    slugs_to_names = {}

    # First, we have to build a dictionary of tag links to tag names (links including tags might be aliased)
    for filepath in os.listdir(path):
        with open(os.path.join(path, filepath), "r+") as f:
            data = f.read()
            frontmatter = md.read_frontmatter(data)
            src = frontmatter.get("src", None)
            if src is not None:
                slugs_to_names[get_slug(src)] = filepath.replace(".md", "")
            else:
                print(f"[Error] No frontmatter on {filepath}")

    for (i, filepath) in enumerate(os.listdir(path)):
        with open(os.path.join(path, filepath), "r+") as f:
            #  Read the entire file at a time (these are small .md files)
            data = f.read()

            tag_matches = re.findall(f"\[({url_safe_regex}*?)\]\((http{url_safe_regex}*?/tag/({url_safe_regex}*?))\)", data)
            for (tag, link, slug) in tag_matches:
                tag = md.clean_link(tag)

                # Check to make sure all referenced tags exist in our Concepts folder
                og_name = slugs_to_names.get(slug, None)
                if og_name is None:
                    print(f"[Error] No concept found for {link}")
                    og_name = load_concept_from(link)
                    slugs_to_names[slug] = og_name

                # If the link contents don't match the name of the concept in our vault,
                # we treat `tag` as an alias.
                # E.g. [My alias](.../some-slug) -> [Some File|My alias](.../some-slug) -> [[Some File|My alias]]
                if og_name != tag:
                    # Decided against comparing .lower() (Obsidian is case-insensitive)
                    # because this will make it easier for users to edit file names
                    data = data.replace(f"[{tag}]", f"[{og_name}|{tag}]")

            # Replace the external md-style links with local wiki-style links
            data = re.sub(f"\[({url_safe_regex}*?)\]\((http{url_safe_regex}*?/tag/({url_safe_regex}*?))\)", r'[[\1]]', data)

            print(filepath, tag_matches, sep=": ")
            print(data)
            print("-" * 120)

            # Fix links to posts
            post_matches = re.findall(f"\[({url_safe_regex}*?)\]\((http{url_safe_regex}*?/post/({url_safe_regex}*?))\)", data)
            for (post, link, slug) in post_matches:
                post = md.clean_link(post)
                if not os.path.isfile(os.path.join(path, post + ".md")):
                    # Make sure the referenced tag exists in our Concepts folder
                    print(f"[Error] {post}.md not found")

            # Write to the file (overwrite rather than append)
            f.seek(0)
            f.write(data)
            f.truncate()


if __name__ == "__main__":
    fix_links()