"use client";
import { ThemeProvider } from "@mui/material/styles";
import { RecipeProvider } from "@/context/recipeContext";
import { CssBaseline } from "@mui/material";
import { ScreenSizeWarning } from "@/Components";
import theme from "@/theme/theme";
import NextNProgress from "nextjs-progressbar";
import "@/styles/globals.css";
import { ToastContainer } from "react-toastify";
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="es">
            <head>
                <title>Recetario</title>
            </head>
            <ThemeProvider theme={theme}>
                <RecipeProvider>
                    <CssBaseline />
                    <body>
                        <NextNProgress color={theme.palette.primary.main} />
                        {children}
                        <ToastContainer />
                        <ScreenSizeWarning />
                    </body>
                </RecipeProvider>
            </ThemeProvider>
        </html>
    );
}
