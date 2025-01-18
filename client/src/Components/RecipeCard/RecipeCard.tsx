import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Rating,
  styled
} from "@mui/material";
import { recipe } from "@/types/recipes";

type RecipeCardProps = recipe

const StyledCardContent = styled(CardContent) ({
  display: "flex",
  alignItems: "center",
  gap: "20px",
  padding: "10px 12px",
})

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
  image
}) => {
  return (
    <StyledCard>
      <CardMedia
        sx={{ width: "300px", height: "auto" }}
        component="img"
        image={image}
        alt="foto ilustrativa de arroz con pollo"
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width:"700px"
        }}
      >
        <StyledCardContent>
          <Typography variant="h4">{name}</Typography>
          <Rating readOnly value={rateAverage} precision={0.5} /> ({totalRates})
        </StyledCardContent>

        <StyledCardContent>
          <Typography variant="body2">📋 {totalSteps} pasos</Typography>
          <Typography variant="body2">🍴 {ingredients.length} ingredientes</Typography>
        </StyledCardContent>
        <CardContent sx={{ padding: "10px 12px" }}>
          <Typography variant="body1">{description}</Typography>
        </CardContent>
      </Box>
    </StyledCard>
  );
};
