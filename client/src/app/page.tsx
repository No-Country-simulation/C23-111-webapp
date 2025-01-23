"use client";
import { RecipeList, SideBar } from "@/Components";
import { styled, Typography, Box } from "@mui/material";
import { getAllRecipes } from "@/services/recipes";
import { useEffect } from "react";
import { useRecipeContext } from "@/context/recipeContext";

const PageContainer = styled("main")({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
    minHeight: "100vh",
    padding: "5px",
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
        <PageContainer>
            <SideBar />
            <Box className="flex flex-col items-center justify-start min-h-screen">
                <Typography
                    variant="h1"
                    sx={{
                        textAlign: "center",
                        margin: "5% 15% 2% 15%",
                    }}
                >
                    ¡Empieza a crear tu combinación perfecta!
                </Typography>

                <Typography variant="h4" sx={{ textAlign: "center" }}>
                    Usa las etiquetas o el buscador para encontrar lo que
                    necesitas.
                </Typography>

                <Box className="flex flex-col items-center justify-center gap-3 pt-4">
                    <Typography variant="caption" sx={{}}>
                        Tus ingredientes seleccionados:{" "}
                        {selectedIngredients.join(", ")}{" "}
                    </Typography>
                    <Typography variant="caption">
                        Tus categorías seleccionadas:{" "}
                        {selectedCategories.join(", ")}{" "}
                    </Typography>
                </Box>

                <RecipeList />
            </Box>
        </PageContainer>
    );
}
