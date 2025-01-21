"use client";
import {
  Dispatch,
  createContext,
  SetStateAction,
  useCallback,
  useContext,
  useState,
} from "react";
import { recipe } from "@/types/recipes";

type RecipeContextType = {
  recipes: recipe[];
  ingredients: string[];
  categories: string[];
  loadRecipes: (data: recipe[]) => void;
  selectedIngredients: string[];
  selectedCategories: string[];
  setSelectedCategories: Dispatch<SetStateAction<string[]>>;
  setSelectedIngredients: Dispatch<SetStateAction<string[]>>;
  showAll: string | null;
  setShowAll: Dispatch<SetStateAction<string | null>>;
  filterName: string[];
};

type RecipeProviderProps = {
  children: React.ReactNode;
};

const RecipeContext = createContext<RecipeContextType | undefined>(undefined);

export const RecipeProvider: React.FC<RecipeProviderProps> = ({ children }) => {
  const [recipes, setRecipes] = useState<recipe[]>([]);
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [showAll, setShowAll] = useState<string | null>(null);
  const filterName = ["ingredients", "categories"];

  const loadRecipes = useCallback((data: recipe[]) => {
    setRecipes(data);
    const uniqueIngredients = Array.from(
      new Set(data.flatMap((recipe) => recipe.ingredients))
    );
    const uniqueCategories = Array.from(
      new Set(data.flatMap((recipe) => recipe.category))
    );
    //@ts-expect-error no error
    setCategories(uniqueCategories);
    setIngredients(uniqueIngredients);
  }, []);


  return (
    <RecipeContext.Provider
      value={{
        recipes,
        ingredients,
        categories,
        loadRecipes,
        selectedIngredients,
        selectedCategories,
        setSelectedCategories,
        setSelectedIngredients,
        showAll,
        setShowAll,
        filterName,
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
