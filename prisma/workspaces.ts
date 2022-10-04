import { prisma } from "./prisma"

//READ
export const getAllWorkspaces = async () => {
	const workspaces = await prisma.workspaces.findMany({})
	return workspaces
}

export const getWorkspace = async (id: string) => {
	const workspace = await prisma.workspaces.findUnique({
		where: { id }
	})
	return workspace
}

// CREATE
export const createWorkspace = async (name: string) => {
	const workspace = await prisma.workspaces.create({
		data: {
			name
		}
	})
	return workspace
}

// UPDATE
export const updateWorkspace = async (id: string, updateData: any) => {
	const workspace = await prisma.workspaces.update({
		where: {
			id
		},
		data: {
			...updateData
		}
	})
	return workspace
}

// DELETE
export const deleteWorkspace = async (id: string) => {
	const workspace = await prisma.workspaces.delete({
		where: {
			id
		}
	})
	return workspace
}
