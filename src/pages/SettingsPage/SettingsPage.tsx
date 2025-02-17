import { Spinner } from "@/components";
import { paths } from "@/config";
import { useUser } from "@/features/auth";
import { useCurrentUserProfile } from "@/features/profile";
import { Settings } from "@/features/settings";
import React from "react";
import { Navigate } from "react-router";

export const SettingsPage: React.FC = () => {
  const { user } = useUser();

  const { profile, isPending } = useCurrentUserProfile(user?.id ?? "");

  if (isPending) {
    return <Spinner />;
  }
  if (!profile) return <Navigate to={paths.notFound.path} />;

  return (
    <div className="container flex flex-col items-center px-4">
      <Settings profile={profile} />
    </div>
  );
};
