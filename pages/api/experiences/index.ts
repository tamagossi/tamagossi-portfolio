import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

const experiences = async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		if (req.method === 'POST') {
			const result = await prisma.experience.create({ data: req.body });
			return res.status(200).json(result);
		}

		if (req.method === 'GET') {
			const [count, result] = await prisma.$transaction([
				prisma.experience.count(),
				prisma.experience.findMany(),
			]);

			if (count === 0) {
				res.status(204).json({ data: {} });
			}

			res.status(200).json({
				data: result,
				meta: {
					total_data: count,
				},
			});
		}
	} catch (err: any) {
		res.status(500).json({ error: err.message });
	}
};

export default experiences;
