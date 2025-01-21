'use client'
import { ThemeProvider } from "@mui/material/styles";
import { RecipeProvider } from "@/context/recipeContext";
import { CssBaseline } from "@mui/material";
import { SideBar } from "@/components";
import theme from "@/theme/theme";
import '@/styles/globals.css'



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
    <title>Recetario</title>
      <ThemeProvider theme={theme}>
        <RecipeProvider>
        <CssBaseline />
        <body>
          <SideBar />
          {children}
        </body>
        </RecipeProvider>
      </ThemeProvider>
    </html>
  );
}
