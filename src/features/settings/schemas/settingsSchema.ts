import { constants } from "@/config";
import * as yup from "yup";

export const settingsSchema = yup
  .object()
  .shape({
    avatar: yup
      .mixed()
      .nullable()
      .optional()
      .test("fileSize", "File size is too large", (value) => {
        return (
          !value || (value instanceof File && value.size <= 5 * 1024 * 1024)
        );
      })
      .test("fileType", "Unsupported file type", (value) => {
        return (
          !value ||
          (value instanceof File && ["image/jpeg"].includes(value.type))
        );
      }),
    banner: yup
      .mixed()
      .nullable()
      .optional()
      .test("fileSize", "File size is too large", (value) => {
        return (
          !value ||
          (value instanceof File && value.size <= constants.MAX_IMAGE_SIZE)
        );
      })
      .test("fileType", "Unsupported file type", (value) => {
        return (
          !value ||
          (value instanceof File && ["image/jpeg"].includes(value.type))
        );
      }),
    username: yup
      .string()
      .transform((value) => (value === "" ? undefined : value))
      .min(4, "Username must be at least 4 characters long")
      .max(128, "Username must be less than 128 characters")
      .optional(),
    status: yup
      .string()
      .transform((value) => (value === "" ? undefined : value))
      .max(255, "Status must be less than 255 characters")
      .optional(),
    password: yup
      .string()
      .transform((value) => (value === "" ? undefined : value))
      .min(5, "Password must be at least 5 characters long")
      .max(64, "Password must be less than 64 characters")
      .optional(),
    confirmPassword: yup
      .string()
      .transform((value) => (value === "" ? undefined : value))
      .oneOf([yup.ref("password")], "Passwords must match")
      .test("passwords-match", "Passwords must match", function (value) {
        const { password } = this.parent;
        return password ? password === value : true;
      })
      .optional(),
  })
  .test(
    "at-least-one-field",
    "At least one field must be provided",
    (values) => {
      const hasValue = Object.values(values).some(
        (value) => value !== undefined && value !== null && value !== ""
      );
      return hasValue;
    }
  );

export type UpdateProfileRequest = yup.InferType<typeof settingsSchema>;
