const { Scenes } = require("telegraf")
const { replyPhoto, reply } = require("../src/reply")
const { deleteMessage } = require("../src/delete_message")

const TEMPLATE = require("../template/ru")
const KEYBOARD = require("../keyboards")

const scene = new Scenes.BaseScene("CODE_REGISTRATION_SCENE")
scene.enter(ctx => {
	try {
		ctx.session.user.attempt_code = 0
		ctx.session.user.repeat = true
		replyPhoto(
			ctx,
			"./image/main.jpg",
			TEMPLATE.CODE_REGISTRATION_MESSAGE(1),
			KEYBOARD.CODE_REGISTRATION_BUTTON
		)

		const promise = new Promise(res => setTimeout(() => res(), 60000))
		promise.then(() => {
			if (ctx.session.user.repeat) {
				reply(
					ctx,
					TEMPLATE.CODE_REGISTRATION_MESSAGE(0),
					KEYBOARD.CODE_TIME_REGISTRATION_BUTTON
				)
			}
		})
	} catch (err) {
		console.log(err)
	}
})

scene.on("message", (ctx, next) => {
	ctx.session.user.message_id.push(ctx.message.message_id)
	return next()
})

scene.on("text", async (ctx, next) => {
	if (ctx.message.text.slice(0, 1) === "/") return next()
	if (TEMPLATE.PHONE_EDIT_REGISTRATION_BUTTON === ctx.message.text) {
		return ctx.scene.enter("PHONE_REGISTRATION_SCENE")
	}
	if (TEMPLATE.CODE_REGISTRATION_BUTTON === ctx.message.text) {
		const promise = new Promise(res => setTimeout(() => res(), 120000))
		promise.then(() => {
			if (ctx.session.user.repeat) {
				reply(
					ctx,
					TEMPLATE.CODE_REGISTRATION_MESSAGE(0),
					KEYBOARD.CODE_TIME_REGISTRATION_BUTTON
				)
			}
		})
		return replyPhoto(
			ctx,
			"./image/main.jpg",
			TEMPLATE.CODE_REGISTRATION_MESSAGE(2),
			KEYBOARD.CODE_REGISTRATION_BUTTON
		)
	}

	// Проверка кода
	if (ctx.session.user.call_code === ctx.message.text) {
		ctx.session.user.repeat = false

		const result = await ctx.reply(TEMPLATE.CODE_OK_REGISTRATION_MESSAGE)
		const promise = new Promise(res => setTimeout(() => res(), 5000))
		promise.then(() => {
			ctx.deleteMessage(result.message_id)
			deleteMessage(ctx)
			ctx.scene.enter("USER_SCENE")
		})
	} else {
		if (ctx.session.user.attempt_code < 3) {
			ctx.session.user.attempt_code++
			await reply(
				ctx,
				TEMPLATE.CODE_ERR_REGISTRATION_MESSAGE,
				KEYBOARD.CODE_REGISTRATION_BUTTON
			)
		} else {
			await reply(
				ctx,
				TEMPLATE.CODE_LIMIT_REGISTRATION_MESSAGE,
				KEYBOARD.CODE_REGISTRATION_BUTTON
			)
		}
	}
})

module.exports = scene
