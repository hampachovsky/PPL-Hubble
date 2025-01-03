import { UserAvatar } from "@/components";
import { paths } from "@/config";
import { FireIcon, PlusCircleIcon } from "@heroicons/react/20/solid";
import React from "react";
import { Link } from "react-router";
import { Tooltip } from "react-tooltip";

export const PostCardHeader: React.FC = () => {
  return (
    <div className="mb-4 flex flex-nowrap items-center justify-between">
      <div className="flex flex-wrap items-center gap-2 sm:gap-4">
        <div className="flex items-center gap-2 text-cyan-400">
          <FireIcon className="h-5 w-5 flex-shrink-0" />
          <h5 className="text-sm sm:text-base">Category 1</h5>
        </div>
        <div className="flex flex-row items-center gap-2">
          <UserAvatar userId="1" avatarURL="https://placebear.com/600/600" />
          <Link
            className="decoration-cyan-400 hover:text-cyan-400 hover:underline"
            to={`${paths.profile.getHref("1")}`}
          >
            User1
          </Link>
          <span className="text-xs text-gray-400 sm:text-sm">1 day ago</span>
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
