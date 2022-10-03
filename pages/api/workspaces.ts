import { NextApiRequest, NextApiResponse } from "next";
import { createWorkspace } from "../../prisma/workspaces";



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	try {
		switch (req.method) {
			case 'POST':
				const { name } = req.body
				const workspace = await createWorkspace(name)
				return res.json(workspace)


		}
	} catch (error) {
		return res.status(500).json({ error })
	}
}


