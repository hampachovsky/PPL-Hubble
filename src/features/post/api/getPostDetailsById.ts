import { constants } from "@/config";
import supabase from "@/lib/supabase";
import { PostDetailedWithContent, SinglePostDetailRequest } from "@/types/api";
import { useQuery } from "@tanstack/react-query";

export async function getPostDetailsById(postDetail: SinglePostDetailRequest) {
  const { data, error } = await supabase
    .rpc("get_post_details_by_id", postDetail)
    .single<PostDetailedWithContent>();

  if (error) {
    console.error(error);
    throw new Error("Post fetch failed");
  }

  return data;
}

export const usePostDetailById = (postDetail: SinglePostDetailRequest) => {
  const { data: post, isPending } = useQuery({
    queryKey: [constants.QUERY_KEYS.SINGLE_POST, postDetail.input_post_id],
    queryFn: () => getPostDetailsById(postDetail),
    staleTime: constants.STALE_TIMES.POST_BY_STALE,
    gcTime: constants.GC_TIMES.POST_BY_GC,
    enabled: !!postDetail.input_post_id,
  });

  return { post, isPending };
};
