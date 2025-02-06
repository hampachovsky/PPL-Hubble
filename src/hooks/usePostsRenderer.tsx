import { NotFoundData, Spinner } from "@/components";
import { usePostsBy } from "@/features/post";
import { PostDetailRequest } from "@/types/requestTypes";
import { PostCard } from "../features/post/components/PostCard/PostCard";

export const usePostsRenderer = ({
  input_category_id = null,
  input_user_id = null,
  input_type,
  profile_user_id = null,
  fullWidth = true,
}: PostDetailRequest & { fullWidth?: boolean }) => {
  const { posts, isPending: isPostPending } = usePostsBy({
    input_category_id,
    input_user_id,
    input_type,
    profile_user_id,
  });

  const renderPosts = () => {
    if (isPostPending) return <Spinner />;
    if (!posts || posts.length === 0) {
      return <NotFoundData />;
    }
    return posts.map((post) => (
      <PostCard
        userId={input_user_id || undefined}
        key={post.id}
        post={post}
        fullWidth={fullWidth}
      />
    ));
  };

  return { renderPosts, posts, isPostPending };
};
