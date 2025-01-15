import express from "express";
import recipesController from "./recipes.controller";
import { uploader } from '../../config/multer.config';
import { validateSchema } from "../../middleware/validateSchema";
import { recipeSchema } from "./recipes.schema";

const recipesRoutes = express.Router();

recipesRoutes.get("/", recipesController.getAll);
recipesRoutes.get("/:id", recipesController.getById);
recipesRoutes.post("/", uploader('file'), validateSchema(recipeSchema), recipesController.createRecipe);
recipesRoutes.delete("/:id", recipesController.deleteById);

export default recipesRoutes;
