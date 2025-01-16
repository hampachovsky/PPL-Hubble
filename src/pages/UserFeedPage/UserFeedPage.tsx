import { PostCard } from "@/features/post";
import React from "react";

interface UserFeedPageProps {
  filterCriteria: string;
}

export const UserFeedPage: React.FC<UserFeedPageProps> = ({
  filterCriteria,
}) => {
  return (
    <>
      <h1 className="text-center text-2xl">Posts {filterCriteria}</h1>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </>
  );
};
