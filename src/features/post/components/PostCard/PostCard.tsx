import clsx from "clsx";
import React from "react";
import { PostCardContent } from "./PostCardContent";
import { PostCardFooter } from "./PostCardFooter";
import { PostCardHeader } from "./PostCardHeader";

type PostCardProps = {
  fullWidth?: boolean;
};

export const PostCard: React.FC<PostCardProps> = ({ fullWidth = false }) => {
  return (
    <div
      className={clsx(
        "rounded-md border border-gray-700 bg-stone-700 shadow",
        fullWidth ? "w-full" : "sm:3/4 md:w-2/4"
      )}
    >
      <div className="p-4">
        <PostCardHeader />
        <PostCardContent />
        <PostCardFooter />
      </div>
    </div>
  );
};
