import { Spinner } from "@/components";
import { useUser } from "@/features/auth";
import { PostCard, usePostsBy } from "@/features/post";
import React from "react";

interface UserFeedPageProps {
  filterCriteria: string;
}

export const UserFeedPage: React.FC<UserFeedPageProps> = ({
  filterCriteria,
}) => {
  const { user } = useUser();
  const { posts, isPending } = usePostsBy({
    input_category_id: null,
    input_user_id: user?.id || null,
    input_type: filterCriteria === "bookmarked" ? "bookmarks" : "all",
    profile_user_id: null,
  });

  if (isPending || !posts) return <Spinner />;

  console.log(posts);
  return (
    <>
      <h1 className="text-center text-2xl">Posts {filterCriteria}</h1>
      {!posts || !posts.length ? (
        <>
          <h1 className="mt-12 border-b border-gray-600 pb-2 text-center text-3xl font-semibold text-red-100">
            No posts found
          </h1>
        </>
      ) : (
        posts?.map((post) => (
          <PostCard userId={user?.id} key={post.id} post={post} />
        ))
      )}
    </>
  );
};
