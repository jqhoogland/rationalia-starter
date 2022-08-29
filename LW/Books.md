# Books

```dataviewjs
const getCollection = (id) => dv.pages("#Collection").where(c => c._id === id).first();

// This can match "#Book Review" as well.
for (let group of dv.pages("#Book").where(p => p.tags.includes("Book")).groupBy(p => getCollection(p.collectionId)?.title) ?? "Miscellaneous") {
	dv.header(3, group.key);
	dv.table([],
		group.rows
			.sort(k => k.number, 'desc')
			.map(k => [k.file.link]))
}
```
