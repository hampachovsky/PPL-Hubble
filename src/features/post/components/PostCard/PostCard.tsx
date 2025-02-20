import { PostDetailed, Profile } from "@/types/api";
import clsx from "clsx";
import React from "react";
import { PostCardContent } from "./PostCardContent";
import { PostCardFooter } from "./PostCardFooter";
import { PostCardHeader } from "./PostCardHeader";

interface PostCardProps {
  fullWidth?: boolean;
  post: PostDetailed;
  userId: Profile["user_id"] | undefined;
}

export const PostCard: React.FC<PostCardProps> = ({
  fullWidth = false,
  post,
  userId,
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
          is_subscribed={post.is_subscribed}
          userId={userId}
        />
        <PostCardContent
          id={post.id}
          image_url={post.image_url}
          title={post.title}
        />
        <PostCardFooter
          isBookmarked={post.is_bookmarked}
          isLiked={post.is_liked}
          viewsCount={post.views_count}
          likesCount={post.likes_count}
          commentsCount={post.comments_count}
          userId={userId}
          postId={post.id}
          authorId={post.author_id}
        />
      </div>
    </div>
  );
};
