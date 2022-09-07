const { Scenes } = require("telegraf")
const { replyPhoto, reply } = require("../src/reply")
const { deleteMessage } = require("../src/delete_message")

const TEMPLATE = require("../template/ru")
const KEYBOARD = require("../keyboards")

const scene = new Scenes.BaseScene("CODE_REGISTRATION_SCENE")
scene.enter(ctx => {
	try {
		ctx.session.user.attempt_code = 0
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

scene.on("text", async (ctx, next) => {
	if (ctx.message.text.slice(0, 1) === "/") return next()
	if (TEMPLATE.PHONE_EDIT_REGISTRATION_BUTTON === ctx.message.text) {
		return ctx.scene.enter("PHONE_REGISTRATION_SCENE")
	}
	// Повториь звонок
	// Нужно сделать чтоб кнопка повторить звонок появилсья только через 1 минуту
	if (TEMPLATE.CODE_REGISTRATION_BUTTON === ctx.message.text) {
		return ctx.scene.enter("CODE_REGISTRATION_SCENE")
	}

	// Проверка кода
	if (ctx.session.user.call_code === ctx.message.text) {
		await reply(ctx, TEMPLATE.CODE_OK_REGISTRATION_MESSAGE, null)
		deleteMessage(ctx)
		ctx.scene.enter("USER_SCENE")
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
