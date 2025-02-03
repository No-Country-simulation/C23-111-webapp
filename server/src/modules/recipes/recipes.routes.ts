import express from "express";
import recipesController from "./recipes.controller";
import { uploader } from '../../config/multer.config';
import { validateSchema } from "../../middleware/validateSchema";
import { recipeSchema } from "./recipes.schema";
import { authentication } from "../../middleware/authToken";

const recipesRoutes = express.Router();

recipesRoutes.get("/", recipesController.getAll);
recipesRoutes.get("/:id", recipesController.getById);
recipesRoutes.post("/", authentication, uploader('file'), validateSchema(recipeSchema), recipesController.createRecipe);
recipesRoutes.delete("/:id", authentication, recipesController.deleteById);

export default recipesRoutes;
