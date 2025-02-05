import { Profile, ResourceType } from "@/types/api";
import { HeartIcon } from "@heroicons/react/20/solid";
import React from "react";

interface LikeButtonProps {
  userId: Profile["user_id"] | undefined;
  authorId: Profile["user_id"];
  isLiked: boolean;
  likesCount: number;
  resourceType: ResourceType;
}

export const LikeButton: React.FC<LikeButtonProps> = ({
  userId,
  authorId,
  isLiked,
  likesCount,
  resourceType,
}) => {
  return (
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
  );
};
