import { Request, Response } from "express";

export const getUserProfile = (req: Request, res: Response) => {
  res.send("obtener informacion del usuario");
};

export const addFavoriteRecipe = (req: Request, res: Response) => {
  res.send("Agregar receta favorita")
}