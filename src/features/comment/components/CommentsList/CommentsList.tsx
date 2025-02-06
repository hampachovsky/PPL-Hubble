import { NotFoundData, Spinner } from "@/components";
import { constants } from "@/config";
import { Comment, CommentInput, useCommentsByPost } from "@/features/comment";
import { CommentDetailed, Profile } from "@/types/api";
import React, { useCallback, useState } from "react";

interface CommentsListProps {
  userId: Profile["user_id"] | undefined;
  postId: string | undefined;
}

export const CommentsList: React.FC<CommentsListProps> = ({
  userId,
  postId,
}) => {
  const [replyId, setReplyId] = useState<number | null>(null);
  const { comments, isPending } = useCommentsByPost({
    input_post_id: postId ? +postId : null,
    input_user_id: userId ?? null,
  });

  const handleReplyClick = useCallback((commentId: number) => {
    setReplyId(commentId);
  }, []);

  const handleClearReplyId = useCallback(() => {
    setReplyId(null);
  }, []);

  if (isPending) return <Spinner />;
  if (!comments || comments.length === 0) return <NotFoundData />;

  const renderComments = (
    comments: CommentDetailed[],
    parentId: number | null,
    depth: number = 0
  ) => {
    const isMaxDepth = depth >= constants.MAX_COMMENT_DEPTH;
    if (isMaxDepth) return [];
    return comments
      .filter((comment) => comment.parent_id === parentId)
      .map((comment) => (
        <div
          key={comment.id}
          className={parentId ? "ml-6 border-l-2 border-stone-600 pl-4" : ""}
        >
          <Comment
            userId={userId}
            comment={comment}
            isMaxDepth={isMaxDepth}
            handleReplyClick={handleReplyClick}
          />
          {replyId && replyId === comment.id && userId && postId && (
            <CommentInput
              postId={postId}
              userId={userId}
              parentId={replyId}
              handleClearReplyId={handleClearReplyId}
            />
          )}
          {renderComments(comments, comment.id, depth + 1)}
        </div>
      ));
  };

  return (
    postId && (
      <div className="min-h-32 w-3/4 rounded-md border border-gray-700 bg-stone-700 p-4 shadow">
        {isPending ? (
          <Spinner />
        ) : !comments ? (
          <NotFoundData />
        ) : (
          <div>
            <h1 className="text-xl font-bold">{comments.length} Comments</h1>
            {userId && (
              <CommentInput
                postId={postId}
                userId={userId}
                parentId={null}
                handleClearReplyId={handleClearReplyId}
              />
            )}
            {renderComments(comments, null)}
          </div>
        )}
      </div>
    )
  );
};
