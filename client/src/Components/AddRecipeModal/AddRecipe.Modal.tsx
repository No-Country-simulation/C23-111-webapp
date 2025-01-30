import {
  Dialog,
  DialogContent,
  DialogTitle,
  Button,
  Box,
} from "@mui/material";
import { CommonButton, Form } from "@/Components";
import { useState } from "react";
import { useRecipeFields } from "./_utils/fields";
import { useFormik } from "formik";

export const AddRecipeModal = () => {
  const [open, setOpen] = useState(false);
  const fields = useRecipeFields();
  const handleClick = () => {
    setOpen(!open);
  };

  const formik  = useFormik({
    initialValues: {
        name: '',
        description: '',
        category: [],
        ingredients: [],
        steps: [],
    },
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values) => console.log(values)
  })
  return (
    <>
      <Button onClick={handleClick}>Open dialog</Button>
      <Dialog
        open={open}
        onClose={handleClick}
        maxWidth='md'
        sx={{ gap: '15px'}}
      >
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
        <DialogTitle variant="h1">
          Sube tu propia receta!
        </DialogTitle>
        <DialogContent sx={{display: 'flex', justifyContent: 'center'}}>
            <Form sx={{width: '70%'}} formik={formik} fields={fields}>
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
