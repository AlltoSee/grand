const { bot } = require("../../connections/token.connection")
module.exports = bot.start(async ctx => {
	await ctx.reply("Привет")
})
