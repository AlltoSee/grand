const { Scenes } = require("telegraf")
const { replyPhoto, reply } = require("../src/reply")

const TEMPLATE = require("../template/ru")
const KEYBOARD = require("../keyboards")

const scene = new Scenes.BaseScene("USER_SCENE")
scene.enter(ctx => {
	const name = ctx.session.user.first_name
	const date = new Date().getHours()

	let text = null

	if (date >= 0 && date < 6) text = TEMPLATE.GOOD_NIGHT(name)
	if (date >= 6 && date < 12) text = TEMPLATE.GOOD_MORNING(name)
	if (date >= 12 && date < 18) text = TEMPLATE.GOOD_AFTERNOON(name)
	if (date >= 18 && date <= 23) text = TEMPLATE.GOOD_EVENING(name)

	replyPhoto(ctx, "./image/main.jpg", text, KEYBOARD.USER_BUTTON)
})
scene.hears("taxi", ctx => ctx.scene.enter(""))

module.exports = scene
