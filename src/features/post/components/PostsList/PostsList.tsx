import { PostCard } from "@/features/post";
import React from "react";

interface PostsListProps {
  category: string;
}

export const PostsList: React.FC<PostsListProps> = ({ category }) => {
  return (
    <>
      <h1 className="text-center text-2xl">Posts {category}</h1>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </>
  );
};
