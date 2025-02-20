import { constants } from "@/config";
import supabase from "@/lib/supabase";
import { ToggleBookmarkedRequest } from "@/types/requestTypes";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export async function toggleBookmarked(dto: ToggleBookmarkedRequest) {
  const { user_id, post_id, isBookmarked } = dto;

  const { error } = isBookmarked
    ? await supabase
        .from("bookmarked")
        .delete()
        .eq("user_id", user_id)
        .eq("post_id", post_id)
    : await supabase.from("bookmarked").upsert([{ user_id, post_id }]);

  if (error) {
    console.error("Supabase Error:", error);
    throw new Error(
      error.message ||
        (isBookmarked ? "Unset bookmark error" : "Set bookmark error")
    );
  }
}

export const useToggleBookmarked = () => {
  const queryClient = useQueryClient();

  const {
    mutate,
    isPending: isBookmarkPending,
    isSuccess: isBookmarkPendingSuccess,
  } = useMutation({
    mutationFn: toggleBookmarked,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [constants.QUERY_KEYS.POSTS],
      });
      queryClient.invalidateQueries({
        queryKey: [constants.QUERY_KEYS.SINGLE_POST],
      });
    },
    onError: (error) => {
      console.log("Error", error);
      toast.error(error.message);
    },
  });

  return { mutate, isBookmarkPending, isBookmarkPendingSuccess };
};
