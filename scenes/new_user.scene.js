const { Scenes } = require("telegraf")
const { replyPhoto, reply } = require("../src/reply")

const TEMPLATE = require("../template/ru")
const KEYBOARD = require("../keyboards")

const scene = new Scenes.BaseScene("NEW_USER_SCENE")
scene.enter(ctx => {
	try {
		ctx.session.user.message_id = []
		replyPhoto(
			ctx,
			"./image/main.jpg",
			TEMPLATE.REGISTRATION_MESSAGE,
			KEYBOARD.REGISTRATION_BUTTON
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
	try {
		if (ctx.message.text.slice(0, 1) === "/") return next()
		if (ctx.message.text === TEMPLATE.REGISTRATION_BUTTON) {
			ctx.scene.enter("PHONE_REGISTRATION_SCENE")
		}
		if (ctx.message.text === TEMPLATE.ABOUT_BUTTON) {
			reply(ctx, TEMPLATE.ABOUT_MESSAGE, null)
		}
	} catch (err) {
		console.log(err)
	}
})

module.exports = scene
