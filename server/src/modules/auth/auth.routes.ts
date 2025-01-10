import { Router } from "express";
import { authLogin } from "./auth.controller";

export const authRoutes = Router();

authRoutes.use("/login", authLogin);
