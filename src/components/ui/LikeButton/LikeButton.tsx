import { useToggleLike } from "@/api";
import { Profile, ResourceType } from "@/types/api";
import { HeartIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import React from "react";
import { useParams } from "react-router";

interface LikeButtonProps {
  userId: Profile["user_id"] | undefined;
  authorId: Profile["user_id"];
  isLikedProp: boolean;
  likesCount: number;
  resourceId: number;
  resourceType: ResourceType;
}

export const LikeButton: React.FC<LikeButtonProps> = ({
  userId,
  authorId,
  isLikedProp,
  likesCount,
  resourceId,
  resourceType,
}) => {
  const { id: postId } = useParams();
  const isLiked = isLikedProp;
  const { mutate: toggleLike, isLikePending } = useToggleLike(
    resourceType,
    postId
  );
  const handleLike = () => {
    if (userId && !isLikePending) {
      toggleLike({
        user_id: userId,
        resource_id: resourceId,
        resource_type: resourceType,
        isLiked,
      });
    }
  };
  return (
    <span className="flex items-center gap-1">
      {userId !== authorId ? (
        <HeartIcon
          onClick={handleLike}
          className={clsx(
            "h-5 w-5",
            isLiked
              ? "text-red-500 hover:cursor-pointer hover:text-gray-400"
              : "text-gray-400 hover:cursor-pointer hover:text-red-500"
          )}
        />
      ) : (
        <HeartIcon className="h-5 w-5 text-gray-400" />
      )}

      {likesCount}
    </span>
  );
};
