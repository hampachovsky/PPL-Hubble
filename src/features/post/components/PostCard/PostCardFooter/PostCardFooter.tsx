import { LikeButton } from "@/components";
import { paths } from "@/config";
import { useToggleBookmarked } from "@/features/post";
import { Profile } from "@/types/api";
import {
  BookmarkIcon,
  BookmarkSlashIcon,
  EyeIcon,
} from "@heroicons/react/20/solid";
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useNavigate } from "react-router";

interface PostCardFooterProps {
  viewsCount: number;
  likesCount: number;
  commentsCount: number;
  isBookmarked: boolean;
  isLiked: boolean;
  postId: number;
  userId: Profile["user_id"] | undefined;
  authorId: Profile["user_id"];
  showComments?: boolean;
}

export const PostCardFooter: React.FC<PostCardFooterProps> = ({
  viewsCount,
  likesCount,
  isBookmarked,
  isLiked,
  commentsCount,
  userId,
  authorId,
  postId,
  showComments = true,
}) => {
  const navigate = useNavigate();
  const { mutate: toggleBookmarked, isBookmarkPending } = useToggleBookmarked();
  const onCommentClick = () => {
    navigate(`${paths.post.getHref(postId)}#post-comments-bock`);
  };

  const handleBookmarkClick = () => {
    if (isBookmarkPending) return;
    if (userId) {
      toggleBookmarked({ isBookmarked, post_id: postId, user_id: userId });
    }
  };

  return (
    <div className="mt-4 flex justify-between text-gray-400">
      <div className="flex items-center gap-2">
        <LikeButton
          authorId={authorId}
          isLikedProp={isLiked}
          likesCount={likesCount}
          resourceType="post"
          resourceId={postId}
          userId={userId}
        />
        {showComments && (
          <span className="flex items-center gap-1">
            <ChatBubbleOvalLeftEllipsisIcon
              onClick={onCommentClick}
              className="h-5 w-5 hover:cursor-pointer hover:text-cyan-400"
            />
            {commentsCount}
          </span>
        )}

        {userId !== authorId && (
          <span className="hover:cursor-pointer hover:text-cyan-400">
            {isBookmarked ? (
              <BookmarkSlashIcon
                onClick={handleBookmarkClick}
                className="h-5 w-5"
              />
            ) : (
              <BookmarkIcon onClick={handleBookmarkClick} className="h-5 w-5" />
            )}
          </span>
        )}
      </div>
      <span className="flex items-center gap-1">
        <EyeIcon className="h-5 w-5" /> {viewsCount}
      </span>
    </div>
  );
};
