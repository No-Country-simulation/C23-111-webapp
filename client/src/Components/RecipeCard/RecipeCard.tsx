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
import { addRateById } from "@/services/rates";

const StyledCardContent = styled(CardContent)({
  display: "flex",
  alignItems: "center",
  gap: "15px",
  padding: "5px 12px",
});

const StyledCard = styled(Card)({
  display: "flex",
  alignItems: "space-between",
  backgroundColor: "#ffffff",
  minHeight: "200px",
  margin: "5% 0",
  cursor: "pointer",
  transition:
    "transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 10px 10px rgba(0, 0, 0, 0.15)",
  },
});

export const RecipeCard: React.FC<RecipeCardProps> = ({
  id,
  name,
  description,
  rateAverage,
  totalRates,
  totalSteps,
  ingredients,
  image,
  missingIngredient,
}) => {
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
    console.log(data);
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
          sx={{ width: "300px", height: "auto" }}
          component="img"
          image={image}
          alt="imagen ilustrativa"
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "700px",
          }}
        >
          <StyledCardContent className="flex justify-between">
            <>
              <Typography variant="h4">{name}</Typography>
              {(missingIngredient?.length) && (missingIngredient.length > 0) && (
                <Typography variant="body2" sx={{ color: "red" }}>
                  Te faltan: {missingIngredient?.length} ingredientes
                </Typography>
              )}
            </>
                    <StyledCardContent>
                        <Typography variant="caption">
                            📋 {totalSteps} pasos
                        </Typography>
                        <Typography variant="caption">
                            🍴 {ingredients.length} ingredientes
                        </Typography>
                    </StyledCardContent>
                    <CardContent sx={{ padding: "10px 12px" }}>
                        <Typography variant="body1">{description}</Typography>
                    </CardContent>
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
                        }}
                    />
                )}
            </Drawer>
        </>
    );

};
