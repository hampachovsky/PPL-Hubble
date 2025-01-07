import { UserCircleIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import React from "react";

interface UserAvatarProps {
  avatarURL?: string;
  userId?: string;
  size?: "sm" | "lg";
}

export const UserAvatar: React.FC<UserAvatarProps> = ({
  avatarURL,
  size = "sm",
}) => {
  const sizeClass = size === "sm" ? "size-9" : "size-16";
  return (
    <>
      {avatarURL ? (
        <img
          className={clsx(`rounded-full`, sizeClass)}
          src={avatarURL}
          alt="User Avatar"
        />
      ) : (
        <UserCircleIcon className={clsx(`rounded-full`, sizeClass)} />
      )}
    </>
  );
};
