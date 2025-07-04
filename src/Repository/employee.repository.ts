import { Request, Response } from 'express';
import { prisma } from '@/prisma/client';

export const getAllEmployees = async (_req: Request, res: Response) => {
  try {
    const employees = await prisma.employee.findMany({
      include: { country: true, type: true }
    });
    res.json(employees);
  } catch (error) {
    res.json({ error: 'Internal server error' }).status(500);
  }
}

export const addNewEmployee = () => {

}

// export default {getAllEmployees, addNewEmployee}