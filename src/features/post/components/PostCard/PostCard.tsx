import { PostCardType } from "@/types/api";
import clsx from "clsx";
import React from "react";
import { PostCardContent } from "./PostCardContent";
import { PostCardFooter } from "./PostCardFooter";
import { PostCardHeader } from "./PostCardHeader";

interface PostCardProps {
  fullWidth?: boolean;
  post: PostCardType;
}

export const PostCard: React.FC<PostCardProps> = ({
  fullWidth = false,
  post,
}) => {
  return (
    <div
      className={clsx(
        "rounded-md border border-gray-700 bg-stone-700 shadow",
        fullWidth ? "w-full" : "w-3/4"
      )}
    >
      <div className="p-4">
        <PostCardHeader
          createdAt={post.created_at}
          category={post.category}
          profile={post.profile}
        />
        <PostCardContent image_url={post.image_url} title={post.title} />
        <PostCardFooter />
      </div>
    </div>
  );
};
