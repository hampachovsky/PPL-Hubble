import { PostCard } from "@/features/post";
import React from "react";

export const Home: React.FC = () => {
  return (
    <div className="container flex flex-col items-center gap-8">
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  );
};
