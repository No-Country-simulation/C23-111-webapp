import { Box, Drawer } from "@mui/material";
import RestaurantRoundedIcon from "@mui/icons-material/RestaurantRounded";
import { FilterBox, SearchBar } from "@/components";
// import { CategoryRounded } from "@mui/icons-material";
import { useRecipeContext } from "@/context/recipeContext";

// const ingredientes = [
//     { id: 1, name: "Maíz" },
//     { id: 2, name: "Chile" },
//     { id: 3, name: "Frijol" },
//     { id: 4, name: "Aguacate" },
//     { id: 5, name: "Aceitunas" },
//     { id: 6, name: "Jitomate" },
//     { id: 7, name: "Cebolla" },
//     { id: 8, name: "Ajo" },
//     { id: 9, name: "Cilantro" },
//     { id: 10, name: "Limón" },
// ];

// const categorias = [
//     { id: 1, name: "vegetariana" },
//     { id: 2, name: "vegana" },
//     { id: 3, name: "sin gluten" },
//     { id: 4, name: "bebidas" },
//     { id: 5, name: "saludable" },
//     { id: 6, name: "comida rapida" },
// ];

export function SideBar () {
    const {ingredients} = useRecipeContext()
    return (
        <Drawer
            sx={{   
                width: 370,
                flexShrink: 0,
                my: 2,
                "& .MuiDrawer-paper": {
                    width: 370,
                    boxSizing: "border-box",
                },
            }}
            variant="permanent"
            anchor="left"
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    m: 2,
                    marginTop: '40px',
                    gap: '10px'
                }}
            >
                <SearchBar />
                <FilterBox
                    title="Ingredientes"
                    subtitle="0/10 ingredientes"
                    items={ingredients} // Pasamos los ingredientes aquí
                    Icon={RestaurantRoundedIcon}
                />

                {/* <FilterBox
                    title="Categorías"
                    subtitle="0/6 categorías"
                    items={categorias} // Pasamos las categorías aquí
                    Icon={CategoryRounded}
                /> */}
            </Box>
        </Drawer>
    );
}
