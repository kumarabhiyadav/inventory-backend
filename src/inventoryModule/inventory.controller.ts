import { Request, Response } from "express";
import { tryCatchFn } from "../utils/Helpers/tryCatchFn";
import { CategoryModel } from "./models/category.model";
import {  ProductModel } from "./models/product.model";
import { SubProductModel } from "./models/subproduct.model";

export const createCategory = tryCatchFn(
  async (req: Request, res: Response) => {
    let { name } = req.body;
    let category = await CategoryModel.create({ name });
    if (category) {
      res.status(200).json({
        success: true,
        result: category,
      });
    }
  }
);

export const fetchCategory = tryCatchFn(
  async (req: Request, res: Response) => {}
);


// Products End Points

export const createProduct = tryCatchFn(
  async (req: Request, res: Response) => {
    let { name,category} = req.body;
    let product = await ProductModel.create({ name,category });
    if (product) {
      res.status(200).json({
        success: true,
        result: product,
      });
    }
  }
);

export const fetchProduct = tryCatchFn(
  async (req: Request, res: Response) => {}
);


// Sub Product EndPoints

export const createSubproduct = tryCatchFn(
  async (req: Request, res: Response) => {
    let { name,category,product} = req.body;
    let subproduct = await SubProductModel.create({ name,category,product});
    if (subproduct) {
      res.status(200).json({
        success: true,
        result: subproduct,
      });
    }
  }
);

export const fetchCategories = tryCatchFn(
  async (req: Request, res: Response) => {
    let categories = await CategoryModel.find();
    if (categories) {
      res.status(200).json({
        success: true,
        result: categories,
      });
    }
  }
);
