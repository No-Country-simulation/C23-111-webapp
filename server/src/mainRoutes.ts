import { Router } from "express";
import { authRoutes } from "./modules/auth/auth.routes";
import recipesRoutes from "./modules/recipes/recipes.routes";

export const serverRoutes = Router();

serverRoutes.use("/auth", authRoutes);
serverRoutes.use("/recipes", recipesRoutes);
