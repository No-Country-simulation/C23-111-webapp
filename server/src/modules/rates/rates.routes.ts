import express from "express";
import ratesController from "./rates.controller"

const { createRate } = ratesController;

const ratesRoutes = express.Router();


ratesRoutes.post("/new-rate", createRate);

export default ratesRoutes;
