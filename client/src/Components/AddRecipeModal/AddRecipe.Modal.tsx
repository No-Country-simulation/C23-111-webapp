import {
    Dialog,
    DialogContent,
    DialogTitle,
    Box,
    TextField,
} from "@mui/material";
import { CommonButton, Form } from "@/components";
import { useState } from "react";
import { useRecipeFields } from "./_utils/fields";
import { useFormik } from "formik";
import { useAuth } from "@/context/authContext";
import { addRecipe } from "@/services/recipes";
import { createRecipe } from "@/types/recipes";

export const AddRecipeModal = () => {
    const [open, setOpen] = useState(false);
    const [file, setImage] = useState<string>("");
    const { user } = useAuth();
    const fields = useRecipeFields();

    const handleClick = () => {
        setOpen(!open);
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const formik = useFormik({
        initialValues: {
            name: "",
            userId: user?._id,
            description: "",
            category: [],
            ingredients: [],
            steps: [],
            file: "",
        },
        validateOnChange: false,
        validateOnBlur: false,
        onSubmit: async (values) => {
            //@ts-expect-error no error
            const dataToSend: createRecipe = { ...values, file };
            try {
                const response = await addRecipe(dataToSend);
                const data = response.data;
                console.log("AddRecipe", data);
            } catch (error) {
                console.log(error);
            }
            console.log(dataToSend);
        },
    });

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
                maxWidth="md"
                sx={{ gap: "15px" }}
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
                    <DialogContent
                        sx={{ display: "flex", justifyContent: "center" }}
                    >
                        <Form
                            sx={{ width: "70%" }}
                            formik={formik}
                            fields={fields}
                        >
                            <TextField
                                name="file"
                                type="file"
                                onChange={handleImageChange}
                                fullWidth
                                variant="outlined"
                                label="Sube una imagen"
                                sx={{ marginBottom: "16px" }}
                            />
                            <CommonButton
                                type="submit"
                                text="Enviar"
                                buttonSize="small"
                                variant="contained"
                            />
                        </Form>
                    </DialogContent>
                </Box>
            </Dialog>
        </>
    );
};
