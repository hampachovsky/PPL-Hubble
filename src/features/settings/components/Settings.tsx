import { LabeledInput, Spinner, SubmitButton } from "@/components";
import { paths } from "@/config";
import { useLogout } from "@/features/auth";
import { useUpdateProfile } from "@/features/profile";
import { Profile } from "@/types/api";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { Navigate } from "react-router";
import { settingsSchema } from "../schemas";
import { UpdateProfileRequest } from "../schemas/settingsSchema";

interface SettingsProps {
  profile: Profile;
}

export const Settings: React.FC<SettingsProps> = ({ profile }) => {
  const { logout, isPending } = useLogout();
  const methods = useForm({
    defaultValues: {
      username: profile.username,
      status: profile.status ?? "",
      password: "",
      confirmPassword: "",
      avatar: profile.avatar_url,
    },
    resolver: yupResolver(settingsSchema),
    mode: "onBlur",
    reValidateMode: "onSubmit",
  });

  const { update, isUpdating, isUpdated } = useUpdateProfile(profile.user_id);

  const onSubmit: SubmitHandler<UpdateProfileRequest> = (data) => {
    update({
      userId: profile.user_id,
      oldBackgroundURL: profile.background_url,
      oldAvatarURL: profile.avatar_url,
      ...data,
    });
  };

  if (isUpdating) {
    return <Spinner />;
  }

  if (isUpdated)
    return <Navigate to={paths.profile.getHref(profile.user_id)} />;

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
              avatarUrl={profile.avatar_url}
              isAvatar={true}
            />
            <LabeledInput
              label="Profile Banner"
              type="text"
              name="banner"
              placeholder="Profile banner URL"
              isBanner
              imageUrl={profile.background_url}
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
                type="button"
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
                type="reset"
                onClick={() => methods.reset()}
                className="mr-2 rounded-md bg-gray-700 px-4 py-2 text-white hover:bg-gray-600"
              >
                Cancel
              </button>
              <SubmitButton
                disabled={
                  !methods.formState.isDirty ||
                  !methods.formState.isValid ||
                  isPending ||
                  isUpdating
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
