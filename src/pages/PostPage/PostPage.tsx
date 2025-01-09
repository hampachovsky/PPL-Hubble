import { Post } from "@/features/post";
import React from "react";

export const PostPage: React.FC = () => {
  return (
    <div className="container flex flex-col items-center gap-8 px-4">
      <Post />
    </div>
  );
};
