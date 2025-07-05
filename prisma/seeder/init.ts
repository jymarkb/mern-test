import { PrismaClient } from "@prisma/client";
import { AccountType } from "./data/accountTypeSeeder.js";
import { Country } from "./data/countrySeeder.js";
import { Employee } from "./data/employeeSeeder.js";

const prisma = new PrismaClient();

const init = async () => {
  const accountTypePromises = AccountType.map((type) =>
    prisma.accountType.upsert({
      where: { type },
      update: {},
      create: { type },
    })
  );

  const countryPromises = Country.map((country) =>
    prisma.country.upsert({
      where: { code: country.code },
      update: {},
      create: {
        code: country.code,
        name: country.name,
      },
    })
  );

  const employeePromises = Employee.map((data) =>
    prisma.employee.create({
      data: {
        ...data,
        countryId: Number(data.countryId),
        typeId: Number(data.typeId),
      },
    })
  );

  await Promise.all([
    ...accountTypePromises,
    ...countryPromises,
    ...employeePromises,
  ]);
};

init()
  .then(async () => {
    console.log("Seeding complete!");
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("Seeding error:", e);
    await prisma.$disconnect();
    process.exit(1);
  });
