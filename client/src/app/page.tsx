"use client";
import { EmptyRecipesContainer, RecipeCard, SearchBar } from "@/components";
import { styled, Typography } from "@mui/material";

const PageContainer = styled("main")({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    minHeight: "100vh",
    padding: "5px",
});

interface receta {
    title: string;
    description: string;
    rate: number;
    totalRate: number;
    steps: string[];
    ingredients: string[];
}

// const recetas: receta[] = [];
const recetas: receta[] = [
    {
        title: "Ceviche peruano",
        description:
            "Plato emblemático de Perú, hecho con pescado fresco, jugo de limón y ají.",
        rate: 4.8,
        totalRate: 100,
        ingredients: ["Pescado", "Limón", "Ají", "Cebolla roja", "Culantro"],
        steps: [
            "Cortar el pescado en cubos",
            "Exprimir los limones",
            "Mezclar el pescado con el limón y ají",
            "Añadir cebolla roja y culantro",
            "Servir acompañado de camote o choclo",
        ],
    },
    {
        title: "Ají de gallina",
        description:
            "Delicioso guiso peruano a base de pollo desmenuzado en una crema de ají amarillo.",
        rate: 4.6,
        totalRate: 85,
        ingredients: [
            "Pechuga de pollo",
            "Ají amarillo",
            "Pan",
            "Leche",
            "Queso parmesano",
        ],
        steps: [
            "Cocinar y desmenuzar el pollo",
            "Preparar la crema de ají amarillo",
            "Añadir el pan remojado en leche",
            "Mezclar con el pollo desmenuzado",
            "Servir con arroz y huevo cocido",
        ],
    },
    {
        title: "Tacos al pastor",
        description:
            "Tacos típicos mexicanos con carne marinada al pastor y piña.",
        rate: 5.0,
        totalRate: 150,
        ingredients: [
            "Carne de cerdo",
            "Piña",
            "Tortillas",
            "Cilantro",
            "Cebolla",
        ],
        steps: [
            "Marinar la carne con especias",
            "Cocinar la carne en trompo o sartén",
            "Calentar las tortillas",
            "Servir la carne en las tortillas con piña",
            "Añadir cilantro y cebolla",
        ],
    },
    {
        title: "Pozole rojo",
        description:
            "Sopa tradicional mexicana hecha a base de maíz nixtamalizado y carne.",
        rate: 4.9,
        totalRate: 120,
        ingredients: [
            "Maíz pozolero",
            "Carne de cerdo",
            "Chiles rojos",
            "Rábano",
            "Lechuga",
        ],
        steps: [
            "Cocinar el maíz pozolero",
            "Preparar el caldo con carne de cerdo",
            "Hacer la salsa de chiles rojos",
            "Mezclar la salsa con el caldo",
            "Servir con rábano y lechuga",
        ],
    },
];

export default function Home() {
    return (
        <PageContainer>
            <Typography
                variant="h1"
                sx={{
                    textAlign: "center",
                    margin: "5% 15% 2% 15%",
                }}
            >
                ¡Empieza a crear tu <br /> combinacion perfecta!
            </Typography>
            <Typography variant="h3" sx={{ textAlign: "center" }}>
                Usa las etiquetas o el buscador para encontrar lo que necesitas.
            </Typography>

            <SearchBar sx={{ width: "65%", margin: "20px" }} />

            {recetas && recetas.length > 0 ? (
                recetas.map((receta) => (
                    <RecipeCard
                        image={
                            "https://picsum.photos/360?title=" + receta.title
                        }
                        key={receta.title}
                        title={receta.title}
                        description={receta.description}
                        rate={receta.rate}
                        totalRate={receta.totalRate}
                        steps={receta.steps}
                        ingredients={receta.ingredients}
                    />
                ))
            ) : (
                <EmptyRecipesContainer />
            )}
        </PageContainer>
    );
}
