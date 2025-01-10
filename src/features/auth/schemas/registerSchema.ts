import * as yup from "yup";

export const registerSchema = yup
  .object()
  .shape({
    username: yup
      .string()
      .min(4, "Username must be more than 3 characters")
      .max(128, "Username must be less than 129 characters")
      .required("Please enter a username"),
    password: yup
      .string()
      .min(5, "Password must be more than 4 characters")
      .max(64, "Password must be less than 65 characters")
      .required("Please enter a password"),
    email: yup
      .string()
      .required("Please enter an email address")
      .email("Please enter a valid email address"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match")
      .required("Please confirm your password"),
  })
  .required();
