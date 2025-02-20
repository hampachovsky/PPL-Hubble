import { constants } from "@/config";
import supabase from "@/lib/supabase";
import { ResourceType } from "@/types/api";
import { ToggleLikeRequest } from "@/types/requestTypes";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export async function toggleLike(dto: ToggleLikeRequest) {
  const { user_id, resource_id, resource_type, isLiked } = dto;

  const { error } = isLiked
    ? await supabase
        .from("likes")
        .delete()
        .eq("user_id", user_id)
        .eq("resource_id", resource_id)
        .eq("resource_type", resource_type)
    : await supabase
        .from("likes")
        .upsert([{ user_id, resource_id, resource_type }]);

  if (error) {
    console.error(error);
    throw new Error(isLiked ? "Unset like error" : "Set like error");
  }
}

export const useToggleLike = (
  resourceType: ResourceType,
  postId: string | undefined
) => {
  const queryClient = useQueryClient();

  const {
    mutate,
    isPending: isLikePending,
    isSuccess: isSuccessLiked,
  } = useMutation({
    mutationFn: toggleLike,

    onSuccess: () => {
      if (resourceType === "comment" && postId !== undefined) {
        queryClient.invalidateQueries({
          queryKey: [
            constants.QUERY_KEYS.COMMENTS,
            constants.QUERY_KEYS.SINGLE_POST,
            +postId,
          ],
        });
      } else {
        queryClient.invalidateQueries({
          queryKey: [constants.QUERY_KEYS.POSTS],
        });
        queryClient.invalidateQueries({
          queryKey: [constants.QUERY_KEYS.SINGLE_POST],
        });
      }
    },
    onError: (error) => {
      console.log("Error", error);
      toast.error(error.message);
    },
  });

  return { mutate, isLikePending, isSuccessLiked };
};
