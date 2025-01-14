import { Request, Response } from "express";
import recipeService from "./recipes.service";

const createRecipe = async (req: Request, res: Response): Promise<void> => {
  try {
    const { body } = req;

    if (!req.file) {
      res.status(400).json({ message: "No se ha subido ninguna imagen." });
      return;
    }

    const fileBuffer = req.file.buffer;
  
    const recipe = await recipeService.createRecipe(body, fileBuffer);

    res.status(201).json({
      message: "Receta creada exitosamente",
      recipe,
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Error desconocido";
    res.status(500).json({
      message: errorMessage,
    });
  }
};

const getAll = async (req: Request, res: Response): Promise<void> => {
  try {
    const recipes = await recipeService.getAll();

    res.status(201).json({
      message: "Recetas obtenidas exitosamente",
      recipes,
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Error desconocido";
    res.status(500).json({
      message: errorMessage,
    });
  }
}

const getById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params

    if (!id) {
      res.status(400).json({ message: "El ID es requerido." });
      return
    }

    const recipe = await recipeService.getById(id);

    res.status(201).json({
      message: "Receta obtenida exitosamente",
      recipe,
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Error desconocido";
    res.status(500).json({
      message: errorMessage,
    });
  }
}

const deleteById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params

    if (!id) {
      res.status(400).json({ message: "El ID es requerido." });
      return
    }

    const result = await recipeService.deleteById(id);

    res.status(201).json({
      message: "Receta eliminada exitosamente",
      result,
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Error desconocido";
    res.status(500).json({
      message: errorMessage,
    });
  }
}


const recipesController = {
  createRecipe,
  getAll,
  getById,
  deleteById
};

export default recipesController;
