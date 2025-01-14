import { Request, Response } from "express";
import { uploadToCloudinary } from "../../config/cloudinary.config";
import recipeService from "./recipes.service";

const createRecipe = async (req: Request, res: Response): Promise<void> => {
  try {
    
    console.log('>> createRecipe')
    
    const { body } = req;

    if (!req.file) {
      res.status(400).json({ message: "No se ha subido ninguna imagen." });
      return;
    }

    const fileBuffer = req.file.buffer;
    const folder = 'recipes';

    const result = await uploadToCloudinary(fileBuffer, folder);

    const recipe = await recipeService.createRecipe(body, result.secure_url);

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

const recipesController = {
  createRecipe,
};

export default recipesController;
