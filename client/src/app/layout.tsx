"use client";
import { ThemeProvider } from "@mui/material/styles";
import { RecipeProvider } from "@/context/recipeContext";
import { AuthProvider } from "@/context/authContext";
import { CircularProgress, CssBaseline } from "@mui/material";
import { ScreenSizeWarning } from "@/components";
import theme from "@/theme/theme";
import NextNProgress from "nextjs-progressbar";
import "@/styles/globals.css";
import { ToastContainer } from "react-toastify";
import { Suspense } from "react";
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
                        <Suspense
                            fallback={
                                <div className="h-screen w-screen flex justify-center items-center z-[5000] fixed">
                                    <CircularProgress />
                                </div>
                            }
                        >
                            <AuthProvider>
                                <NextNProgress
                                    color={theme.palette.primary.main}
                                />
                                {children}
                                <ScreenSizeWarning />
                            </AuthProvider>
                            <ToastContainer />
                        </Suspense>
                    </body>
                </RecipeProvider>
            </ThemeProvider>
        </html>
    );
}
