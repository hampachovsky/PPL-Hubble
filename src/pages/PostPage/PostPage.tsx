import { Spinner } from "@/components";
import { paths } from "@/config";
import { useUser } from "@/features/auth";
import { CommentsList } from "@/features/comment";
import { Post, usePostDetailById } from "@/features/post";
import React from "react";
import { Navigate, useParams } from "react-router";

export const PostPage: React.FC = () => {
  const { id: postId } = useParams();
  const { user } = useUser();

  const { post, isPending } = usePostDetailById({
    input_post_id: postId ? +postId : null,
    input_user_id: user?.id ?? null,
  });

  if (isPending) return <Spinner />;

  if (!post) return <Navigate to={paths.notFound.path} />;
  return (
    <div className="container flex flex-col items-center gap-8 px-4">
      <Post post={post} userId={user?.id} />
      <CommentsList userId={user?.id} postId={postId} />
    </div>
  );
};
