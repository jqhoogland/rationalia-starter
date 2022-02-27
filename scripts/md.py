"""

I could probably have used an existing library (like SnakeMd), but none of these have support for all the
fancy MD-extensions that Obsidian has. I suppose I could have written this in JS, but who wants to do that.

"""
import re

class Markdown():
    hl = "\n---\n"

    def __init__(self):
        pass

    @staticmethod
    def frontmatter(**kwargs):
        return "---\n" + "\n".join(map(lambda item: f"{item[0]}: {item[1]}",  kwargs.items())) + "\n---\n\n"

    @staticmethod
    def read_frontmatter(text: str):
        return dict(re.findall("---\n(?:([\w\d]*): (.*)\n*\n)*---", text) or [])

    @staticmethod
    def clean_link(text: str):
        text = text.replace(" / ", " & ")
        text = text.replace("/", " & ")
        return text

    @classmethod
    def embed_link(cls, text: str):
        return f"!{cls.wiki_link(text)}"

    @staticmethod
    def link(text: str, url: str):
        return f"[{text}]({url})"

    @staticmethod
    def title(title: str="", level: int=1):
        return "#" * level + " " + title + "\n"

    @staticmethod
    def list_item(text: str):
        return f"- {text}"

    @classmethod
    def list(cls, ls: list):
        return "\n".join([cls.list_item(item) for item in ls]) + "\n\n"

    @classmethod
    def wiki_link(cls, text: str):
        return f"[[{cls.clean_link(text)}]]"

    @staticmethod
    def p(text: str =""):
        return text + "\n\n"

    @staticmethod
    def it(text: str = ""):
        return f"*{text}*"

    @staticmethod
    def strong(text: str = ""):
        return f"**{text}**"

    @staticmethod
    def blockquote(text: str = ""):
        return f"> {text}"
