exports.deleteMessage = ctx => {
	if (ctx.session.user?.message_id) {
		ctx.session.user.message_id.forEach((element, index) => {
			if (ctx.session.user.message_id.length - 1 === index) return
			ctx.deleteMessage(element).catch(err => console.log(err))
		})
	}
}
