const { Scenes } = require("telegraf")
const { replyPhoto, reply } = require("../src/reply")

const TEMPLATE = require("../template/ru")
const KEYBOARD = require("../keyboards")

const scene = new Scenes.BaseScene("USER_SCENE")
scene.enter(ctx => {
	replyPhoto(
		ctx,
		"./image/main.jpg",
		"Привет пользователь",
		KEYBOARD.CODE_REGISTRATION_BUTTON
	)
})

module.exports = scene
