import { Request } from "express";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type MulterRequest = Request & {
  file?: Express.Multer.File;
};

export type EmployeeType = {
  id: number;
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  number: string;
  photo: string;
  countryId: number;
  typeId: number;
  country: {
    id: number;
    code: string;
    name: string;
  };
  type: {
    id: number;
    type: string;
  };
};

export type TableEmployee = {
  photo: string;
  name: string;
  username: string;
  country: string;
  email: string;
  id: number;
  type:string
};

export type EmployeeORMType = {
  id: number;
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  number: string;
  countryId: number;
  typeId: number;
};

export type CountryType = {
  id: number;
  code: string;
  name: string;
};

export type AccountType = {
  id: number;
  type: string;
};

export type DeleteDialogType = {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  handleClick: () => void;
  data: TableEmployee;
};
