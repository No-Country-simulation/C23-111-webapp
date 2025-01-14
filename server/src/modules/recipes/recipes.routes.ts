import express from "express";
import recipesController from "./recipes.controller";
import { uploader } from '../../config/multer.config';
import { validateSchema } from "../../middleware/validateSchema";
import { recipeSchema } from "./recipes.schema";

const recipesRoutes = express.Router();

recipesRoutes.post("/", uploader('file'), validateSchema(recipeSchema), recipesController.createRecipe);

export default recipesRoutes;
