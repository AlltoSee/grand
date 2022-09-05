require("dotenv").config()
const { Telegraf, Scenes, session } = require("telegraf")
const { PrismaClient } = require("@prisma/client")

const arrScenes = require("./src/handler_scenes")

const bot = new Telegraf(process.env.BOT_TOKEN)
const stage = new Scenes.Stage(arrScenes)
const prisma = new PrismaClient()

bot.use(session())
bot.use(stage.middleware())

bot.use(require("./commands/start.command"))
bot.use(require("./commands/help.command"))

bot.launch()

process.once("SIGINT", () => bot.stop("SIGINT"))
process.once("SIGTERM", () => bot.stop("SIGTERM"))
