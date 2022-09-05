const TEMPLATE = require("./template/ru")

module.exports = {
	REGISTRATION_BUTTON: {
		keyboard: [
			[{ text: TEMPLATE.REGISTRATION_BUTTON }],
			[{ text: TEMPLATE.ABOUT_BUTTON }],
		],
		resize_keyboard: true,
	},
}
