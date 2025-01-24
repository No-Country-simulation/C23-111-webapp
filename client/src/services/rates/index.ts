// import { recipesResponseData } from "@/types/recipes";
import { publicInstance } from "../axios";


export const getAllRecipes = async () =>  {
    try {
        const response = await publicInstance.get('/rates');
        return response;
    } catch (error) {
        throw error
    }
}

export const getRecipeById = async (id: string) => {
    try {
        const response = await publicInstance.get(`/rates/${id}`)
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

type RateData = {
    rating: number;
    comment: string;
    reviewer: string;
    recipe: string;
}

export const addRateById = async (id: string,data: RateData) => {
    try {
        const response = await publicInstance.post(`/rates/`,{...data,recipe:id})
        return response;
    } catch (error) {
        throw error;
    }
}