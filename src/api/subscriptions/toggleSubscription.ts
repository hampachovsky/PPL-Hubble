import { constants } from "@/config";
import supabase from "@/lib/supabase";
import { ToggleSubscribedRequest } from "@/types/requestTypes";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export async function toggleSubscription(dto: ToggleSubscribedRequest) {
  const { subscriber_id, subscribed_to_id, isSubscribed } = dto;

  const { error } = isSubscribed
    ? await supabase
        .from("subscriptions")
        .delete()
        .eq("subscriber_id", subscriber_id)
        .eq("subscribed_to_id", subscribed_to_id)
    : await supabase
        .from("subscriptions")
        .upsert([{ subscriber_id, subscribed_to_id }]);

  if (error) {
    console.error("Supabase Error:", error);
    throw new Error(
      error.message || (isSubscribed ? "Unsubscribe error" : "Subscribe error")
    );
  }
}

export const useToggleSubscription = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending: isSubscriptionPending } = useMutation({
    mutationFn: toggleSubscription,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [constants.QUERY_KEYS.POSTS] });
      queryClient.invalidateQueries({
        queryKey: [constants.QUERY_KEYS.SINGLE_POST],
      });
      queryClient.invalidateQueries({
        queryKey: [constants.QUERY_KEYS.PROFILES],
      });
    },
    onError: (error) => {
      console.log("Error", error);
      toast.error(error.message);
    },
  });

  return { mutate, isSubscriptionPending };
};
