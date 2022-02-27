import requests, json, os, re

from bs4 import BeautifulSoup
import unidecode

from scripts.md import Markdown

def strip_params(url: str):
    """
    Takes a url and removes any trailing url strip_params

    "example.com?a=1&b=2" -> "example.com"
    """

    if not url:
         return url

    if "?" in url:
        return url[0:url.index("?")]

    return url


def slugify(text: str):
    text = unidecode.unidecode(text).lower()
    return re.sub(r'[\W_]+', '-', text)


def parse_concepts(src_path: str):
    """

    Turns LessWrong's /tags/all page into the following data structure:

    ```
    {
       "<Category>": {
           "<Subcategory>": {
              "body": List(Tuple("<TagName>", "<TagLink>")),
              "specifics": List(Tuple("<TagName>", "<TagLink>"))
           },
           ...
       },
       ...
    }
    ```

    """

    page = requests.get(src_path)
    soup = BeautifulSoup(page.content, "html.parser")

    # HEADINGS ("Rationality", "Artificial Intelligence", ....)
    # Fortunately these are all in full caps, so we can easily discard incorrect heading matches.
    # There's also one heading that contains only a non-breaking space (\xa0), so we get rid of this.
    headings = [h.string.replace(u"\xa0", u"") for h in soup.find_all('h1')]
    headings = [h[0] + h[1:].lower() for h in headings if h and h == h.upper()]

    # TABLES (one for each heading)
    tables = [t for t in soup.find_all('figure', attrs={"class": "table"})]
    data = {h: {} for h in headings}

    for h, t in zip(headings, tables):
       subsections = t.find_all("td")

       for subsection in subsections:
           # Some (but not all) subsections have an additional specifics section.
           children = [c for c in subsection.children]

           subheading = children[0].string
           body = children[1]
           specifics = children[2] if len(children) == 3 else None

           body_tags = body.find_all("a") or subsection.find_all("a")
           specific_tags = specifics.find_all("a") if specifics is not None else []

           data[h][subheading] = {
               "body": [(tag.string, strip_params(tag["href"])) for tag in body_tags],
               "specifics": [(tag.string, strip_params(tag["href"])) for tag in specific_tags]
           }

    return data


def write_concepts_portal(links, src_path, out_path):
    with open(out_path, "w") as f:
        md = Markdown()
        links = "\n\n".join(map(lambda category: md.embed_link(category), links))

        f.write(md.frontmatter(tags=["LessWrong", "Portal"], src=src_path))
        f.write(links)


def get_tag_description(name: str, slug=None, soup=None):
    """
    TODO: Some descriptions are shortened, and contain a `Read more` button at the end. How to extract the remaining info?
    FYI: It's contained in the meta description tags (but these lack links)

    :param name:
    :return:
    """
    try:
        md = Markdown()

        if soup is None:
            slug = slug or slugify(name)
            response = requests.get(f"http://lesswrong.com/tag/{slug}")
            soup = BeautifulSoup(response.content, "html.parser")

        description = soup.find("div", attrs={"class": "TagPage-description"})

        if description is None:
            print(f"[Error] Could not find description for {name}")
            return ""

        for sp in description.find_all("span"):
            sp.unwrap()

        for it in description.find_all("i"):
            it.replace_with(md.it("".join(it.strings)))

        for strong in description.find_all("i"):
            strong.replace_with(md.strong("".join(strong.strings)))

        for u in description.find_all("u"):
            u.unwrap()  # Currently no way to handle underlines

        # We'll fix links to other concepts after a first pass of all tags
        for a in description.find_all("a"):
            a.replace_with(md.link("".join(a.strings), a.get("href", "")))

        for bq in description.find_all("blockquote"):
            bq.replace_with(md.blockquote("".join(bq.strings)))

        # If there is a table, remove it. This is already parsed on the Concepts portal home (/tags/all).
        tables = description.find_all("figure", attrs={"class": "table"})
        for t in tables:
            t.extract()

        res = ""

        for c in description.children:
            if c.name == "p" or c.name is None:
                res += md.p("".join(c.strings))

            elif (match := re.search(r'h(\d)', c.name)) and (level := int(match.group(1))):
                res += (md.title(c.string or "", level))

            elif c.name == "ul":
                res += md.list(c.strings)

        return res
    except TypeError:
        return ""


def write_category_portal(category, data, out_path):
    tags = []

    with open(os.path.join(out_path, category + ".md"), "w") as f:
        md = Markdown()

        f.write(md.frontmatter(tags=["LessWrong", "Portal", "Category"], src=f"https://www.lesswrong.com/tag/{slugify(category)}"))

        # For each concept, copy the standard description from LessWrong as a placeholder.
        f.write(md.title(category))
        f.write(get_tag_description(category))
        f.write(f"\n{md.hl}\n")

        for (subcategory, subdata) in data.items():

            f.write(md.title(subcategory or "Other", 3))
            for (tag, href) in subdata["body"]:
                f.write(md.list_item(md.wiki_link(tag)))
                f.write("\n")

            tags.extend(subdata["body"])

            if len(subdata["specifics"]) > 0:
                f.write("\n")
                f.write(md.title("Specifics", 5))
                for (tag, href) in subdata["specifics"]:
                    f.write(md.list_item(md.wiki_link(tag)))
                    f.write("\n")

                tags.extend(subdata["specifics"])

            f.write("\n\n")

    # Create a note for each tag
    for (tag, href) in tags:
        tag = md.clean_link(tag)

        full_out_path = os.path.join(out_path, tag + ".md")

        if not os.path.isfile(full_out_path):
            with open(full_out_path, "w") as f:
                f.write(md.frontmatter(tags=["LessWrong", "Concept"], src=href))
                f.write(md.title(tag))
                try:
                    desc = get_tag_description(tag)
                    f.write(desc)
                except TypeError:
                    pass


def load_concept_from(url: str, out_path="../Concepts"):
    md = Markdown()

    print(f"[Concept]: Loading from {url}...")

    url = url.replace("lessestwrong", "lesswrong")

    response = requests.get(url)
    soup = BeautifulSoup(response.content, "html.parser")

    title = soup.find("h1")

    if title is None:
        print(f"[Error] Could not retrieve concept from {url}")
        return None

    title = md.clean_link(title.string)

    print(f"[{title}]: Writing file...")

    with open(os.path.join(out_path, title + ".md"), "w") as f:
        f.write(md.frontmatter(tags=["LessWrong", "Portal", "Concept"], src=strip_params(url)))
        f.write(get_tag_description(title, soup=soup))
        f.write(f"\n{md.hl}\n")

    print(f"[{title}]: Completed.")
    return title


def load_concepts(src_path="https://www.lesswrong.com/tags/all", out_path="../Concepts"):
    # Parse /tags/all
    data = parse_concepts(src_path)

    # Create a Concepts page to display /tags/all
    # This is a list of embedded links for each major category (`![[<Category>]]`).
    write_concepts_portal(data.keys(), src_path, out_path + ".md")

    # Create a page for each category
    for (key, value) in data.items():
        write_category_portal(key, value, out_path)

    # TODO: Go through each file and transform external links to internal links


if __name__ == "__main__":
    load_concepts()
