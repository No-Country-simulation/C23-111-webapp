import { RecipeCard } from "@/Components";
import { Box, Typography } from "@mui/material";

export default function AdminPage() {
    const listRecipes = [
        {
            id: "67a0d94402bbe3e9f90e6da7",
            name: "Ensalada de quinoa y vegetales",
            description:
                "Una ensalada fresca y nutritiva con quinoa, vegetales frescos y aderezo ligero.",
            category: ["vegetariana"],
            ingredients: [
                "quinoa",
                "tomate",
                "pepino",
                "aguacate",
                "aceite de oliva",
                "limón",
                "sal",
                "pimienta",
            ],
            totalSteps: 5,
            image: "https://res.cloudinary.com/du1id9jmm/image/upload/v1738594628/recipes/1738594626478.jpg",
            rateAverage: 0,
            totalRates: 0,
            createdAt: "2025-02-03T14:57:08.094Z",
            userId: "67a0d49ec4b97d540ce9a537",
        },
        {
            id: "67a0da4d02bbe3e9f90e6dac",
            name: "Tacos veganos de garbanzos",
            description:
                "Tacos rellenos de garbanzos sazonados, acompañados de una salsa fresca.",
            category: ["vegana"],
            ingredients: [
                "tortillas",
                "garbanzos",
                "cebolla",
                "pimiento",
                "tomate",
                "aguacate",
                "cilantro",
                "limón",
                "sal",
                "pimienta",
            ],
            totalSteps: 5,
            image: "https://res.cloudinary.com/du1id9jmm/image/upload/v1738594894/recipes/1738594892240.jpg",
            rateAverage: 0,
            totalRates: 0,
            createdAt: "2025-02-03T15:01:33.667Z",
            userId: "67a0d49ec4b97d540ce9a537",
        },
        {
            id: "67a0db6695942dfe6484c3ef",
            name: "Pan de plátano sin gluten",
            description:
                "Un delicioso pan de plátano, suave y sin gluten, ideal para el desayuno.",
            category: ["sin gluten"],
            ingredients: [
                "plátanos maduros",
                "harina de arroz",
                "polvo de hornear",
                "sal",
                "azúcar",
                "huevo",
                "aceite de coco",
                "vainilla",
            ],
            totalSteps: 5,
            image: "https://res.cloudinary.com/du1id9jmm/image/upload/v1738595175/recipes/1738595173116.jpg",
            rateAverage: 0,
            totalRates: 0,
            createdAt: "2025-02-03T15:06:14.868Z",
            userId: "67a0d49ec4b97d540ce9a537",
        },
        {
            id: "67a0dc3b95942dfe6484c3f2",
            name: "Limonada fresca",
            description:
                "Una bebida refrescante de limón y menta, perfecta para los días calurosos.",
            category: ["bebidas"],
            ingredients: ["limones", "agua", "miel", "menta fresca", "hielo"],
            totalSteps: 4,
            image: "https://res.cloudinary.com/du1id9jmm/image/upload/v1738595388/recipes/1738595386278.jpg",
            rateAverage: 0,
            totalRates: 0,
            createdAt: "2025-02-03T15:09:47.874Z",
            userId: "67a0d49ec4b97d540ce9a537",
        },
        {
            id: "67a0dc9b95942dfe6484c3f5",
            name: "Bowl de yogur y frutas",
            description:
                "Un bowl nutritivo con yogur, frutas frescas y un toque de granola.",
            category: ["saludable"],
            ingredients: [
                "yogur natural",
                "fresas",
                "plátano",
                "granola",
                "miel",
                "almendras",
            ],
            totalSteps: 4,
            image: "https://res.cloudinary.com/du1id9jmm/image/upload/v1738595484/recipes/1738595481644.jpg",
            rateAverage: 0,
            totalRates: 0,
            createdAt: "2025-02-03T15:11:23.658Z",
            userId: "67a0d49ec4b97d540ce9a537",
        },
        {
            id: "67a0dcf995942dfe6484c3f9",
            name: "Wrap de pollo y aguacate",
            description:
                "Wraps de pollo con aguacate y vegetales frescos, listos en pocos minutos.",
            category: ["comida rápida"],
            ingredients: [
                "tortillas de harina",
                "pollo",
                "aguacate",
                "lechuga",
                "tomate",
                "mayonesa",
                "sal",
                "pimienta",
            ],
            totalSteps: 5,
            image: "https://res.cloudinary.com/du1id9jmm/image/upload/v1738595578/recipes/1738595576495.jpg",
            rateAverage: 0,
            totalRates: 0,
            createdAt: "2025-02-03T15:12:57.912Z",
            userId: "67a0d49ec4b97d540ce9a537",
        },
    ];
    return (
        <>
            <Box className="flex flex-col items-center justify-center max-h-full mt-16 w-full px-5">
                <Typography
                    variant="h1"
                    sx={{
                        textAlign: "center",
                    }}
                >
                    ¡Bienvenido al panel de administración!
                </Typography>

                <Typography
                    variant="h4"
                    sx={{ textAlign: "center", mt: "10px" }}
                >
                    Aprueba o rechaza las recetas enviadas por los usuarios.
                    ¡Gracias por mantener nuestra comunidad organizada!
                </Typography>

                {listRecipes.map((recipe) => {
                    return (
                        <RecipeCard
                            key={recipe.id}
                            prop={{ ...recipe, isAdmin: true }}
                        ></RecipeCard>
                    );
                })}
            </Box>
        </>
    );
}
