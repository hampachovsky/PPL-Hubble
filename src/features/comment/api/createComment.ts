import { constants } from "@/config";
import supabase from "@/lib/supabase";
import { CreateCommentRequest } from "@/types/requestTypes";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export async function createComment(dto: CreateCommentRequest) {
  const { error } = await supabase
    .from(constants.QUERY_KEYS.COMMENTS)
    .insert(dto);

  if (error) {
    console.error(error);
    throw new Error("Comment creation failed");
  }
}

export const useCreateComment = (postId: string) => {
  const queryClient = useQueryClient();
  const {
    mutate: create,
    isPending: isCreating,
    isSuccess: isCreated,
  } = useMutation({
    mutationFn: createComment,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [
          constants.QUERY_KEYS.COMMENTS,
          constants.QUERY_KEYS.SINGLE_POST,
          +postId,
        ],
      });
      toast.success("Comment accepted", { position: "bottom-right" });
    },
    onError: (error) => {
      console.log("ERROR", error);
      toast.error(error.message);
    },
  });

  return { create, isCreating, isCreated };
};
