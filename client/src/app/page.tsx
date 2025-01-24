"use client";
import { RecipeList, SideBar, Header } from "@/Components";
import { styled, Typography, Box } from "@mui/material";
import { getAllRecipes } from "@/services/recipes";
import { useEffect } from "react";
import { useRecipeContext } from "@/context/recipeContext";
import Grid from "@mui/material/Grid2";

const PageContainer = styled(Grid)({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  height: "80vh",
});

export default function Home() {
  const { loadRecipes, selectedIngredients, selectedCategories } =
    useRecipeContext();

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
    <>
      <PageContainer container spacing={2}>
        <Grid component="aside" size={{md:4, lg: 3}}>
          <SideBar />
        </Grid>

        <Grid
          component="main"
          sx={{ display: "flex", flexDirection: "column", maxWidth:'100%' }}
          size={{md:8, lg: 9}}
        >
          <Header />
          <Box className="flex flex-col items-center justify-center max-h-full mt-40">
            <Typography
              variant="h1"
              sx={{
                textAlign: "center",
              }}
            >
              ¡Empieza a crear tu combinación perfecta!
            </Typography>

            <Typography variant="h4" sx={{ textAlign: "center" }}>
              Usa las etiquetas o el buscador para encontrar lo que necesitas.
            </Typography>

            <Box className="flex flex-col items-center min-w-screen justify-center gap-3 pt-4">
              <Typography variant="caption" sx={{}}>
                Tus ingredientes seleccionados: {selectedIngredients.join(", ")}{" "}
              </Typography>
              <Typography variant="caption">
                Tus categorías seleccionadas: {selectedCategories.join(", ")}{" "}
              </Typography>
            </Box>

            <Box
              component="section"
              className="flex flex-col items-center justify-center"
            >
              <RecipeList />
            </Box>
          </Box>
        </Grid>
      </PageContainer>
    </>
  );
}
