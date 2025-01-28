"use client";

import { useRecipeContext } from "@/context/recipeContext";
import { RecipeCard } from "../RecipeCard/RecipeCard";
import { EmptyRecipesContainer } from "../EmptyRecipesContainer/EmptyRecipesContainer";
import { Typography } from "@mui/material";
import theme from "@/theme/theme";
import { recipe } from "@/types/recipes";

export const RecipeList = () => {
  const { recipes, selectedIngredients, selectedCategories } =
    useRecipeContext();

  const { fullMatchRecipes, partialMatchRecipes } = recipes.reduce(
    (acc, recipe) => {
      const matchesCategories = selectedCategories.every((category) =>
        recipe.category?.includes(category)
      );

      if (!matchesCategories) {
        return acc;
      }

      const matchedIngredients = recipe.ingredients.filter((ingredient) =>
        selectedIngredients.includes(ingredient)
      );

      const missingIngredient = recipe.ingredients.filter(
        (ingredient) => !selectedIngredients.includes(ingredient)
      );

      if (missingIngredient.length === 0) {
        acc.fullMatchRecipes.push(recipe);
      } else if (matchedIngredients.length >= 2) {
        acc.partialMatchRecipes.push({
          ...recipe,
          missingIngredient,
        });
      }

      return acc;
    },
    {
      fullMatchRecipes: [] as typeof recipes,
      partialMatchRecipes: [] as recipe[],
    }
  );

  return (
    <section style={{ marginBottom: "5%" }}>
      {fullMatchRecipes.length > 0 ? (
        <>
          <Typography className="py-4" variant="h3">
            Puedes cocinar{" "}
            <span style={{ color: theme.palette.primary.main }}>
              {fullMatchRecipes.length}
            </span>{" "}
            recetas!
          </Typography>
          {fullMatchRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              id={recipe.id}
              description={recipe.description}
              name={recipe.name}
              totalRates={recipe.totalRates}
              rateAverage={recipe.rateAverage}
              ingredients={recipe.ingredients}
              image={recipe.image}
              totalSteps={recipe.totalSteps}
            />
          ))}
        </>
      ) : (
        <EmptyRecipesContainer />
      )}

      {partialMatchRecipes.length > 0 && (
        <>
          <Typography className="py-4" variant="h4">
            También puedes intentar con estas recetas (coinciden al menos 2
            ingredientes):
          </Typography>
          {partialMatchRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              id={recipe.id}
              description={recipe.description}
              name={recipe.name}
              totalRates={recipe.totalRates}
              rateAverage={recipe.rateAverage}
              ingredients={recipe.ingredients}
              image={recipe.image}
              totalSteps={recipe.totalSteps}
              missingIngredient={recipe.missingIngredient}
            />
          ))}
        </>
      )}

      {fullMatchRecipes.length === 0 &&
        partialMatchRecipes.length === 0 &&
        null}
    </section>
  );
};
