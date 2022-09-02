require("dotenv").config()
const { Telegraf } = require("telegraf")

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start(ctx => ctx.reply("Welcome"))
bot.launch()

process.once("SIGINT", () => bot.stop("SIGINT"))
process.once("SIGTERM", () => bot.stop("SIGTERM"))
