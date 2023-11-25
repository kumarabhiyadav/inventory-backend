import express, { Router } from "express";
import { createCategory,createProduct,createSubproduct } from "./inventory.controller";
export const InventoryRoutes: Router = express.Router();

InventoryRoutes.post("/createCategory", createCategory);
InventoryRoutes.post("/createProduct", createProduct);
InventoryRoutes.post("/createSubproduct", createSubproduct);
InventoryRoutes.get("/fetchCategories", createSubproduct);
InventoryRoutes.get("/createSubproduct", createSubproduct);







