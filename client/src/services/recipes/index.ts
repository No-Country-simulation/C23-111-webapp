// import { recipesResponseData } from "@/types/recipes";
import { publicInstance } from "../axios";


export const getAllRecipes = async () =>  {
    try {
        const response = await publicInstance.get('/recipes');
        return response;
    } catch (error) {
        throw error
    }
}