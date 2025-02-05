import { Banner } from "@/components";
import { PostDetailedWithContent, Profile } from "@/types/api";
import React from "react";
import { PostCardFooter, PostCardHeader } from "../PostCard";
import { PostContent } from "./PostContent";

interface PostProps {
  post: PostDetailedWithContent;
  userId: Profile["user_id"] | undefined;
}
export const Post: React.FC<PostProps> = ({ post, userId }) => {
  return (
    <div className="w-3/4 rounded-md border border-gray-700 bg-stone-700 shadow">
      <div className="p-4">
        <PostCardHeader
          createdAt={post.created_at}
          category={post.category}
          profile={post.profile}
          is_subscribed={post.is_subscribed}
          userId={userId}
          marginBottom="none"
        />
      </div>
      <div className="mb-2">
        <Banner imageURL={post.image_url || undefined} />
      </div>
      <div className="p-4">
        <PostContent data={post.content} />
        <div className="mt-4 border-t border-gray-500">
          <PostCardFooter
            isBookmarked={post.is_bookmarked}
            isLiked={post.is_liked}
            viewsCount={post.views_count}
            likesCount={post.likes_count}
            commentsCount={post.comments_count}
            userId={userId}
            authorId={post.author_id}
            showComments={false}
          />
        </div>
      </div>
    </div>
  );
};
