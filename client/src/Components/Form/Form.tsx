import React, { ReactNode } from "react";
// import { Fields } from "./_utils/types";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { BasicInput } from "@/components";

type Option = {
  value: string;
  label: string;
};

export type Fields = {
  name: string;
  type: string;
  label: string;
  placeholder?: string;
  multiline?: boolean;
  options?: Option[];
  columns?: number;
  isMultipleSelect?: boolean;
};

type FormProps = {
  formik: unknown;
  fields: Fields[];
  children: ReactNode;
  sx?: object;
};

export const Form: React.FC<FormProps> = ({ formik, fields, children, sx }) => {
  return (
    <form
      style={
        sx ? Object.assign({ minHeight: "100%" }, sx) : { minHeight: "100%" }
      }
    >
      <Grid sx={{ placeContent: "center" }} container spacing={2}>
        {fields.map((field: Fields) => (
          <Grid
            sx={{ minWidth: "100%", display: "flex", justifyContent: "center" }}
            component={"div"}
            size={field.columns}
            key={field.name}
          >
            <BasicInput
              name={field.name}
              label={field.label}
              type={field.type}
              multiline={field.multiline}
              placeholder={field.placeholder}
              formik={formik}
            />
          </Grid>
        ))}
        {children && (
          <Grid
            sx={{ display: "flex", justifyContent: "flex-end" }}
            component={Box}
            size={12}
          >
            {children}
          </Grid>
        )}
      </Grid>
    </form>
  );
};
