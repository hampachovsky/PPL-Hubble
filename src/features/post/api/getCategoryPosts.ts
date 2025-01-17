import { constants } from "@/config";
import supabase from "@/lib/supabase";
import { PostCardType } from "@/types/api";
import { useQuery } from "@tanstack/react-query";

export async function getCategoryPosts(categoryId: string | null) {
  if (categoryId === null) return [];

  const { data, error } = await supabase
    .from("posts")
    .select(
      "id, status, title, image_url, category_id, author_id, created_at,profile:profiles!posts_author_id_fkey ( user_id, username, avatar_url ), category:categories (id, name, icon_name)"
    )
    .eq("category_id", categoryId)
    .order("created_at", { ascending: false })
    .returns<PostCardType[]>();
  if (error) {
    console.error(error);
    throw new Error("post");
  }

  return data;
}

export const useCategoryPosts = (categoryId: string | null) => {
  const { data: posts, isPending } = useQuery({
    queryKey: [constants.QUERY_KEYS.POSTS, `byCategory${categoryId}`],
    queryFn: () => getCategoryPosts(categoryId),
    enabled: !!categoryId,
  });

  return { posts, isPending };
};
