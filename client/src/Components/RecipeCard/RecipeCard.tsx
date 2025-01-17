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

type RecipeCardProps = {
    title: string;
    description: string;
    rate: number;
    totalRate: number;
    steps: number;
    ingredients: number;
};

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
                    image="/arroz-pollo.jpg"
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
                            📋 {steps} pasos
                        </Typography>
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
                    width: 370,
                    flexShrink: 0,
                    my: 2,
                    "& .MuiDrawer-paper": {
                        width: 370,
                        boxSizing: "border-box",
                    },
                }}
            >
                <button className="px-4 py-2 font-semibold text-sm bg-white text-slate-700 dark:bg-slate-700 dark:text-white rounded-md shadow-sm ring-1 ring-slate-900/5 border-indigo-500 dark:border-sky-500 border-2 border-solid">
                    Button A
                </button>
            </Drawer>
        </>
    );
};
