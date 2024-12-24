import { Category } from "@/features/category";
import { PostCard } from "@/features/post";
import React from "react";

export const CategoryPage: React.FC = () => {
  return (
    <div className="container flex flex-col items-center gap-8">
      <Category />
      <PostCard />
    </div>
  );
};
