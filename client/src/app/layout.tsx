'use client'
// import type { Metadata } from "next";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { SideBar } from "@/components";
import theme from "@/theme/theme";
import '@/styles/globals.css'

// export const metadata: Metadata = {
//   title: "Recetario",
//   description:
//     "Aplicacion web para buscar recetas con los ingredientes que tienes disponibles",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
    <title>Recetario</title>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <body>
          <SideBar />
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
