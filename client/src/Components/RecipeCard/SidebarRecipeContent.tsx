import { Box, Divider, Rating, Typography } from "@mui/material";
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

                <main className="px-8 flex flex-col gap-y-6">
                    <Box className="flex justify-between items-center">
                        <Box>
                            <h2 className="font-bold text-2xl text-primary">
                                Pollo barato
                            </h2>
                            <Typography variant="caption" className="mr-3">
                                📋 7 pasos
                            </Typography>
                            <Typography variant="caption">
                                🍴 5 ingredientes
                            </Typography>
                        </Box>
                        <p className="text-gray-500 text-sm font-semibold">
                            {rating}{" "}
                            <StarRoundedIcon sx={{ color: "#faaf00" }} />
                        </p>
                    </Box>
                    <Divider />
                    <Box>
                        <Typography className="font-semibold">
                            Descripción
                        </Typography>
                        <span className="text-gray-500 text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quia neque delectus sed ratione veniam
                            veritatis odit assumenda praesentium
                        </span>
                    </Box>
                    <Box>
                        <Typography className="font-semibold">
                            Ingredientes
                        </Typography>

                        <ul className="flex flex-col gap-y-1 ">
                            <li>
                                <div className="bg-primary h-3 w-1 mr-2 inline-block"></div>
                                <p className="text-gray-500 text-sm inline">
                                    Ingrediente
                                </p>
                            </li>
                            <li>
                                <div className="bg-primary h-3 w-1 mr-2 inline-block"></div>
                                <p className="text-gray-500 text-sm inline">
                                    Ingrediente
                                </p>
                            </li>
                            <li>
                                <div className="bg-primary h-3 w-1 mr-2 inline-block"></div>
                                <p className="text-gray-500 text-sm inline">
                                    Ingrediente
                                </p>
                            </li>
                        </ul>
                    </Box>
                    <Box>
                        <Typography className="font-semibold">
                            ¡Manos a la obra!
                        </Typography>
                        <Box>
                            <p className="font-semibold text-primary">Paso 1</p>
                            <span className="text-gray-500 text-sm">
                                Compra un pollo del supermercado mas cercano que
                                tengas a tu casa, procura que sea barato o no
                                funcionara
                            </span>
                        </Box>
                        <Box>
                            <p className="font-semibold text-primary">Paso 2</p>
                            <span className="text-gray-500 text-sm">
                                Compra un pollo del supermercado mas cercano que
                                tengas a tu casa, procura que sea barato o no
                                funcionara
                            </span>
                        </Box>
                    </Box>
                    <Divider />
                    <form
                        className="flex flex-col gap-y-2"
                        onSubmit={saveReview}
                    >
                        <Typography className="font-semibold text-center">
                            ¿Qué opinas de esta receta?
                        </Typography>
                        <div className="flex justify-center mb-3">
                            <Rating
                                sx={{}}
                                name="simple-controlled"
                                value={rating}
                                onChange={(event, newValue) => {
                                    setRating(Number(newValue));
                                }}
                            />
                        </div>
                        <textarea
                            name=""
                            id=""
                            className="border border-gray-500 rounded p-1 resize-none focus:border-primary focus:outline-none"
                            placeholder="Queremos saber más detalles..."
                        ></textarea>
                        <button className="bg-primary font-bold my-2 text-white rounded p-2">
                            Enviar
                        </button>
                    </form>
                </main>
            </Box>
        </>
    );
};
