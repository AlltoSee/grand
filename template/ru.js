module.exports = {
	REGISTRATION_MESSAGE:
		'<b>Здравствуйте!</b> Чтобы воспользоваться нашими услугами, нужно подтвердить номер телефона, для это нажмите кнопку <b>"Регистрация"</b>\n\n<i>Если вы не видите кнопку, то просто нажмите квадратик с четырьмя точками.</i>',
	REGISTRATION_BUTTON: "Регистрация",
	ABOUT_BUTTON: "О нас",
	ABOUT_MESSAGE: "О нас",
	PHONE_REGISTRATION_MESSAGE:
		'Нажмите на кнопку <b>"Поделиться номером"</b> или напишите номер телефона вручную.\n\n<i>Пример: 8 987 147 57 67</i>',
	PHONE_ERR_REGISTRATION_MESSAGE: "Неверный формат номера телефона",
	PHONE_REGISTRATION_BUTTON: "Поделиться номером",
	CODE_REGISTRATION_MESSAGE: int =>
		`<b>Напишите код.</b>\nВ течение минуты вам поступит звонок и ваш код это последний четыре цифры.\n\n<i>Пример: +7(987)147-<b>57</b>-<b>67</b>- Ваш код <b>5767</b>\n\nЕсли не поступил звонок попробуйте нажать кнопку <b>"Повторить звонок"</b> через <b>${int} минуту</b> или напишите сюда</i>`,
	CODE_TIME_LIMIT_REGISTRATION_MESSAGE:
		"<b>Напишите код.</b>\nВ течение минуты вам поступит звонок и ваш код это последний четыре цифры.\n\n<i>Пример: +7(987)147-<b>57</b>-<b>67</b>- Ваш код <b>5767</b>\n\nЕсли не поступил звонок напишите сюда</i>",
	CODE_ERR_REGISTRATION_MESSAGE:
		"Код не верный, проверти правильность проверочного кода",
	CODE_OK_REGISTRATION_MESSAGE: "Вы успешно подтвердили номер",
	CODE_LIMIT_REGISTRATION_MESSAGE:
		"Привышено допустимое количество попыток. Попробуйте сменить номер или повторить звонок",
	CODE_REGISTRATION_BUTTON: "Повторить звонок",
	PHONE_EDIT_REGISTRATION_BUTTON: "Сменить номер",
	GOOD_NIGHT: name => `Добрый ночи, ${name}`,
	GOOD_MORNING: name => `Доброе утро, ${name}`,
	GOOD_AFTERNOON: name => `Добрый день, ${name}`,
	GOOD_EVENING: name => `Добрый вечер, ${name}`,
	TAXI_USER_BUTTON: "Такси",
	SETTINGS_BUTTON: "Настройки",
}
