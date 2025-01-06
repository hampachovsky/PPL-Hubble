import { paths } from "@/config";
import { UserCircleIcon } from "@heroicons/react/20/solid";
import React from "react";
import { Link } from "react-router";

interface UserAvatarProps {
  avatarURL?: string;
  userId: string;
  size: number;
}

export const UserAvatar: React.FC<UserAvatarProps> = ({
  avatarURL,
  userId,
  size = 9,
}) => {
  return (
    <Link to={paths.profile.getHref(userId)}>
      {avatarURL ? (
        <img
          className={`size-${size} rounded-full`}
          src={avatarURL}
          alt="User Avatar"
        />
      ) : (
        <UserCircleIcon className={`size-${size} rounded-full`} />
      )}
    </Link>
  );
};
