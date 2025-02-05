import { LikeButton, UserAvatar } from "@/components";
import { paths } from "@/config";
import { CommentDetailed, Profile } from "@/types/api";
import { formatDistanceToNow } from "date-fns";
import React from "react";
import { Link } from "react-router";

interface CommentProps {
  comment: CommentDetailed;
  userId: Profile["user_id"] | undefined;
}

export const Comment: React.FC<CommentProps> = ({ comment, userId }) => {
  return (
    <div className="mt-2">
      <div>
        <Link
          className="flex items-center space-x-2"
          to={paths.profile.getHref(comment.profile.user_id)}
        >
          <UserAvatar avatarURL={comment.profile.avatar_url || undefined} />
          <h2 className="text-md hover:text-cyan-400">
            {comment.profile.username}
          </h2>
          <h4 className="text-gray-400 sm:text-sm">
            {formatDistanceToNow(comment.created_at, { addSuffix: true })}
          </h4>
        </Link>
      </div>
      <p className="text-md text-neutral-200">{comment.text}</p>

      <div className="mt-2 flex justify-between">
        <LikeButton
          authorId={comment.author_id}
          isLiked={comment.is_liked}
          likesCount={comment.likes_count}
          resourceType="comment"
          userId={userId}
        />
        <span className="space-x-2 text-neutral-400">
          <button className="text-sm hover:text-cyan-400">Reply</button>
          <button className="text-sm hover:text-cyan-400">Edit</button>
          <button className="text-sm hover:text-red-400">Delete</button>
        </span>
      </div>
    </div>
  );
};
