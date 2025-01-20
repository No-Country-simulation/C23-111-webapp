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

export const SidebarRecipeContent = () => {
    const [rating, setRating] = useState(2.5);

    const saveReview = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <>
            <Box className="grid grid-cols-1 gap-y-4 p-0">
                <Image
                    src="https://picsum.photos/360"
                    alt=""
                    className="aspect-video"
                    width={480}
                    height={480}
                />

                <Box className="px-8 flex flex-col gap-y-6">
                    <Box className="flex justify-between items-center">
                        <Box>
                            <Typography className="font-bold text-2xl text-primary">
                                Pollo barato
                            </Typography>
                            <Typography variant="caption" className="mr-3">
                                📋 7 pasos
                            </Typography>
                            <Typography variant="caption">
                                🍴 5 ingredientes
                            </Typography>
                        </Box>
                        <Typography className="text-gray-500 text-sm font-semibold">
                            {rating}{" "}
                            <StarRoundedIcon sx={{ color: "#faaf00" }} />
                        </Typography>
                    </Box>
                    <Divider />
                    <Box>
                        <Typography className="font-semibold">
                            Descripción
                        </Typography>
                        <Typography className="text-gray-500 text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quia neque delectus sed ratione veniam
                            veritatis odit assumenda praesentium
                        </Typography>
                    </Box>
                    <Box>
                        <Typography className="font-semibold">
                            Ingredientes
                        </Typography>

                        <List className="flex flex-col gap-y-1 ">
                            <ListItem>
                                <Box className="bg-primary h-3 w-1 mr-2 inline-block"></Box>
                                <Typography className="text-gray-500 text-sm inline">
                                    Ingrediente
                                </Typography>
                            </ListItem>
                        </List>
                    </Box>
                    <Box>
                        <Typography className="font-semibold">
                            ¡Manos a la obra!
                        </Typography>
                        <Box>
                            <Typography className="font-semibold text-primary mt-3">
                                Paso 1
                            </Typography>
                            <Typography className="text-gray-500 text-sm">
                                Compra un pollo del supermercado mas cercano que
                                tengas a tu casa, procura que sea barato o no
                                funcionara
                            </Typography>
                        </Box>
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
