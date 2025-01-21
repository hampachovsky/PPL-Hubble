import { constants } from "@/config";
import supabase from "@/lib/supabase";
import { Category } from "@/types/api";
import { useQuery } from "@tanstack/react-query";

export async function getCategories() {
  const { data, error } = await supabase
    .from(constants.QUERY_KEYS.CATEGORIES)
    .select("*")
    .order("id", { ascending: true })
    .returns<Category[]>();
  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
  return data;
}

export const useCategories = () => {
  const { data: categories, isPending } = useQuery({
    queryKey: [constants.QUERY_KEYS.CATEGORIES],
    queryFn: getCategories,
    staleTime: constants.STALE_TIMES.CATEGORIES_STALE,
  });

  return { categories, isPending };
};
