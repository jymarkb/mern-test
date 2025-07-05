import { Request, Response } from 'express';
import { prisma } from '@/prisma/client';

export const getAllAccountType = async (_req: Request, res: Response) => {
    try {
        const countries = await prisma.accountType.findMany({
            orderBy: {
              id: 'asc',
            },
          });
        res.json(countries).status(200);
    } catch (error) {
        res.json({ error: 'Internal server error' }).status(500);
      }
}