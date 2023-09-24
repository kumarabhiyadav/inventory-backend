"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_routes_1 = require("./auth/auth.routes");
const finance_routes_1 = require("./financeModule/finance.routes");
const app = (0, express_1.default)();
app.use("/auth", auth_routes_1.AuthRoutes);
app.use("/finance", finance_routes_1.FinanceRoutes);
module.exports = app;
