import { ErrorMessage, FormInput, SubmitButton } from "@/components";
import {
  AuthOptions,
  authPaths,
  LoginDto,
  loginSchema,
  useEmailAuth,
  useLogin,
} from "@/features/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router";

export const LoginForm: React.FC = () => {
  const { emailAuth, handleEmailAuth } = useEmailAuth();
  const { login, isPending } = useLogin();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<LoginDto>({
    /*    defaultValues: {
      email: "user@example.com",
      password: "userPassword",
    }, */
    resolver: yupResolver(loginSchema),
    mode: "onBlur",
    reValidateMode: "onSubmit",
  });

  const onSubmit: SubmitHandler<LoginDto> = async (dto) => {
    login(dto, {
      onSettled: () => {
        reset();
      },
    });

    console.log("Form Data:", dto);
  };

  return (
    <div>
      <h2 className="mb-4 text-center text-lg font-bold">Login</h2>
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
              render={({ field }) => (
                <FormInput placeholder="Email" width="full" {...field} />
              )}
            />
            {errors.password && (
              <ErrorMessage message={errors.password?.message} />
            )}
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <FormInput
                  placeholder="Password"
                  type="password"
                  width="full"
                  {...field}
                />
              )}
            />
            <SubmitButton text="Submit" disabled={!isValid || isPending} />
          </form>
        ) : (
          <AuthOptions handleEmailAuth={handleEmailAuth} text="Sign in" />
        )}
        <h3 className="text-center">
          Don’t have an account?{" "}
          <Link to={`?modal=${authPaths.register}`} className="text-cyan-400">
            Sign up
          </Link>
        </h3>
      </div>
    </div>
  );
};
