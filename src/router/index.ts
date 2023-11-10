import { Router } from "express";
import { GetProductController } from "../controllers/product/getProducts";

export const router = Router();

// ROTAS PARA PRODUTO

// rota para pegar produtos por especificos -- rota de search
router.get("/search/value?");
// rota para pegar todos os produtos 
router.get("/produtos", GetProductController);
// rota para pegar produto por id 
router.get("/produtos/:id");



// ROTAS PARA USER
router.post("/getuser");
// rote para logar usuario
router.post("/login")



// ROTAS PARA STORE
// rota para criar store
router.post("/store")


// ROTAS PARA COMMENT
// rota para criar store
router.post("/comment")