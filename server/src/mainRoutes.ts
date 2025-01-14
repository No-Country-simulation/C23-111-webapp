import { Router } from "express";
import { authRoutes } from "./modules/auth/auth.routes";
import recipesRoutes from "./modules/recipes/recipes.routes";
import ratesRoutes from "./modules/rates/rates.routes";

export const serverRoutes = Router();

serverRoutes.use("/auth", authRoutes);
serverRoutes.use("/recipes", recipesRoutes);
serverRoutes.use("/user", recipesRoutes);
serverRoutes.use("/rates", ratesRoutes);

