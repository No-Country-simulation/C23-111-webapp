import * as Yup from "yup";

export const AddRecipeSchema = Yup.object().shape({
  name: Yup.string()
    .min(10, "Ingresa al menos 10 caracteres")
    .max(50, "Has excedido el límite de caracteres")
    .required("Este campo es obligatorio"),

  description: Yup.string()
  .min(10, 'Ingresa al menos 10 caracteres')
  .max(100, "Has excedido el límite de caracteres")
  .required('Este campo es obligatorio')
,
  category: Yup.array()
    .of(Yup.string())
    .min(1, "Elige al menos una categoría")
    .required("Este campo es obligatorio"),

  ingredients: Yup.string()
  .min(1, 'Debe tener al menos 1 caracter')
  .max(15, 'Has alcanzado el limite de caracteres')
  .required('Este campo es obligatorio')
,
  steps:
      Yup.string()
        .min(5, "Cada paso debe tener al menos 5 caracteres")
        .max(250, "Has excedido el límite de caracteres por paso")
    .required("Este campo es obligatorio"),

  file: Yup.mixed()
    .required("Este campo es obligatorio")
});


