import {
  BookmarkSlashIcon,
  EyeIcon,
  HeartIcon,
} from "@heroicons/react/20/solid";
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline";
import React from "react";

export const PostCardFooter: React.FC = () => {
  return (
    <div className="mt-4 flex justify-between text-gray-400">
      <div className="flex items-center gap-2">
        <span className="flex items-center gap-1">
          <HeartIcon className="h-5 w-5 text-red-500 hover:cursor-pointer hover:text-gray-400" />{" "}
          200
        </span>
        <span className="flex items-center gap-1">
          <ChatBubbleOvalLeftEllipsisIcon className="h-5 w-5 hover:cursor-pointer hover:text-cyan-400" />{" "}
          55
        </span>
        <span className="hover:cursor-pointer hover:text-cyan-400">
          {/* <BookmarkIcon className="h-5 w-5" /> */}
          <BookmarkSlashIcon className="h-5 w-5" />
        </span>
      </div>
      <span className="flex items-center gap-1">
        <EyeIcon className="h-5 w-5" /> 300
      </span>
    </div>
  );
};
