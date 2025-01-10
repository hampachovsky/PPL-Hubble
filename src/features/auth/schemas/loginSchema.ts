import * as yup from "yup";

export const loginSchema = yup
  .object({
    email: yup
      .string()
      .required("Email is required")
      .email("Invalid email address"),
    password: yup.string().required("Password is required"),
  })
  .required();
