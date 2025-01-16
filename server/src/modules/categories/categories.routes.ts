import express from "express";
import categoriesController from "./categories.controller"
import { validateSchema } from "../../middleware/validateSchema";
import { categorySchema } from "./categories.schema";
const { createCategory, getAllCategories } = categoriesController;

const categoriesRoutes = express.Router();

categoriesRoutes.post("/", validateSchema(categorySchema), createCategory);
categoriesRoutes.get("/",  getAllCategories);
// ratesRoutes.delete("/:id", deleteRate);

export default categoriesRoutes;