import RecipeModel from "./recipes.model";
import { uploadToCloudinary, deleteToCloudinary } from "../../config/cloudinary.config";
import { IRecipeSchema } from "./recipes.model";


const createRecipe = async (data: Partial<IRecipeSchema>, fileBuffer: Buffer) => {
  try {

    const folder = 'recipes';

    const img = await uploadToCloudinary(fileBuffer, folder);

    if(!img) {
      throw new Error(`Error al guardar la imagen en cloudinary.`);
    }

    const newRecipe = new RecipeModel({
      ...data,
      image: img.secure_url,
    });

    await newRecipe.save(); 

    return newRecipe;
  } catch (error) {
    throw new Error(`Error al registrar la receta.`);
  }
};

const getAll = async () => {
  try {
    const recipes = await RecipeModel.find(); 

    return recipes;
  } catch (error) {
    throw new Error(`Error al obtener las recetas.`);
  }
};

const getById = async (id: string) => {
  try {
    const recipe = await RecipeModel.findById(id); 

    return recipe;
  } catch (error) {
    throw new Error(`Error al obtener la receta.`);
  }
};

const deleteById = async (id: string) => {
  try {
    const recipeDeleted = await RecipeModel.findByIdAndDelete(id); 

    if (!recipeDeleted) {
      throw new Error(`Error al eliminar la receta de MongoDB.`);
    }

    const imgDeleted = await deleteToCloudinary(recipeDeleted.image);

    if (!imgDeleted){
      throw new Error(`Error al eliminar la imagen de Cloudinary.`);
    }

    return recipeDeleted;
  } catch (error) {
    throw new Error(`Error al obtener la receta.`);
  }
};



const recipeService = {
  createRecipe,
  getAll,
  getById,
  deleteById
};

export default recipeService;
