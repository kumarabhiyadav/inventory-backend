import express from "express";
import { AuthRoutes } from "./auth/auth.routes";
import { FinanceRoutes } from "./financeModule/finance.routes";
import { SupplierRoutes } from "./supplierModule/supplier.routes";


const app = express();


app.use("/auth", AuthRoutes);
app.use("/finance", FinanceRoutes);
app.use("/supplier", SupplierRoutes);









module.exports = app;
