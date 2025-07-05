import { Request, Response } from "express";
import { prisma } from "@/prisma/client";
import { MulterRequest } from "@/lib/utils";

export const getAllEmployees = async (_req: Request, res: Response) => {
  try {
    const employees = await prisma.employee.findMany({
      orderBy: { id: "asc" },
      include: { country: true, type: true },
    });
    res.json(employees).status(200);
  } catch (error) {
    res.json({ error: "Internal server error" }).status(500);
  }
};

export const addNewEmployee = async (req: MulterRequest, res: Response) => {
  try {
    const { firstname, lastname, email, number, username, countryId, typeId } =
      req.body;
    const photo = req.file?.filename || "";

    await prisma.employee.create({
      data: {
        firstname,
        lastname,
        email,
        number,
        username,
        photo,
        countryId: parseInt(countryId),
        typeId: parseInt(typeId),
      },
    });

    res.status(201).json({ message: "Employee created successfully" });
  } catch (error) {
    console.error("Error creating employee:", error);
    res.status(500).json({ error: "Failed to create employee" });
  }
};

export const getOneEmployee = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const { id } = req.params;

    const employee = await prisma.employee.findFirst({
      where: { id: Number(id) },
      include: {
        country: true,
        type: true,
      },
    });

    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    return res.status(200).json(employee);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const updateEmployee = async (
  req: MulterRequest,
  res: Response
): Promise<any> => {
  try {
    const { id } = req.params;

    const employeeId = parseInt(id);

    const { firstname, lastname, email, number, username, countryId, typeId } =
      req.body;

    const photo = req.file?.filename;

    await prisma.employee.update({
      where: { id: employeeId },
      data: {
        firstname,
        lastname,
        email,
        number,
        username,
        photo,
        countryId: parseInt(countryId),
        typeId: parseInt(typeId),
      },
    });

    return res.status(200).json({ message: "Employee updated successfully" });
  } catch (error) {
    console.error("Error updating employee:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteEmployee = async (req: Request, res: Response): Promise<any> => {
  try {
    const { id } = req.params;

    const employeeId = Number(id);
    if (isNaN(employeeId)) {
      return res.status(400).json({ message: "Invalid employee ID" });
    }

    const employee = await prisma.employee.findUnique({
      where: { id: employeeId },
    });

    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    await prisma.employee.delete({
      where: { id: employeeId },
    });

    return res.status(200).json({ message: "Employee deleted successfully" });
  } catch (error) {
    console.error("Error deleting employee:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}