import express from "express";
import ratesController from "./rates.controller"
import { validateSchema } from "../../middleware/validateSchema";
import { rateSchema } from "./rates.schema";
const { createRate, deleteRate, getRatesByRecipe, deleteRatesByRecipeID} = ratesController;

const ratesRoutes = express.Router();

ratesRoutes.post("/", validateSchema(rateSchema), createRate);
ratesRoutes.delete("/:id", deleteRate);
ratesRoutes.get("/:id", getRatesByRecipe);
ratesRoutes.delete("/recipe/:id", deleteRatesByRecipeID);

export default ratesRoutes;

