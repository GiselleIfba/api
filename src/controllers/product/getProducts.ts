import { Request, Response } from "express";
import { GetProductRepository } from "../../services/product/GetProducts";


export function getProductController(req: Request, res: Response){

     const product = GetProductRepository()
     return res.json({product})  
    
}