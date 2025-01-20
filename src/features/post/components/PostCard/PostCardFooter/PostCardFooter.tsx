import { Profile } from "@/types/api";
import {
  BookmarkIcon,
  BookmarkSlashIcon,
  EyeIcon,
  HeartIcon,
} from "@heroicons/react/20/solid";
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline";
import React from "react";

interface PostCardFooterProps {
  viewsCount: number;
  likesCount: number;
  commentsCount: number;
  isBookmarked: boolean;
  isLiked: boolean;
  userId: Profile["user_id"] | undefined;
  authorId: Profile["user_id"];
}

export const PostCardFooter: React.FC<PostCardFooterProps> = ({
  viewsCount,
  likesCount,
  isBookmarked,
  isLiked,
  commentsCount,
  userId,
  authorId,
}) => {
  return (
    <div className="mt-4 flex justify-between text-gray-400">
      <div className="flex items-center gap-2">
        <span className="flex items-center gap-1">
          {userId !== authorId ? (
            isLiked ? (
              <HeartIcon className="h-5 w-5 text-red-500 hover:cursor-pointer hover:text-gray-400" />
            ) : (
              <HeartIcon className="h-5 w-5 text-gray-400 hover:cursor-pointer hover:text-red-500" />
            )
          ) : (
            <HeartIcon className="h-5 w-5 text-gray-400 hover:cursor-pointer" />
          )}

          {likesCount}
        </span>
        <span className="flex items-center gap-1">
          <ChatBubbleOvalLeftEllipsisIcon className="h-5 w-5 hover:cursor-pointer hover:text-cyan-400" />{" "}
          {commentsCount}
        </span>
        {userId !== authorId && (
          <span className="hover:cursor-pointer hover:text-cyan-400">
            {isBookmarked ? (
              <BookmarkSlashIcon className="h-5 w-5" />
            ) : (
              <BookmarkIcon className="h-5 w-5" />
            )}
          </span>
        )}
      </div>
      <span className="flex items-center gap-1">
        <EyeIcon className="h-5 w-5" /> {viewsCount}
      </span>
    </div>
  );
};
