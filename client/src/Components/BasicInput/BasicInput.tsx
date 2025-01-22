import {
    FormControl,
    TextField,
    useMediaQuery,
    Theme,
  } from "@mui/material";
  import WarningIcon from "@mui/icons-material/Warning";
  import theme from "@/theme/theme";
  
  type BasicInputProps = {
    label: string;
    name: string;
    type: string;
    placeholder?: string;
    helperText?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    formik: any;
    multiline?: boolean | undefined;
  };
  
  export const BasicInput: React.FC<BasicInputProps> = ({
    label,
    name,
    type,
    placeholder,
    multiline,
    formik,
  }) => {
    const smUp = useMediaQuery<Theme>(() => theme.breakpoints.up("sm"));
    const touchedAndError = formik.touched[name] && formik.errors[name];
    return (
      <FormControl sx={{ minWidth: "60%" }}>
        <TextField
          label={label}
          error={!!touchedAndError}
          variant="outlined"
          name={name}
          type={type}
          multiline={multiline && smUp ? true : false}
          rows={multiline && smUp ? 6 : 1}
          placeholder={placeholder}
          fullWidth
          helperText={
            touchedAndError ? (
              <>
                <WarningIcon
                  sx={{
                    verticalAlign: "middle",
                    marginRight: "5px",
                    fontSize: "15px",
                  }}
                />
                <span style={{ verticalAlign: "middle" }}>
                  {formik.errors[name]}
                </span>
              </>
            ) : null
          }
          
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values[name]}
        />
      </FormControl>
    );
  };
  