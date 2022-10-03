import { prisma } from "./prisma"


export const createWorkspace = async (name: string) => {
	const workspace = await prisma.workspaces.create({
		data: {
			name
		}
	})

	return workspace
}
