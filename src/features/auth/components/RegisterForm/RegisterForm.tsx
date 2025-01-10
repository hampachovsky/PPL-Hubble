import { ErrorMessage, FormInput, SubmitButton } from "@/components";
import {
  AuthOptions,
  authPaths,
  RegisterDto,
  registerSchema,
  useEmailAuth,
} from "@/features/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router";

export const RegisterForm: React.FC = () => {
  const { emailAuth, handleEmailAuth } = useEmailAuth();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
      email: "",
      confirmPassword: "",
    },
    resolver: yupResolver(registerSchema),
    mode: "onBlur",
    reValidateMode: "onSubmit",
  });

  const onSubmit: SubmitHandler<RegisterDto> = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div>
      <h2 className="mb-4 text-center text-lg font-bold">Register</h2>
      <div className="flex flex-col gap-4">
        {emailAuth ? (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            {errors.email && <ErrorMessage message={errors.email?.message} />}
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <FormInput placeholder="Email" width="full" {...field} />
              )}
            />
            {errors.username && (
              <ErrorMessage message={errors.username?.message} />
            )}
            <Controller
              name="username"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <FormInput placeholder="Username" width="full" {...field} />
              )}
            />
            {errors.password && (
              <ErrorMessage message={errors.password?.message} />
            )}
            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <FormInput
                  placeholder="Password"
                  width="full"
                  type="password"
                  {...field}
                />
              )}
            />
            {errors.confirmPassword && (
              <ErrorMessage message={errors.confirmPassword?.message} />
            )}
            <Controller
              name="confirmPassword"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <FormInput
                  placeholder="Confirm Password"
                  width="full"
                  type="password"
                  {...field}
                />
              )}
            />
            <SubmitButton text="Submit" disabled={!isValid} />
          </form>
        ) : (
          <AuthOptions handleEmailAuth={handleEmailAuth} text="Sign up" />
        )}
        <h3 className="text-center">
          Already have an account?{" "}
          <Link to={`?modal=${authPaths.login}`} className="text-cyan-400">
            Log in
          </Link>
        </h3>
      </div>
    </div>
  );
};
