import React from "react";
import { PostCardContent } from "./PostCardContent";
import { PostCardFooter } from "./PostCardFooter";
import { PostCardHeader } from "./PostCardHeader";

export const PostCard: React.FC = () => {
  return (
    <div className="w-3/4 rounded-lg border border-gray-600 bg-stone-700 shadow">
      <div className="p-4">
        <PostCardHeader />
        <PostCardContent />
        <PostCardFooter />
      </div>
    </div>
  );
};
