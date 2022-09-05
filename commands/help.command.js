const { Composer } = require("telegraf")
const TEMPLATE = require("../template/ru")

const bot = new Composer()
bot.help(async ctx => {
	ctx.reply("Помощь")
})

module.exports = bot
