import { constants } from "@/config";
import supabase from "@/lib/supabase";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import toast from "react-hot-toast";

export async function deleteComment(id: number) {
  const { error } = await supabase
    .from(constants.QUERY_KEYS.COMMENTS)
    .delete()
    .eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cannot delete comment");
  }
}

export const useDeleteComment = (postId: number) => {
  const queryClient = useQueryClient();

  const toastId = useRef<string>();

  const { mutate, isPending } = useMutation({
    mutationFn: deleteComment,
    onSuccess: () => {
      if (toastId.current) {
        toast.dismiss(toastId.current);
      }
      queryClient.invalidateQueries({
        queryKey: [
          constants.QUERY_KEYS.COMMENTS,
          constants.QUERY_KEYS.SINGLE_POST,
          postId,
        ],
      });
      toastId.current = toast.success("Comment deleted", {
        position: "bottom-right",
        id: `delete-comment-${postId}-${Date.now()}`,
      });
    },
    onError: (error) => {
      console.log("ERROR", error);
      if (toastId.current) {
        toast.dismiss(toastId.current);
      }
      toast.error(error.message);

      toastId.current = toast.error(error.message, {
        position: "bottom-right",
        id: `delete-comment-error-${postId}-${Date.now()}`,
      });
    },
  });

  return { mutate, isPending };
};
