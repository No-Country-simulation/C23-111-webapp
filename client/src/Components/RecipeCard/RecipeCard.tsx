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
import StarIcon from "@mui/icons-material/Star";
import { FormEvent, useState } from "react";
import { SidebarRecipeContent } from "./SidebarRecipeContent";

export interface RecipeCardProps {
    title: string;
    description: string;
    rate: number;
    totalRate?: number;
    steps: string[];
    ingredients: string[];
    image: string;
}

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
    title,
    description,
    rate,
    totalRate,
    steps,
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
                    alt="foto ilustrativa de arroz con pollo"
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
                        <Typography variant="h4">{title}</Typography>
                        <Rating readOnly value={rate} precision={0.5} /> (
                        {totalRate})
                    </StyledCardContent>

                    <StyledCardContent>
                        <Typography variant="body2">
                            📋 {steps.length} pasos
                        </Typography>
                        <Typography variant="body2">
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
                <SidebarRecipeContent
                    title={title}
                    description={description}
                    steps={steps}
                    ingredients={ingredients}
                    rate={rate}
                    image={image}
                />
            </Drawer>
        </>
    );
};
