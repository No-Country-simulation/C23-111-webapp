"use client";
import { RecipeList, SideBar, Header } from "@/components";
import { styled, Typography, Box } from "@mui/material";
import { getAllRecipes } from "@/services/recipes";
import { useEffect } from "react";
import { useRecipeContext } from "@/context/recipeContext";
import Grid from "@mui/material/Grid2";

const PageContainer = styled(Grid)({
    // display: "flex",
    // justifyContent: "center",
    // width: "100%",
    // height: "80vh",
});

export default function Home() {
    const { loadRecipes, setIngredients, setCategories, setRecipes } =
        useRecipeContext();

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const cachedIngredients = localStorage.getItem("ingredients");
                const cachedCategory = localStorage.getItem("category");
                const cachedRecipes = localStorage.getItem("recipes");

                if (cachedIngredients && cachedCategory && cachedRecipes) {
                    setIngredients(JSON.parse(cachedIngredients));
                    setCategories(JSON.parse(cachedCategory));
                    setRecipes(JSON.parse(cachedRecipes));
                    return;
                }
                const response = await getAllRecipes();
                const data = await response.data.result;
                loadRecipes(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchRecipes();
    }, [loadRecipes, setIngredients, setCategories, setRecipes]);

    return (
        <>
            <PageContainer
                container
                spacing={2}
                className="grid grid-cols-[20rem_1fr]  w-screen h-screen"
            >
                {/* <Grid component="aside" size={{ md: 4, lg: 3 }}> */}
                <SideBar />
                {/* </Grid> */}

                <Grid
                    component="main"
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        maxWidth: "100%",
                        width: "100%",
                    }}
                >
                    <Header />
                    <Box className="flex flex-col items-center justify-center max-h-full mt-5 w-full px-5">
                        <Typography
                            variant="h1"
                            sx={{
                                textAlign: "center",
                            }}
                        >
                            ¡Empieza a crear tu combinación perfecta!
                        </Typography>

                        <Typography variant="h4" sx={{ textAlign: "center" }}>
                            Usa las etiquetas o el buscador para encontrar lo
                            que necesitas.
                        </Typography>

                        <Box
                            component="section"
                            className="flex flex-col items-center justify-center w-full"
                        >
                            <RecipeList />
                        </Box>
                    </Box>
                </Grid>
            </PageContainer>
        </>
    );
}
