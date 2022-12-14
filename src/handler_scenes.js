const fs = require("fs")

const folder = "./scenes"

const arrScenes = []
fs.readdirSync(folder).forEach(file => {
	if (file.indexOf(".") !== 0 && file.slice(-3) === ".js") {
		const module = require(`../scenes/${file}`)
		arrScenes.push(module)
	}
})

module.exports = arrScenes
