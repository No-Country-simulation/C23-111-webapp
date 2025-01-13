import { Router } from "express";
import { addFavoriteRecipe, getUserProfile } from "./users.controller";

export const usersRoutes = Router();

usersRoutes.use("/profile", getUserProfile);
usersRoutes.use("/new-favourite", addFavoriteRecipe);