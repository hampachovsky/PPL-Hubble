import { PostCard } from "@/features/post";
import React from "react";

export const HomePage: React.FC = () => {
  return (
    <div className="container flex flex-col items-center gap-8 px-4">
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  );
};
