import { NotFoundData, Spinner } from "@/components";
import { Comment, useCommentsByPost } from "@/features/comment";
import { CommentDetailed, Profile } from "@/types/api";
import React from "react";

interface CommentsListProps {
  userId: Profile["user_id"] | undefined;
  postId: string | undefined;
}

export const CommentsList: React.FC<CommentsListProps> = ({
  userId,
  postId,
}) => {
  const { comments, isPending } = useCommentsByPost({
    input_post_id: postId ? +postId : null,
    input_user_id: userId ?? null,
  });

  if (isPending) return <Spinner />;
  if (!comments || comments.length === 0) return <NotFoundData />;

  const renderComments = (
    comments: CommentDetailed[],
    parentId: number | null
  ) => {
    return comments
      .filter((comment) => comment.parent_id === parentId)
      .map((comment) => (
        <div
          key={comment.id}
          className={parentId ? "ml-6 border-l-2 border-stone-600 pl-4" : ""}
        >
          <Comment userId={userId} comment={comment} />
          {renderComments(comments, comment.id)}{" "}
        </div>
      ));
  };

  return (
    <div className="min-h-32 w-3/4 rounded-md border border-gray-700 bg-stone-700 p-4 shadow">
      {isPending ? (
        <Spinner />
      ) : !comments ? (
        <NotFoundData />
      ) : (
        <div>
          <h1 className="text-xl font-bold">{comments.length} Comments</h1>
          {renderComments(comments, null)}
        </div>
      )}
    </div>
  );
};
