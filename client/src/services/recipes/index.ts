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

export const getRecipeById = async (id: string) => {
    try {
        const response = await publicInstance.get(`/recipes/${id}`)
        return response;
    } catch (error) {
        throw error;
    }
}
export const getRatesById = async (id: string) => {
    try {
        const response = await publicInstance.get(`/rates/${id}`)
        return response;
    } catch (error) {
        throw error;
    }
}