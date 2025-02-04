"use client";
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Typography,
    Rating,
    styled,
    Drawer,
} from "@mui/material";
import { recipe, recipeWithRates } from "@/types/recipes";
type RecipeCardProps = recipe;
import { useState } from "react";
import { SidebarRecipeContent } from "./SidebarRecipeContent";
import { getRatesById, getRecipeById } from "@/services/recipes";

const StyledCardContent = styled(CardContent)({
    display: "flex",
    gap: "15px",
    padding: "5px 12px",
});

const StyledCard = styled(Card)({
    display: "flex",
    alignItems: "space-between",
    backgroundColor: "#ffffff",
    minHeight: "200px",
    margin: "5%",
    cursor: "pointer",
    transition:
        "transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
    "&:hover": {
        transform: "translateY(-5px)",
        boxShadow: "0 10px 10px rgba(0, 0, 0, 0.15)",
    },
});

export const RecipeCard: React.FC<{
    prop: RecipeCardProps & {
        isAdmin?: boolean;
    };
}> = ({ prop }) => {
    const {
        id,
        name,
        description,
        rateAverage,
        totalRates,
        totalSteps,
        ingredients,
        image,
        missingIngredient,
        isAdmin,
    } = prop;
    const [open, setOpen] = useState(false);
    const [recipeData, setRecipeData] = useState<recipeWithRates>();
    const [ratesData, setRatesData] = useState([]);
    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);

    const getRecipeData = async (id: string) => {
        const response = await getRecipeById(id);
        const data = response.data.result.recipeWithRates;
        setRecipeData(data);
    };
    const getRatesData = async (id: string) => {
        const response = await getRatesById(id);
        const data = response.data.result;
        setRatesData(data);
    };
    const handleClick = async (id: string) => {
        try {
            await getRecipeData(id);
            await getRatesData(id);
            openDrawer();
        } catch (error) {
            alert(error);
        }
    };

    return (
        <>
            <StyledCard
                onClick={() => handleClick(id)}
                sx={{
                    maxWidth: "100%",
                }}
            >
                <CardMedia
                    sx={{ width: "300px", height: "300px", objectFit: "cover" }}
                    component="img"
                    image={image}
                    alt="imagen ilustrativa"
                />
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        width: "100%",
                        padding: "10px",
                    }}
                >
                    <StyledCardContent className="flex flex-col">
                        <Box className="flex  justify-between">
                            <Typography variant="h4">{name}</Typography>
                            {missingIngredient?.length &&
                                missingIngredient.length > 0 && (
                                    <Typography
                                        variant="body2"
                                        sx={{ color: "red" }}
                                    >
                                        Te faltan: {missingIngredient?.length}{" "}
                                        ingredientes
                                    </Typography>
                                )}
                            <Box className="flex gap-2">
                                <Rating
                                    readOnly
                                    value={rateAverage}
                                    precision={0.5}
                                />
                                {totalRates === 0
                                    ? "Sin calificar"
                                    : rateAverage}
                            </Box>
                        </Box>
                        <StyledCardContent sx={{ padding: "0" }}>
                            <Typography variant="caption">
                                📋 {totalSteps} pasos
                            </Typography>
                            <Typography variant="caption">
                                🍴 {ingredients.length} ingredientes
                            </Typography>
                        </StyledCardContent>
                        <CardContent sx={{ padding: "10px 0" }}>
                            <Typography variant="body1">
                                {description}
                            </Typography>
                        </CardContent>
                    </StyledCardContent>
                </Box>
            </StyledCard>
            <Drawer
                open={open}
                onClose={closeDrawer}
                anchor="right"
                sx={{
                    width: 500,
                    flexShrink: 0,
                    my: 2,
                    "& .MuiDrawer-paper": {
                        width: 500,
                        boxSizing: "border-box",
                    },
                }}
            >
                {recipeData && (
                    <SidebarRecipeContent
                        prop={{
                            ...recipeData,
                            rates: ratesData,
                            updateRates: getRatesData,
                            isAdmin,
                        }}
                    />
                )}
            </Drawer>
        </>
    );
};
