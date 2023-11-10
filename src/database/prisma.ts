import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export default async function connect() {
    try {
      await prisma.$connect();
      console.log('Database connected sucess')
    } catch (error) {
      console.log("Database connected unsucessull");
    }
  }