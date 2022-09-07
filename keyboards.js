const TEMPLATE = require("./template/ru")

module.exports = {
	REGISTRATION_BUTTON: {
		keyboard: [
			[{ text: TEMPLATE.REGISTRATION_BUTTON }],
			[{ text: TEMPLATE.ABOUT_BUTTON }],
		],
		resize_keyboard: true,
	},
	PHONE_REGISTRATION_BUTTON: {
		keyboard: [
			[{ text: TEMPLATE.PHONE_REGISTRATION_BUTTON, request_contact: true }],
		],
		resize_keyboard: true,
	},
	CODE_REGISTRATION_BUTTON: {
		keyboard: [[{ text: TEMPLATE.CODE_REGISTRATION_BUTTON }]],
		resize_keyboard: true,
	},
}
