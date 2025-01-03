import { paths } from "@/config";
import { UserCircleIcon } from "@heroicons/react/20/solid";
import React from "react";
import { Link } from "react-router";
// https://ui-avatars.com/api/?name=User+Testovic&background=267cc7&color=fff
interface UserAvatarProps {
  avatarURL?: string;
  userId: string;
}

export const UserAvatar: React.FC<UserAvatarProps> = ({
  avatarURL,
  userId,
}) => {
  return (
    <Link to={paths.profile.getHref(userId)}>
      {avatarURL ? (
        <img
          className="h-9 w-9 rounded-full"
          src={avatarURL}
          alt="User Avatar"
        />
      ) : (
        <UserCircleIcon className="h-9 w-9 rounded-full" />
      )}
    </Link>
  );
};
