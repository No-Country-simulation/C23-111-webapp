"use client";
import React, { createContext, useCallback, useContext, useState } from "react";
import { recipe } from "@/types/recipes";

type RecipeContextType = {
  recipes: recipe[];
  ingredients: string[];
  loadRecipes: (data: recipe[]) => void;
};

type RecipeProviderProps = {
  children: React.ReactNode;
};

const RecipeContext = createContext<RecipeContextType | undefined>(undefined);

export const RecipeProvider: React.FC<RecipeProviderProps> = ({ children }) => {
  const [recipes, setRecipes] = useState<recipe[]>([]);
  const [ingredients, setIngredients] = useState<string[]>([]);

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
