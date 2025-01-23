import { styled, Typography, Button, Box, Divider } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Form } from "@/Components";
import { useFormik } from "formik";
import { Field } from "@/types/form";
import Image from "next/image";
import { signUpSchema } from "../_utils/validation/validation";
import { signUpFields } from "../_utils/fields/fields";

const FormBox = styled(Grid)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  height: "600px",
  backgroundColor: "#ffff",
  borderRadius: "10px",
  boxShadow: "14px 11px 14px -3px rgba(0,0,0,0.62)",
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

export const SignUpForm: React.FC = () => {
  const initialValues = Object.fromEntries(
    signUpFields?.map((field: Field) => [field?.name, ""])
  );
  const formik = useFormik({
    initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      alert(values);
    },
  });
  return (
    <FormBox container spacing={2}>
      <Grid
        sx={{ display: "flex", justifyContent: "center", width: "47%" }}
        size={5}
        component={"div"}
      >
        <FrameBox>
          <Image src="/Frame.png" alt="ilustracion" width="200" height="200" />
        </FrameBox>
      </Grid>

      <Divider orientation="vertical" variant="middle" />

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
        <Typography variant="h1">Registrate</Typography>
        <Form fields={signUpFields} formik={formik}>
          <Button variant="contained" type="submit">
            <Typography sx={{ color: "#fff" }} variant="body1">
              Registrarse
            </Typography>
          </Button>
        </Form>
      </Grid>
    </FormBox>
  );
};
