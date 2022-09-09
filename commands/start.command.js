const { Composer } = require("telegraf")
const { findUniqueUser, createUser } = require("../src/db")
const { deleteMessage } = require("../src/delete_message")

const bot = new Composer()

bot.start(async ctx => {
	try {
		const chat_id = ctx.message.chat.id.toString()
		const { first_name, last_name } = ctx.message.chat

		await ctx.deleteMessage(ctx.message.message_id)
		deleteMessage(ctx)

		const user = await findUniqueUser(chat_id)
		ctx.session.user = user

		if (!user) {
			const user = await createUser(chat_id, first_name, last_name)
			ctx.session.user = user
		}
		ctx.session.user.message_id = []
		if (!user?.phone) return ctx.scene.enter("NEW_USER_SCENE")

		if (user.role === "user") ctx.scene.enter("USER_SCENE")
		if (user.role === "driver") ctx.scene.enter("DRIVER_SCENE")
		if (user.role === "admin") ctx.scene.enter("ADMIN_SCENE")
	} catch (err) {
		console.log(err)
	}
})

module.exports = bot
