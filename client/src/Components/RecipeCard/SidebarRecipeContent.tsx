import {
    Box,
    Button,
    Divider,
    List,
    ListItem,
    Rating,
    TextField,
    Typography,
} from "@mui/material";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { FormEvent, useState } from "react";
import Image from "next/image";
import { recipeWithRates } from "@/types/recipes";

type RecipeCardProps = recipeWithRates

export const SidebarRecipeContent: React.FC<{prop: RecipeCardProps}> = ({prop}) => {
    const {name, steps, ingredients, description, image, rates, rateAverage} = prop
    const [rating, setRating] = useState(rateAverage);

    const saveReview = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <>
            <Box className="grid grid-cols-1 gap-y-4 p-0">
                <Image
                    src={image}
                    alt=""
                    className="aspect-video"
                    width={480}
                    height={480}
                />

                <Box className="px-8 flex flex-col gap-y-6">
                    <Box className="flex justify-between items-center">
                        <Box>
                            <Typography className="font-bold text-2xl text-primary">
                                {name}
                            </Typography>
                            <Typography variant="caption" className="mr-3">
                                📋 {steps.length} pasos
                            </Typography>
                            <Typography variant="caption">
                                🍴 {ingredients.length} ingredientes
                            </Typography>
                        </Box>
                        <Typography className="text-gray-500 text-sm font-semibold">
                            {rates.length} <StarRoundedIcon sx={{ color: "#faaf00" }} />
                        </Typography>
                    </Box>
                    <Divider />
                    <Box>
                        <Typography className="font-semibold">
                            Descripción
                        </Typography>
                        <Typography className="text-gray-500 text-sm">
                            {description}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography className="font-semibold">
                            Ingredientes
                        </Typography>

                        <List className="flex flex-col gap-y-1 ">
                            {ingredients.map((ingredient: string, index: number) => {
                                return (
                                    <ListItem key={index}>
                                        <Box className="bg-primary h-3 w-1 mr-2 inline-block"></Box>
                                        <Typography className="text-gray-500 text-sm inline">
                                            {index + 1}. {ingredient}
                                        </Typography>
                                    </ListItem>
                                );
                            })}
                        </List>
                    </Box>
                    <Box>
                        <Typography className="font-semibold">
                            ¡Manos a la obra!
                        </Typography>
                        {steps.map((step: string, index: number) => {
                            return (
                                <Box key={index}>
                                    <Typography className="font-semibold text-primary mt-3">
                                        Paso {index + 1}
                                    </Typography>
                                    <Typography className="text-gray-500 text-sm">
                                        {step}
                                    </Typography>
                                </Box>
                            );
                        })}
                    </Box>
                    <Divider />
                    {/* formulario */}
                    <Box
                        component="form"
                        className="flex flex-col gap-y-2"
                        onSubmit={saveReview}
                    >
                        <Typography className="font-semibold text-center">
                            ¿Qué opinas de esta receta?
                        </Typography>
                        <Box className="flex justify-center mb-3">
                            <Rating
                                sx={{}}
                                name="simple-controlled"
                                value={rating}
                                onChange={(event, newValue) => {
                                    setRating(Number(newValue));
                                }}
                            />
                        </Box>
                        <TextField
                            multiline
                            rows={4} // Número de líneas iniciales
                            variant="outlined"
                            placeholder="Queremos saber más detalles..."
                            fullWidth
                            className="border border-gray-500 rounded p-1 resize-none focus:border-primary focus:outline-none"
                        ></TextField>
                        <Button className="bg-primary font-bold my-2 text-white rounded p-2">
                            Enviar
                        </Button>
                    </Box>
                </Box>
            </Box>
        </>
    );
};
