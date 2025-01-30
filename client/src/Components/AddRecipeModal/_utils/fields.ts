import { Field } from "@/types/form";
import { useRecipeContext } from "@/context/recipeContext";

export const useRecipeFields = (): Field[] => {
    const { ingredients, categories } = useRecipeContext();

    return [
        {
            name: "name",
            type: "text",
            label: "Nombre *",
            placeholder: "Nombre de la receta",
            columns: 12,
        },
        {
            name: "description",
            type: "text",
            label: "Descripción *",
            multiline: true,
            placeholder: "Una breve descripción",
            columns: 12,
        },
        {
            name: "category",
            type: "select",
            label: "Categoria",
            columns: 6,
            options: categories.map((category) => ({
                value: category,
                label: category.toUpperCase(),
            })),
        },
        {
            name: "ingredients",
            type: "select",
            label: "Ingredientes",
            isMultipleSelect: true,
            columns: 6,
            options: ingredients.map((ingredient) => ({
                value: ingredient,
                label: ingredient.toUpperCase(),
            })),
        },
        {
            name: 'steps',
            type: 'steps',
            label: 'Pasos *',
            columns: 12,
        }
    ];
};
