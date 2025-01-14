import { LabeledInput, SubmitButton } from "@/components";
import { useLogout } from "@/features/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { settingsSchema } from "../schemas";

export const Settings: React.FC = () => {
  const { logout, isPending } = useLogout();
  const methods = useForm({
    defaultValues: {
      username: "",
      status: "",
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver(settingsSchema),
    mode: "onBlur",
    reValidateMode: "onSubmit",
  });

  const onSubmit = (data: unknown) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="w-full rounded-md border border-gray-700 bg-stone-700 px-4 py-2 shadow md:w-3/4 lg:w-3/4">
      <h1 className="text-2xl font-bold">Profile</h1>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="">
          <div className="mt-2 flex flex-col space-y-4 border-y border-neutral-600 py-2">
            <LabeledInput
              label="Avatar"
              type="text"
              name="avatar"
              placeholder="Avatar URL"
              isAvatar={true}
            />
            <LabeledInput
              label="Profile Banner"
              type="text"
              name="banner"
              placeholder="Profile banner URL"
              imageUrl="https://images.pexels.com/photos/259620/pexels-photo-259620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
          </div>
          <div className="flex flex-col space-y-4 border-y border-neutral-600 py-2">
            <LabeledInput
              placeholder="Username"
              label="Username"
              type="text"
              name="username"
            />
            <LabeledInput
              label="Status"
              type="text"
              placeholder="Your status"
              isTextarea
              name="status"
            />
            <LabeledInput
              label="Password"
              type="password"
              placeholder="Password"
              name="password"
            />
            <LabeledInput
              label="Confirm Password"
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
            />
          </div>
          <div className="mt-2 flex justify-between">
            <div className="">
              <button
                onClick={() => {
                  methods.reset();
                  logout();
                }}
                className="mr-2 rounded-md bg-red-800 px-4 py-2 text-white hover:bg-red-400"
              >
                Logout
              </button>
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => methods.reset()}
                className="mr-2 rounded-md bg-gray-700 px-4 py-2 text-white hover:bg-gray-600"
              >
                Cancel
              </button>
              <SubmitButton
                disabled={
                  !methods.formState.isDirty ||
                  !methods.formState.isValid ||
                  isPending
                }
                text="Save"
                width="unset"
              />
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};
