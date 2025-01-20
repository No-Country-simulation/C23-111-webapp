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
import { recipe } from "@/types/recipes";
type RecipeCardProps = recipe;
import { useState } from "react";
import { SidebarRecipeContent } from "./SidebarRecipeContent";

const StyledCardContent = styled(CardContent)({
  display: "flex",
  alignItems: "center",
  gap: "20px",
  padding: "10px 12px",
});

const StyledCard = styled(Card)({
  display: "flex",
  backgroundColor: "#fff",
  margin: "10px 0",
  cursor: "pointer",
  "&:hover": {
    transform: "scale(1.1)",
    transition: "transform 0.2s ease",
  },
});

export const RecipeCard: React.FC<RecipeCardProps> = ({
  name,
  description,
  rateAverage,
  totalRates,
  totalSteps,
  ingredients,
  image,
}) => {
  const [open, setOpen] = useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <>
      <StyledCard onClick={openDrawer}>
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
          <StyledCardContent>
            <Typography variant="h4">{name}</Typography>
            <Rating readOnly value={rateAverage} precision={0.5} /> (
            {totalRates})
          </StyledCardContent>

          <StyledCardContent>
            <Typography variant="body2">📋 {totalSteps} pasos</Typography>
            <Typography variant="body2">
              🍴 {ingredients} ingredientes
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
        <SidebarRecipeContent />
      </Drawer>
    </>
  );
};
