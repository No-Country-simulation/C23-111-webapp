import {
  Dialog,
  DialogContent,
  DialogTitle,
  Button,
  Box,
  TextField,
} from "@mui/material";
import { CommonButton, Form } from "@/Components";
import { useState } from "react";
import { useRecipeFields } from "./_utils/fields";
import { useFormik } from "formik";

export const AddRecipeModal = () => {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState<string | null>(null); // Estado para la imagen
  const fields = useRecipeFields();

  const handleClick = () => {
    setOpen(!open);
  };

  // Función para manejar el cambio de la imagen
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string); // Establecer la imagen como base64
      };
      reader.readAsDataURL(file);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      category: [],
      ingredients: [],
      steps: [],
      image: '' // Campo para la imagen
    },
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values) => {
      // Incluir la imagen en los datos antes de enviarlos
      const dataToSend = { ...values, image };
      console.log(dataToSend); // Aquí puedes hacer la petición a la API
    }
  });

  return (
    <>
      <Button onClick={handleClick}>Open dialog</Button>
      <Dialog
        open={open}
        onClose={handleClick}
        maxWidth='md'
        sx={{ gap: '15px' }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
          <DialogTitle variant="h1">
            Sube tu propia receta!
          </DialogTitle>
          <DialogContent sx={{ display: 'flex', justifyContent: 'center' }}>
            <Form sx={{ width: '70%' }} formik={formik} fields={fields}>
              <TextField
                type="file"
                onChange={handleImageChange}
                fullWidth
                variant="outlined"
                label="Sube una imagen"
                sx={{ marginBottom: '16px' }}
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
