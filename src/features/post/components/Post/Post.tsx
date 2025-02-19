import { Banner } from "@/components";
import { useViewPost } from "@/features/post";
import { useIsInViewport } from "@/hooks/useIsInViewport";
import { PostDetailedWithContent, Profile } from "@/types/api";
import React, { useEffect, useRef, useState } from "react";
import { PostCardFooter, PostCardHeader } from "../PostCard";
import { PostContent } from "./PostContent";

interface PostProps {
  post: PostDetailedWithContent;
  userId: Profile["user_id"] | undefined;
}
export const Post: React.FC<PostProps> = ({ post, userId }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const isVisible = useIsInViewport(divRef);
  const [hasSentView, setHasSentView] = useState(false);
  const { view, isViewed, isViewing } = useViewPost();

  useEffect(() => {
    if (isVisible && !hasSentView && userId && !post.is_viewed) {
      view({ post_id: post.id, user_id: userId });
      setHasSentView(true);
    }

    if (isViewed || post.is_viewed) {
      setHasSentView(true);
    }
  }, [hasSentView, isViewed, isVisible, post.id, post.is_viewed, userId, view]);

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
      <div ref={divRef} className="p-4">
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
