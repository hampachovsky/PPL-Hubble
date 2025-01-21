import { constants } from "@/config";
import supabase from "@/lib/supabase";
import { PostDetailed, PostDetailRequest } from "@/types/api";
import { useQuery } from "@tanstack/react-query";

export async function getPostsBy(postDetail: PostDetailRequest) {
  const params = {
    input_type: postDetail.input_type,
    input_category_id: postDetail.input_category_id,
    profile_user_id: postDetail.profile_user_id,
    input_user_id: postDetail.input_user_id,
  } satisfies PostDetailRequest;

  const { data, error } = await supabase
    .rpc("get_post_details", params)
    .order("created_at", { ascending: false })
    .returns<PostDetailed[]>();

  if (error) {
    console.error(error);
    throw new Error("post");
  }

  return data;
}

const getQueryKey = (postDetail: PostDetailRequest) => {
  const keyMap = {
    category: postDetail.input_category_id,
    profile: postDetail.profile_user_id,
    bookmarks: postDetail.input_user_id,
    all: postDetail.input_user_id,
  } as const;

  const id = keyMap[postDetail.input_type];

  return [postDetail.input_type, id];
};

export const usePostsBy = (postDetail: PostDetailRequest) => {
  const queryKey = getQueryKey(postDetail);

  const { data: posts, isPending } = useQuery({
    queryKey: [constants.QUERY_KEYS.POSTS, ...queryKey],
    queryFn: () => getPostsBy(postDetail),
    staleTime: constants.STALE_TIMES.POSTS_BY_STALE,
    gcTime: constants.GC_TIMES.POSTS_BY_GC,
    enabled: !!queryKey,
  });

  return { posts, isPending };
};
