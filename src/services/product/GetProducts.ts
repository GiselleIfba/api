import { Response } from "express";
import connect, { prisma } from "../../database/prisma";


export async function GetProductRepository(){
         
    try {
        connect();
        const result = await prisma.product.findMany()
        return result
        
    } catch (error) {
        console.log(error);
    } finally{
        await prisma.$disconnect();  
    }
    
          
}