const { Scenes } = require("telegraf")
const { replyPhoto, reply } = require("../src/reply")

const TEMPLATE = require("../template/ru")
const KEYBOARD = require("../keyboards")

const scene = new Scenes.BaseScene("CODE_REGISTRATION_SCENE")
scene.enter(ctx => {
	try {
		replyPhoto(
			ctx,
			"./image/main.jpg",
			TEMPLATE.CODE_REGISTRATION_MESSAGE(1),
			KEYBOARD.CODE_REGISTRATION_BUTTON
		)
	} catch (err) {
		console.log(err)
	}
})

scene.on("message", (ctx, next) => {
	ctx.session.user.message_id.push(ctx.message.message_id)
	return next()
})

scene.on("text", (ctx, next) => {
	if (ctx.message.text.slice(0, 1) === "/") return next()
	// Проверка кода
	// Повториь звонок
})

module.exports = scene
