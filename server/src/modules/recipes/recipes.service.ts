import RecipeModel from "./recipes.model";


const createRecipe = async (data: any, imageUrl: string) => {
  try {
    const newRecipe = new RecipeModel({
      ...data,
      image: imageUrl,
    });

    await newRecipe.save(); 
    return newRecipe;
  } catch (error) {
    throw new Error(`Error al registrar la receta.`);
  }
};

const recipeService = {
  createRecipe
};

export default recipeService;
