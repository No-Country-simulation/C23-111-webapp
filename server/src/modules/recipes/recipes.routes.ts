import express from "express";
import recipesController from "./recipes.controller";
import multer from 'multer';

const recipesRoutes = express.Router();
const upload = multer();

recipesRoutes.post("/", upload.single('file'), recipesController.createRecipe);

export default recipesRoutes;
