import { Box, Typography } from "@mui/material";

export const ScreenSizeWarning = () => {
    return (
        <Box className="flex flex-col p-20 fixed inset-0 z-[1400] items-center justify-center bg-white  text-primary text-center lg:hidden">
            <Typography variant="h2" className="font-semibold">
                Ups!
            </Typography>
            <Typography className="text-xl">
                Esta página está diseñada para dispositivos de escritorio. Por
                favor, accede desde una pantalla más grande para una mejor
                experiencia.
            </Typography>
        </Box>
    );
};
