import { Box, Drawer } from "@mui/material";
import RestaurantRoundedIcon from "@mui/icons-material/RestaurantRounded";
import { FilterBox, SearchBar } from "@/Components";
import { CategoryRounded } from "@mui/icons-material";
import { useRecipeContext } from "@/context/recipeContext";

export function SideBar() {
    const { ingredients, categories } = useRecipeContext();

    return (
        <Drawer
            sx={{
                width: 400,
                flexShrink: 0,
                my: 2,
                "& .MuiDrawer-paper": {
                    width: 400,
                    boxSizing: "border-box",
                },
                "& .MuiBox-root": {
                    // minHeight: "100%",
                    height: "auto",
                },
            }}
            variant="permanent"
            anchor="left"
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    position: "absolute",
                    alignItems: "center",
                    height: "100%",
                    m: 2,
                    marginTop: "40px",
                    gap: "10px",
                }}
            >
                <SearchBar />
                <FilterBox
                    title="Ingredientes"
                    subtitle={ingredients.length}
                    items={ingredients} // Pasamos los ingredientes aquí
                    Icon={RestaurantRoundedIcon}
                />

                <FilterBox
                    title="Categorías"
                    subtitle={categories.length}
                    items={categories} // Pasamos las categorías aquí
                    Icon={CategoryRounded}
                />
            </Box>
        </Drawer>
    );
}
