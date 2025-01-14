import { Router } from "express";
import { authLogin, authRegister } from "./auth.controller";
import { authSchema } from "./auth.schema";
import { validateSchema } from "../../middleware/validateSchema";

export const authRoutes = Router();

authRoutes.use("/register", validateSchema(authSchema), authRegister);
authRoutes.use("/login", validateSchema(authSchema), authLogin);
