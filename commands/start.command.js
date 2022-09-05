const { Composer } = require("telegraf")
const { findUniqueUser, createUser } = require("../src/db")

const bot = new Composer()

bot.start(async ctx => {
	try {
		const chat_id = ctx.message.chat.id.toString()
		const { first_name, last_name } = ctx.message.chat

		const user = await findUniqueUser(chat_id)

		if (!user) await createUser(chat_id, first_name, last_name)
		if (!user?.phone) return ctx.scene.enter("NEW_USER_SCENE")

		if (user.role === "user") ctx.scene.enter("USER_SCENE")
		if (user.role === "driver") ctx.scene.enter("DRIVER_SCENE")
		if (user.role === "admin") ctx.scene.enter("ADMIN_SCENE")

		ctx.session.user = user
	} catch (err) {
		console.log(err)
	}
})

module.exports = bot
