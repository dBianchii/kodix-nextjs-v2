import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const createWorkspace = async (name: string) => {
	const workspace = await prisma.workspace.create({
		data: {
			name
		}
	})

	return workspace
}
