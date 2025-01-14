import express from "express";
import ratesController from "./rates.controller"
import { validateSchema } from "../../middleware/validateSchema";
import { rateSchema } from "./rates.schema";
const { createRate } = ratesController;

const ratesRoutes = express.Router();

ratesRoutes.post("/", validateSchema(rateSchema), createRate);


export default ratesRoutes;

