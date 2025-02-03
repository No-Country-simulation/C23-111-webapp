import * as Yup from "yup";

export const AddRecipeSchema = Yup.object().shape({
  name: Yup.string()
    .min(10, "Ingresa al menos 10 caracteres")
    .max(50, "Demasiado largo")
    .required("Este campo es obligatorio"),
  category: Yup.array().of(Yup.string()).required("Este campo es obligatorio"),
  ingredients: Yup.array()
    .of(
      Yup.string()
        .min(1, "Debe tener al menos 1 caracter")
        .max(15, "has alcanzado el limite de caracteres")
    )
    .min(1, "Elige al menos un ingrediente")
    .max(50, "Has excedido el limite")
    .required('Este campo es obligatorio'),
    steps: Yup.array()
    .of(Yup.string().min(5, 'Al menos 5 caracteres'). max(250, 'Has excedido el limite de caracteres'))
    .min(1, 'Al menos un paso')
    .max(30, 'Has excedido el limite')
    .required('Este campo es obligatorio'),
    file: Yup.mixed()
    .required('Este campo es obligatorio')
});
