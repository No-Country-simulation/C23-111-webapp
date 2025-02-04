"use client";
import { Dialog, DialogContent, DialogTitle, Box } from "@mui/material";
import { CommonButton } from "@/Components";
import { useState } from "react";
import { AddRecipeForm } from "./_components/AddRecipeForm";

export const AddRecipeModal = () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <>
            <CommonButton
                text="Subir receta"
                variant="contained"
                buttonSize="small"
                clickHandler={handleClick}
            />
            <Dialog
                open={open}
                onClose={handleClick}
                maxWidth="lg"
                sx={{ gap: "15px", "& .MuiPaper-root": { minWidth: "60%" } }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        width: "100%",
                    }}
                >
                    <DialogTitle variant="h1">
                        Sube tu propia receta!
                    </DialogTitle>
                    <DialogTitle variant="h4">
                        Completa los campos y aportar a nuestra gran selección
                        de recetas
                    </DialogTitle>
                    <DialogContent sx={{ width: "80%" }}>
                        <AddRecipeForm />
                    </DialogContent>
                </Box>
            </Dialog>
        </>
    );
};
