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
		keyboard: [[{ text: TEMPLATE.PHONE_EDIT_REGISTRATION_BUTTON }]],
		resize_keyboard: true,
	},
	CODE_TIME_REGISTRATION_BUTTON: {
		keyboard: [
			[{ text: TEMPLATE.CODE_REGISTRATION_BUTTON }],
			[{ text: TEMPLATE.PHONE_EDIT_REGISTRATION_BUTTON }],
		],
		resize_keyboard: true,
	},
	USER_BUTTON: {
		inline_keyboard: [
			[{ text: TEMPLATE.TAXI_USER_BUTTON, callback_data: "taxi" }],
			[{ text: TEMPLATE.SETTINGS_BUTTON, callback_data: "settings" }],
		],
	},
}
