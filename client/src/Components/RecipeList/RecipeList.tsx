"use client";

import { useRecipeContext } from "@/context/recipeContext";
import { RecipeCard } from "../RecipeCard/RecipeCard";
import { EmptyRecipesContainer } from "../EmptyRecipesContainer/EmptyRecipesContainer";

export const RecipeList = () => {
  const { recipes, selectedIngredients, } = useRecipeContext();

  const filteredRecipes =
    selectedIngredients.length > 0
      ? recipes.filter((recipe) =>
          selectedIngredients.every(
            (ingredient) =>
              recipe.ingredients.includes(ingredient)
          )
        )
      : [];
  return (
    <>
      {filteredRecipes.length > 0 ? (
        filteredRecipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            description={recipe.description}
            name={recipe.name}
            totalRates={recipe.totalRates}
            rateAverage={recipe.rateAverage}
            ingredients={recipe.ingredients}
            image={recipe.image}
            totalSteps={recipe.totalSteps}
          />
        ))
      ) : (
        <EmptyRecipesContainer />
      )}
    </>
  );
};
