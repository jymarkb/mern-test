import { Request, Response } from 'express';
import { prisma } from '@/prisma/client';

export const getCountries = async (_req: Request, res: Response) => {
    try {
        const countries = await prisma.country.findMany({
            orderBy: {
              name: 'asc',
            },
          });
        res.json(countries).status(200);
    } catch (error) {
        res.json({ error: 'Internal server error' }).status(500);
      }
}