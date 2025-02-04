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
import { useState } from "react";
import { SidebarRecipeContent } from "./SidebarRecipeContent";
import { getRatesById, getRecipeById } from "@/services/recipes";
import { recipe, recipeWithRates } from "@/types/recipes";
import { usePathname } from "next/navigation";

type RecipeCardProps = {
  recipe: recipe;
  sx?: object;
  status?: string;
  _id?: string;
};

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

export const RecipeCard: React.FC<RecipeCardProps> = ({
  recipe,
  sx,
  status,
  _id,
}) => {
  const [open, setOpen] = useState(false);
  const [recipeData, setRecipeData] = useState<recipeWithRates>();
  const [ratesData, setRatesData] = useState([]);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  const pathname = usePathname();

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
  } = recipe;

  const backColor = (status: string | undefined) => {
    switch (status) {
      case "approved": {
        return "#7bd76b";
        break;
      }
      case "pending": {
        return "#F48E28";
        break;
      }
      case "rejected": {
        return "#red";
        break;
      }
    }
  };

  const getRecipeData = async (id: string | undefined) => {
    const response = await getRecipeById(id);
    const data = response.data.result.recipeWithRates;
    setRecipeData(data);
  };
  const getRatesData = async (id: string | undefined) => {
    const response = await getRatesById(id);
    const data = response.data.result;
    setRatesData(data);
  };
  const handleClick = async (id: string | undefined) => {
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
        onClick={() => {
          if (pathname === "/user/my-recipes") {
            handleClick(_id);
          } else {
            handleClick(id);
          }
        }}
        sx={{
          maxWidth: "100%",
          ...sx,
        }}
      >
        <CardMedia
          sx={{ width: "250px", height: "250px", objectFit: "cover" }}
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
              {missingIngredient?.length && missingIngredient.length > 0 && (
                <Typography variant="body2" sx={{ color: "red" }}>
                  Te faltan: {missingIngredient?.length} ingredientes
                </Typography>
              )}
              {pathname === "/user/my-recipes" ||
                (pathname === "/admin" && (
                  <Box
                    sx={{
                      backgroundColor: backColor(status),
                      borderRadius: "10px",
                      padding: "2px",
                    }}
                  >
                    <Typography variant="body2" sx={{ color: "white" }}>
                      {status}
                    </Typography>
                  </Box>
                ))}
              {pathname === "/" && (
                <Box className="flex gap-2">
                  <Rating readOnly value={rateAverage} precision={0.5} />
                  {totalRates === 0 ? "Sin calificar" : rateAverage}
                </Box>
              )}
            </Box>
            <StyledCardContent sx={{ padding: "0" }}>
              <Typography variant="caption">📋 {totalSteps} pasos</Typography>
              <Typography variant="caption">
                🍴 {ingredients.length} ingredientes
              </Typography>
            </StyledCardContent>
            <CardContent sx={{ padding: "10px 0" }}>
              <Typography variant="body1">{description}</Typography>
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
            }}
          />
        )}
      </Drawer>
    </>
  );
};
