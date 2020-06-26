const treeify = (paths) => {
	let result = []
	let level = {result}
	paths.forEach(path => {
		path.split('/').reduce((r, name) => {
			if (!r[name]) {
				r[name] = {result: []}
				r.result.push({name, children: r[name].result})
			}
			return r[name]
		}, level)
	})
	return result
}

export { treeify }