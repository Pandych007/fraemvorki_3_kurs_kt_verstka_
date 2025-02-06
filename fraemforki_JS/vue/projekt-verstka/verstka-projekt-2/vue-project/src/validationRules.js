import * as yup from "yup";

export const validationSchema = yup.object({
  name: yup
    .string()
    .required("Введите имя владельца карты")
    .min(2, "Имя должно содержать минимум 2 символа"),

  numberCared: yup
    .string()
    .required("Введите номер карты")
    .matches(/^[0-9]{16}$/, "Номер карты должен состоять из 16 цифр"),

  mounth: yup
    .string()
    .required("Введите месяц")
    .matches(/^(0[1-9]|1[0-2])$/, "Месяц должен быть в формате MM (01-12)"),

  year: yup
    .string()
    .required("Введите год")
    .matches(/^[0-9]{4}$/, "Год должен состоять из 4 цифр (например, 2023)")
    .test("year", "Год не может быть в будущем", (value) => {
      const currentYear = new Date().getFullYear();
      return parseInt(value) <= currentYear;
    }),

  cvc: yup
    .string()
    .required("Введите CVC")
    .matches(/^[0-9]{3}$/, "CVC должен состоять из 3 цифр"),
});
