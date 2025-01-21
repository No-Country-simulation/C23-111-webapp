import { Request, Response } from "express";
import RateModel from "./rates.model";
import RecipeModel from "../recipes/recipes.model";


const createRate = async (req: Request, res: Response): Promise<void> => {
  try {
    
    console.log('>> createRate ')

    
    const newRate = new RateModel(req.body);

    console.log('>> newRate ', newRate)
    
    // Busco la receta a la que se le quiere agregar la reseña
    const recipe = await RecipeModel.findById(newRate.recipe);

    console.log('>> recipe ', recipe)

    if (!recipe) {
      res.status(404).json({ message: "Receta no encontrada" });
      return;
    }
    
    // Busco todas las reseñas de la receta
    const ratings = await RateModel.find({ recipe: newRate.recipe })
    
    // Agrego la nueva reseña a la lista
    const totalRates = recipe.totalRates + 1;
    
    const totalRatins = ratings.reduce((acc, rate) => acc + rate.rating, 0)

    console.log('>> totalRates', totalRates);

    const rateAverage = (totalRatins + newRate.rating) / totalRates ;



    console.log('>> ratings', ratings);
    console.log('>> rateAverage', rateAverage);

    const updatedRecipe = await RecipeModel.findByIdAndUpdate(newRate.recipe, { totalRates, rateAverage }, { new: true })

    console.log('>> updatedRecipe', updatedRecipe);

    if (!updatedRecipe) {
      res.status(404).json({ message: "Error al actualizar la receta" });
      return;
    }
        

    const createdRate = await newRate.save();
    res.status(201).json(createdRate);
  } catch (error) {    
    // Compureba si el error devuelve es una instancia de Error
    if (error instanceof Error) {
        res.status(400).json({ message: error.message });
    } else {
        res.status(500).json({ message: "Internal Server Error" });
    }
    
  }
}

const deleteRate = async (req: Request, res: Response): Promise<void> => {  
  try {
    
    const deletedRate = await RateModel.findByIdAndDelete(req.params.id);

    if (!deletedRate) {
      res.status(404).json({ message: "Reseña no encontrada" });      
    }

    res.status(200).json(deletedRate);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}

const getRatesByRecipe = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params

    const recipeId = id;

    if (!id) {
      res.status(400).json({ message: "El ID es requerido." });
      return
    }

    const result = await RateModel.find({ recipe: recipeId }).populate('reviewer');    

    if (!result) {
      res.status(404).json({ message: `No hay reseñas para la receta con id ${id}.` });
      return
    }

    res.status(200).json({
      message: "Receta obtenida exitosamente",
      result,
    });
  } catch (error) {
    
    res.status(500).json(error);
    return
  }
}

const deleteRatesByRecipeID = async (req: Request, res: Response): Promise<void> => {
  
  const { id } = req.params;

  if (!id) {
    res.status(400).json({ message: "El ID es requerido." });
    return
  }

  try {    
    const deletedRates = await RateModel.deleteMany({ recipe: id });
    
    if (!deletedRates) {
      res.status(404).json({ message: `Reseñas no encontradas para la receta con id = ${id}` });
      return
    }

    res.status(200).json({
      message: "Reseñas eliminadas exitosamente",
      deletedRates,
    });


  } catch (error) { 
    res.status(500).json(error);
  }

}


export default {createRate, deleteRate, getRatesByRecipe, deleteRatesByRecipeID};