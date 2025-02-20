import { LikeButton, Spinner, UserAvatar } from "@/components";
import { paths } from "@/config";
import { useDeleteComment } from "@/features/comment";
import { CommentDetailed, Profile } from "@/types/api";
import { formatDistanceToNow } from "date-fns";
import React from "react";
import { Link } from "react-router";

interface CommentProps {
  comment: CommentDetailed;
  userId: Profile["user_id"] | undefined;
  isMaxDepth: boolean;
  handleReplyClick: (commentId: number) => void;
}

export const Comment: React.FC<CommentProps> = ({
  comment,
  userId,
  isMaxDepth,
  handleReplyClick,
}) => {
  const { mutate, isPending } = useDeleteComment(comment.post_id);
  if (isPending) return <Spinner />;
  const handleDeleteClick = () => {
    if (window.confirm("Are you sure you want to delete this comment?")) {
      mutate(comment.id);
    }
  };
  return (
    <div className="mt-2">
      <div className="flex flex-wrap justify-between">
        <div className="min-w-0">
          <Link
            className="flex items-center gap-2"
            to={paths.profile.getHref(comment.profile.user_id)}
          >
            <UserAvatar avatarURL={comment.profile.avatar_url || undefined} />
            <div className="flex min-w-0 items-center gap-2">
              <h2 className="text-md truncate hover:text-cyan-400">
                {comment.profile.username}
              </h2>
              <h4 className="whitespace-nowrap text-gray-400 sm:text-sm">
                {formatDistanceToNow(comment.created_at, { addSuffix: true })}
              </h4>
            </div>
          </Link>
        </div>
        {userId && (
          <span className="flex-shrink-0 space-x-2 text-neutral-400">
            {userId !== comment.author_id && !isMaxDepth ? (
              <button
                onClick={() => handleReplyClick(comment.id)}
                className="text-sm hover:text-cyan-400"
              >
                Reply
              </button>
            ) : (
              <button
                className="text-sm hover:text-red-400"
                onClick={handleDeleteClick}
              >
                Delete
              </button>
            )}
          </span>
        )}
      </div>
      <p className="text-md text-neutral-200">{comment.text}</p>
      <div className="mt-2">
        <LikeButton
          authorId={comment.author_id}
          isLikedProp={comment.is_liked}
          likesCount={comment.likes_count}
          resourceType="comment"
          resourceId={comment.id}
          userId={userId}
        />
      </div>
    </div>
  );
};
