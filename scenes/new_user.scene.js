const { Scenes } = require("telegraf")

const TEMPLATE = require("../template/ru")
const KEYBOARD = require("../keyboards")

const scene = new Scenes.BaseScene("NEW_USER_SCENE")
scene.enter(ctx => {
	ctx.replyWithPhoto(
		{ source: "./image/main.jpg" },
		{
			caption: TEMPLATE.REGISTRATION_MESSAGE,
			parse_mode: "HTML",
			reply_markup: KEYBOARD.REGISTRATION_BUTTON,
		}
	)
})

scene.on("message", ctx => {
	//ctx.deleteMessage(ctx.message.message_id)
})

scene.on("text", (ctx, next) => {
	if (ctx.message.text.slice(0, 1) === "/") return next()
	if (ctx.message.text === TEMPLATE.REGISTRATION_BUTTON) {
	}
})

module.exports = scene
