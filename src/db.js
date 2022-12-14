const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

exports.findUniqueUser = async chat_id => {
	const result = await prisma.user.findUnique({
		where: { chat_id },
	})
	return result
}

exports.createUser = async (chat_id, first_name, last_name) => {
	const result = await prisma.user.create({
		data: { chat_id, first_name, last_name },
	})
	return result
}

exports.updateUser = async (chat_id, phone) => {
	const result = await prisma.user.update({
		where: { chat_id },
		data: { phone: phone },
	})
	return result
}
