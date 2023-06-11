import { Experience } from 'interface';
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
			const { limit, page = 1 } = req.query;

			if (typeof limit === 'undefined') {
				return res.status(400).json({ message: 'Limit is required' });
			}

			const [count, result] = await prisma.$transaction([
				prisma.experience.count(),
				prisma.experience.findMany({
					skip: (parseInt(page as string) - 1) * parseInt(limit as string),
					take: parseInt(limit as string),
					orderBy: [{ is_current: 'desc' }, { start_date: 'desc' }, { end_date: 'desc' }],
				}),
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
