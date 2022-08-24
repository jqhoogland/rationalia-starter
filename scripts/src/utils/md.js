export const splitSections = async (markdown) => {
    // Unfortunately, some posts use `\n\n**Section Heading**\n\n` to mark headings (instead of `#`s)
    return ("\n\n" + markdown).split("\n\n**").map(section => section.split("**\n\n")).map(([title, body]) => ({title, body}))    

}