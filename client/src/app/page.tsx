"use client";
import { SearchBar, RecipeList } from "@/components";
import { styled, Typography } from "@mui/material";
import { getAllRecipes } from "@/services/recipes";
import { useEffect } from "react";
import { useRecipeContext } from "@/context/recipeContext";

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

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await getAllRecipes();
        const data = await response.data.result;
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
      <RecipeList />
    </PageContainer>
  );
}
