import { NamedIcon, UserAvatar } from "@/components";
import { paths } from "@/config";
import { PostCardType } from "@/types/api";
import { PlusCircleIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { formatDistanceToNow } from "date-fns";
import React from "react";
import { Link } from "react-router";
import { Tooltip } from "react-tooltip";

interface PostCardHeaderProps {
  marginBottom?: "none" | "default";
  category: PostCardType["category"];
  profile: PostCardType["profile"];
  createdAt: Date;
}

export const PostCardHeader: React.FC<PostCardHeaderProps> = ({
  marginBottom = "default",
  category,
  profile,
  createdAt,
}) => {
  return (
    <div
      className={clsx(
        "flex flex-nowrap items-center justify-between",
        marginBottom === "default" ? "mb-4" : ""
      )}
    >
      <div className="flex flex-wrap items-center gap-2 sm:gap-4">
        <div className="flex items-center gap-2 text-cyan-400">
          <NamedIcon
            iconName={category.icon_name}
            className="h-5 w-5 flex-shrink-0"
          />
          <h5 className="text-sm sm:text-base">{category.name}</h5>
        </div>
        <div className="flex flex-row items-center gap-2">
          <Link
            className="flex items-center space-x-2"
            to={`${paths.profile.getHref(profile.user_id)}`}
          >
            <UserAvatar avatarURL={profile.avatar_url || undefined} />
            <span className="decoration-cyan-400 hover:text-cyan-400 hover:underline">
              {profile.username}
            </span>
          </Link>
          <span className="text-xs text-gray-400 sm:text-sm">
            {formatDistanceToNow(createdAt, { addSuffix: true })}
          </span>
        </div>
      </div>
      <div className="ml-auto flex-shrink-0">
        <button
          data-tooltip-id="subscribe-status"
          data-tooltip-content="Subscribe"
          className="text-cyan-400"
        >
          <PlusCircleIcon className="h-6 w-6" />
        </button>
        <Tooltip place="right" id="subscribe-status" />
      </div>
    </div>
  );
};
