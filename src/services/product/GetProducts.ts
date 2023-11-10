import connect, { prisma } from "../../database/prisma";


export async function GetProductRepository(){
          connect();
          const result = await prisma.product.findMany().finally()
          await prisma.$disconnect();
          return result;
          
}