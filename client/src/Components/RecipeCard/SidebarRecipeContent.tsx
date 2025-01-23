import {
    Avatar,
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

type RecipeCardProps = recipeWithRates;

export const SidebarRecipeContent: React.FC<{ prop: RecipeCardProps }> = ({
    prop,
}) => {
    const { name, steps, ingredients, description, image, rates, rateAverage } =
        prop;
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
                            {rates.length}{" "}
                            <StarRoundedIcon sx={{ color: "#faaf00" }} />
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
                            {ingredients.map(
                                (ingredient: string, index: number) => {
                                    return (
                                        <ListItem key={index}>
                                            <Box className="bg-primary h-3 w-1 mr-2 inline-block"></Box>
                                            <Typography className="text-gray-500 text-sm inline">
                                                {ingredient}
                                            </Typography>
                                        </ListItem>
                                    );
                                }
                            )}
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
                            rows={3} // Número de líneas iniciales
                            variant="outlined"
                            placeholder="Queremos saber más detalles..."
                            fullWidth
                            className="border border-gray-500 rounded p-1 resize-none focus:border-primary focus:outline-none"
                        ></TextField>
                        <Button className="bg-primary font-bold my-2 text-white rounded p-2">
                            Enviar
                        </Button>
                    </Box>

                    <Typography className="font-semibold">
                        Comentarios
                    </Typography>

                    {rates.map((rate) => {
                        return (
                            <Box className="display flex pb-5" key={rate._id}>
                                <Avatar
                                    alt={rate.reviewer}
                                    src="/static/images/avatar/1.jpg"
                                />
                                <Box className="flex flex-col gap-y-2 ml-3">
                                    <Box>
                                        <div className="flex justify-between items-center">
                                            <Typography className="font-xl font-normal">
                                                {rate.reviewer}
                                            </Typography>
                                            <Typography
                                                variant="caption"
                                                className="text-primary font-semibold"
                                            >
                                                {rate.createdAt}
                                            </Typography>
                                        </div>
                                        <Rating
                                            name="read-only"
                                            value={rate.rating}
                                            readOnly
                                            size="small"
                                        />
                                    </Box>

                                    <Typography className="text-gray-500 text-sm">
                                        {rate.comment}
                                    </Typography>
                                </Box>
                            </Box>
                        );
                    })}

                    {/* <Box className="display flex pb-5">
                        <Avatar className="bg-lime-500">NS</Avatar>
                        <Box className="flex flex-col gap-y-2 ml-3">
                            <Box>
                                <div className="flex justify-between items-center">
                                    <Typography className="font-xl font-normal">
                                        Nubia Sánchez
                                    </Typography>
                                    <Typography
                                        variant="caption"
                                        className="text-primary font-semibold"
                                    >
                                        10 Sep 2021
                                    </Typography>
                                </div>
                                <Rating
                                    name="read-only"
                                    value={4}
                                    readOnly
                                    size="small"
                                />
                            </Box>

                            <Typography className="text-gray-500 text-sm">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Sapiente corporis cupiditate
                                dolorem, aliquid expedita hic.
                            </Typography>
                        </Box>
                    </Box> */}
                </Box>
            </Box>
        </>
    );
};
