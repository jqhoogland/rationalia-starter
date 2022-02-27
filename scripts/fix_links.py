import os, re

from scripts.md import Markdown

def fix_links(path="../Concepts"):
    md = Markdown()

    for filepath in os.listdir(path):
        with open(os.path.join(path, filepath), "r+") as f:
            #  Read the entire file at a time (these are relatively small text files)
            data = f.read()

            # Fix the tags
            tag_matches = re.findall("\[(.?)\]\((http.*/tag/(.?))\)", data)
            for (tag, link, slug) in tag_matches:
                tag = md.clean_link(tag)
                if not os.path.isfile(os.path.join(path, tag + ".md")):
                    # Make sure the referenced tag exists in our Concepts folder
                    print(f"[Error] {tag}.md not found")

            # Replace the external md-style links with local wiki-style links
            data = re.sub("\[(.?)\]\((http.*/tag/(.*))\)", r'[[\1]]', data)
            print(filepath, data, sep="\n")

            # Fix links to posts
            post_matches = re.findall("\[(.?)\]\((http.*/post/(.?))\)", data)
            for (post, link, slug) in tag_matches:
                post = md.clean_link(post)
                if not os.path.isfile(os.path.join(path, post + ".md")):
                    # Make sure the referenced tag exists in our Concepts folder
                    print(f"[Error] {post}.md not found")

                    return


            # Write to the file
            f.seek(0)  # To overwrite (rather than append)
            f.write(data)

            return


if __name__ == "__main__":
    fix_links()