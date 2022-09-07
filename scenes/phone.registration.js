const { Scenes } = require("telegraf")
const { replyPhoto, reply } = require("../src/reply")

const TEMPLATE = require("../template/ru")
const KEYBOARD = require("../keyboards")

const validatePhone = phone => {
	let regex =
		/^(\+7|7|8)?[\s\-]?\(?[9][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/
	return regex.test(phone)
}

const scene = new Scenes.BaseScene("PHONE_REGISTRATION_SCENE")
scene.enter(ctx => {
	try {
		replyPhoto(
			ctx,
			"./image/main.jpg",
			TEMPLATE.PHONE_REGISTRATION_MESSAGE,
			KEYBOARD.PHONE_REGISTRATION_BUTTON
		)
	} catch (err) {
		console.log(err)
	}
})

scene.on("message", (ctx, next) => {
	ctx.session.user.message_id.push(ctx.message.message_id)
	return next()
})

scene.on("contact", ctx => {
	console.log(ctx.message.contact.phone_number)
	// функция вызова SMS.RU
})

scene.on("text", (ctx, next) => {
	try {
		if (ctx.message.text.slice(0, 1) === "/") return next()

		if (!validatePhone(ctx.message.text)) {
			return reply(
				ctx,
				TEMPLATE.PHONE_ERR_REGISTRATION_MESSAGE,
				KEYBOARD.PHONE_REGISTRATION_BUTTON
			)
		}
		ctx.session.user.phone = ctx.message.text
			.replace(/[^0-9,.]/g, "")
			.replace(/^[78]?/, "+7")

		// функция вызова SMS.RU
		const call_code = "5767"
		ctx.session.user.call_code = call_code

		ctx.scene.enter("CODE_REGISTRATION_SCENE")
	} catch (err) {
		console.log(err)
	}
})

module.exports = scene
