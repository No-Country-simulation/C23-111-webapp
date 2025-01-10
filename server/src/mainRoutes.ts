import { Router } from "express";
import { authRoutes } from "./modules/auth/auth.routes";

export const serverRoutes = Router();

serverRoutes.use("/auth", authRoutes);
