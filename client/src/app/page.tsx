"use client";
import { EmptyRecipesContainer, RecipeCard, SearchBar } from "@/components";
import { styled, Typography } from "@mui/material";

const PageContainer = styled('main')({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: 'center',
  width: "100%",
  minHeight: "100vh",
  padding: '5px'
});

interface receta {
  title: string;
  description: string;
  rate: number;
  totalRate: number;
  steps: number;
  ingredients: number;
}

// const recetas: receta[] = [];
const recetas: receta[] = [{
        title: "Arroz con pollito",
        description:
            "Arroz con pollo hecho con arroz y pollo, tambien se puede hacer con pollo y arroz pero no es lo mismo",
        rate: 3.5,
        totalRate: 49,
        steps: 12,
        ingredients: 7,
    },
    {
        title: "Carne al horno",
        description:
            "Carne cocinada al horno, si no tenes carne no la podes hacer",
        rate: 5,
        totalRate: 49,
        steps: 7,
        ingredients: 2,
    },
    {
        title: "Jugo de naranja",
        description:
            "Jugo hecho con naranjas, si usas otra fruta ya no es de naranjas",
        rate: 2.5,
        totalRate: 10,
        steps: 2,
        ingredients: 1,
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
        ¡Empieza a crear tu <br/> combinacion perfecta!
      </Typography>
      <Typography variant="h3" sx={{ textAlign: "center" }}>
        Usa las etiquetas o el buscador para encontrar lo que necesitas.
      </Typography>

      <SearchBar sx={{width: '65%', margin: '20px'}} />

      {recetas && recetas.length > 0 ? (
        recetas.map((receta) => (
          <RecipeCard
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
