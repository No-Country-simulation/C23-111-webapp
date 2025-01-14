import express from "express";
import ratesController from "./rates.controller"
import { validateSchema } from "../../middleware/validateSchema";
import { rateSchema } from "./rates.schema";
const { createRate, deleteRate } = ratesController;

const ratesRoutes = express.Router();

ratesRoutes.post("/", validateSchema(rateSchema), createRate);
ratesRoutes.delete("/:id", deleteRate);

export default ratesRoutes;

