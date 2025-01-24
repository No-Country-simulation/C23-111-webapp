"use client";

import { useRecipeContext } from "@/context/recipeContext";
import { RecipeCard } from "../RecipeCard/RecipeCard";
import { EmptyRecipesContainer } from "../EmptyRecipesContainer/EmptyRecipesContainer";
import { Typography } from "@mui/material";
import theme from "@/theme/theme";

export const RecipeList = () => {
    const { recipes, selectedIngredients, selectedCategories } =
        useRecipeContext();

    const filteredRecipes =
        selectedIngredients.length > 0 || selectedCategories.length > 0
            ? recipes.filter((recipe) => {
                  const matchesIngredients = selectedIngredients.every(
                      (ingredient) => recipe.ingredients.includes(ingredient)
                  );

                  const matchesCategories = selectedCategories.every(
                      (category) => recipe.category?.includes(category)
                  );

                  return matchesIngredients && matchesCategories;
              })
            : [];

    return (
        <section style={{marginBottom: '5%'}}>
            {filteredRecipes.length > 0 && (
                <Typography className="py-4" variant="h3">
                    Puedes cocinar{" "}
                    <span style={{ color: theme.palette.primary.main }}>
                        {filteredRecipes.length}
                    </span>{" "}
                    recetas!
                </Typography>
            )}
            {filteredRecipes.length > 0 ? (
                filteredRecipes.map((recipe) => (
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
                ))
            ) : (
                <EmptyRecipesContainer />
            )}
        </section>
    );
};
