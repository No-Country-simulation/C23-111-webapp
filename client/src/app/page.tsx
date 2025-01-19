"use client";
import { EmptyRecipesContainer, RecipeCard, SearchBar } from "@/components";
import { styled, Typography } from "@mui/material";
import { getAllRecipes } from "@/services/recipes";
import { useEffect, useState } from "react";
import { useRecipeContext } from "@/context/recipeContext";
import { recipe } from "@/types/recipes";

const PageContainer = styled("main")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  minHeight: "100vh",
  padding: "5px",
});

export default function Home() {
  const { loadRecipes } = useRecipeContext();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await getAllRecipes();
        const data = await response.data.result;
        setRecipes(data);
        loadRecipes(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchRecipes();
  }, [loadRecipes]);

  return (
    <PageContainer>
      <Typography
        variant="h1"
        sx={{
          textAlign: "center",
          margin: "5% 15% 2% 15%",
        }}
      >
        ¡Empieza a crear tu <br /> combinacion perfecta!
      </Typography>
      <Typography variant="h3" sx={{ textAlign: "center" }}>
        Usa las etiquetas o el buscador para encontrar lo que necesitas.
      </Typography>

      <SearchBar sx={{ width: "65%", margin: "20px" }} />
      {recipes && recipes.length > 0 ? (
        recipes.map((recipe: recipe) => (
          <RecipeCard
            key={recipe.id}
            name={recipe.name}
            description={recipe.description}
            totalRates={recipe.totalRates}
            rateAverage={recipe.rateAverage}
            ingredients={recipe.ingredients}
            totalSteps={recipe.totalSteps}
            image={recipe.image}
          />
        ))
      ) : (
        <EmptyRecipesContainer />
      )}
    </PageContainer>
  );
}
