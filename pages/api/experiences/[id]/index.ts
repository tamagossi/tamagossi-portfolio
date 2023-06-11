import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

const experiences = async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		if (req.method === 'DELETE') {
			const result = await prisma.experience.delete({
				where: {
					id: req.query.id as string,
				},
			});

			return res.status(200).json(result);
		}

		if (req.method === 'GET') {
			const result = await prisma.experience.findFirstOrThrow({
				where: {
					id: req.query.id as string,
				},
			});

			if (typeof result === 'undefined') {
				return res.status(204).json(null);
			}

			return res.status(200).json(result);
		}

		if (req.method === 'PUT') {
			const result = await prisma.experience.update({
				data: req.body,
				where: {
					id: req.query.id as string,
				},
			});

			return res.status(200).json(result);
		}
	} catch (err: any) {
		res.status(500).json({ error: err.message });
	}
};

export default experiences;
