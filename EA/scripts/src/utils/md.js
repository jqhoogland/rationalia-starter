import { unified } from "unified";
import remarkParse from 'remark-parse';
import sectionize from 'remark-sectionize';
import fs from 'fs';

// Unified does not seem to work in bun + ts environment
const getSections = async (markdown) => {
    return await unified()
        .use(remarkParse)
        .use(sectionize)
        .parse(markdown)
}


(async () => getSections(fs.readFileSync('../LW/Reading Orders/XiXiDu\'s Order.md', "utf-8")).then(tree => console.log(JSON.stringify(tree, null, 2))))()