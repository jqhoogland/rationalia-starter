# Collections

```dataviewjs
const pages = dv.pages("#Collection").where(p => p.tags.includes("Collection"))

dv.table([],
	pages
	.sort(k => k?.number, 'desc')
	.map(k => [k.file.link]))

```
