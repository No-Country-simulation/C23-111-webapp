import Grid from "@mui/material/Grid2";
import { styled, Button, Typography, Box, Divider } from "@mui/material";
import { Form } from "@/Components";
import { useFormik } from "formik";
import { logInSchema, logInfields } from "../_utils";
import Image from "next/image";

const FormBox = styled(Grid)({
  display: "flex",
  alignItems: "center",
  justifyContent: 'space-around',
  height: "600px",
  backgroundColor: "#ffff",
  borderRadius: "10px",
  boxShadow: "14px 11px 14px -3px rgba(0,0,0,0.62)",
  width: "1150px",
});

const FrameBox = styled(Box)({
  display: "flex",
  height: "300px",
  width: "300px",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#ffffff",
  borderRadius: "50%",
  border: "1px solid black",
});

export const LogInForm: React.FC = () => {
  const initialValues = Object.fromEntries(
    logInfields?.map((field) => [field?.name, ""])
  );
  const formik = useFormik({
    initialValues,
    validationSchema: logInSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <FormBox container spacing={2}>
      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          alignItems: "center",
        }}
        size={6}
        component={"div"}
      >
        <>
          <Typography
            sx={{ marginTop: "5%", textAlign: "center" }}
            variant="h1"
          >
            ¡Bienvenido!
          </Typography>
          <Typography variant="body2">Nos alegra tenerte de vuelta.</Typography>
        </>
        <Form fields={logInfields} formik={formik}>
          <Button variant="contained" type="submit">
            <Typography sx={{ color: "#fff" }} variant="body1">
              Iniciar sesión
            </Typography>
          </Button>
        </Form>
      </Grid>

      <Divider orientation="vertical" variant="middle" />

      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "47%",
        }}
        size={5}
        component={"div"}
      >
        <FrameBox>
          <Image src="/Frame1.png" alt="ilustracion" width="200" height="200" />
        </FrameBox>
      </Grid>
    </FormBox>
  );
};
