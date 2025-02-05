import { constants } from "@/config";
import supabase from "@/lib/supabase";
import { CommentDetailed, SinglePostDetailRequest } from "@/types/api";
import { useQuery } from "@tanstack/react-query";

export async function getCommentsByPost(postDetail: SinglePostDetailRequest) {
  const { data, error } = await supabase
    .rpc("get_comments_details_by_post", postDetail)
    .returns<CommentDetailed[]>();

  if (error) {
    console.error(error);
    throw new Error("Comments fetch failed");
  }

  return data;
}

export const useCommentsByPost = (postDetail: SinglePostDetailRequest) => {
  const { data: comments, isPending } = useQuery({
    queryKey: [
      constants.QUERY_KEYS.COMMENTS,
      constants.QUERY_KEYS.SINGLE_POST,
      postDetail.input_post_id,
    ],
    queryFn: () => getCommentsByPost(postDetail),
    staleTime: constants.STALE_TIMES.POST_BY_STALE,
    gcTime: constants.GC_TIMES.POST_BY_GC,
    enabled: !!postDetail.input_post_id,
  });

  return { comments, isPending };
};
