exports.replyPhoto = async (ctx, source, caption, reply_markup = null) => {
	const result = await ctx.replyWithPhoto(
		{ source },
		{ caption, parse_mode: "HTML", reply_markup }
	)
	ctx.session.user.message_id.push(result.message_id)
	return result
}

exports.reply = async (ctx, text, reply_markup) => {
	const result = await ctx.reply(text, { parse_mode: "HTML", reply_markup })
	ctx.session.user.message_id.push(result.message_id)
	return result
}
