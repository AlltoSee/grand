exports.deleteMessage = ctx => {
	if (ctx.session.user?.message_id) {
		ctx.session.user.message_id.forEach((element, index) => {
			ctx.deleteMessage(element).catch(err => console.log(err))
		})
	}
}
