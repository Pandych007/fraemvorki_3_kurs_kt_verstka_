import * as yup from "yup";

export const validationSchema = yup.object({
  name: yup.string().required("Введите имя").min(2, "Минимум 2 слова"),
  //   numberCared: yup
  //     .string()
  //     .required("Ведите номер карты ")
  //     .matches(/^[0-9]{16}$/, "Длина 16 символов и в конце любой спец. символ"),
  //   mounth: yup
  //     .string()
  //     .oneOf([yup.ref("password"), null], "Пароли не совпадают")
  //     .required("Повторите пароль"),
  //   year: yup.date().max(new Date(), "Дата должна быть ранее текущей"),
  //   cvc: yup.string().required("Введите cvc ").min(3, "Минимум 2 слова"),
});
