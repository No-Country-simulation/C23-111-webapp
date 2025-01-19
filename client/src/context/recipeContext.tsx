"use client";
import  {Dispatch, createContext, SetStateAction, useCallback, useContext, useState } from "react";
import { recipe } from "@/types/recipes";

type RecipeContextType = {
  recipes: recipe[];
  ingredients: string[];
  loadRecipes: (data: recipe[]) => void;
  selectedIngredients: string[];
  setSelectedIngredients: Dispatch<SetStateAction<string[]>>
};

type RecipeProviderProps = {
  children: React.ReactNode;
};

const RecipeContext = createContext<RecipeContextType | undefined>(undefined);

export const RecipeProvider: React.FC<RecipeProviderProps> = ({ children }) => {
  const [recipes, setRecipes] = useState<recipe[]>([]);
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([])

  const loadRecipes = useCallback((data: recipe[]) => {
    setRecipes(data);
    const uniqueIngredients = Array.from(
      new Set(data.flatMap((recipe) => recipe.ingredients))
    );

    setIngredients(uniqueIngredients);
  }, []);

  return (
    <RecipeContext.Provider
      value={{
        recipes,
        ingredients,
        loadRecipes,
        selectedIngredients,
        setSelectedIngredients,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipeContext = (): RecipeContextType => {
  const context = useContext(RecipeContext);
  if (!context) {
    throw new Error("useRecipeContext debe usarse dentro de RecipeProvider");
  }
  return context;
};
