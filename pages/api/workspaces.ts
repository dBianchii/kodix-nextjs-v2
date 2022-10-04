import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { createWorkspace, getAllWorkspaces, getWorkspace } from "../../prisma/workspaces";



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	try {
		const session = await getSession({ req });
		switch (req.method) {
			case 'POST':
				const { name } = req.body
				const workspace = await createWorkspace(name)
				
				return res.json(workspace)
			case 'GET': {
				if (req.query.id) {
					// Get a single workspace if id is provided is the query
					// api/workspaces?id=1
					const workspace = await getWorkspace(req.query.id[0])
					return res.status(200).json(workspace)
				} else {
					// Otherwise, fetch all workspaces
					const workspaces = await getAllWorkspaces()
					return res.json(workspaces)
				}
			}				
		}
	} catch (error) {
		return res.status(500).json({ error })
	}
}


