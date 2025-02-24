import { constants } from "@/config";
import supabase from "@/lib/supabase";
import { Post } from "@/types/api";
import { useQuery } from "@tanstack/react-query";

export async function getPostTitles(searchValue: string) {
  const { data, error } = await supabase
    .from(constants.QUERY_KEYS.POSTS)
    .select("id, title")
    .ilike("title", `%${searchValue}%`)
    .returns<Pick<Post, "id" | "title">[]>();

  if (error) {
    console.error(error);
    throw new Error("Failed to fetch posts");
  }

  return data;
}

export const usePostsSearch = (searchValue: string) => {
  const { data: posts, isPending } = useQuery({
    queryKey: [
      constants.QUERY_KEYS.POSTS,
      constants.QUERY_KEYS.POSTS_SEARCH,
      searchValue,
    ],
    queryFn: () => getPostTitles(searchValue),
    staleTime: constants.STALE_TIMES.SEARCH_STALE,
    gcTime: constants.GC_TIMES.SEARCH_GC,
    enabled: !!searchValue && searchValue.length >= 1,
  });

  return { posts, isPending };
};
