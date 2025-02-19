import { constants } from "@/config";
import supabase from "@/lib/supabase";
import { AddViewRequest } from "@/types/requestTypes";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export async function addPostView(dto: AddViewRequest) {
  const { error } = await supabase.from("views").insert(dto);

  if (error) {
    if (
      error.message !==
      `duplicate key value violates unique constraint "views_pkey"`
    ) {
      console.error(error);

      throw new Error("Post view error");
    }
  }
}

export const useViewPost = () => {
  const queryClient = useQueryClient();

  const {
    mutate: view,
    isPending: isViewing,
    isSuccess: isViewed,
  } = useMutation({
    mutationFn: addPostView,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [constants.QUERY_KEYS.SINGLE_POST],
      });
    },
    onError: (error) => {
      console.log("Error", error);
      toast.error(error.message);
    },
  });

  return { view, isViewing, isViewed };
};
