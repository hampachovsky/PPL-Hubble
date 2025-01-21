import { constants } from "@/config";
import supabase from "@/lib/supabase";
import { ProfileDetailed } from "@/types/api";
import { useQuery } from "@tanstack/react-query";

export async function getProfile(userId: string) {
  const { data, error } = await supabase
    .from(constants.QUERY_KEYS.PROFILES)
    .select(
      `
    *,
    subscriberCount:subscriptions!subscriptions_subscribed_to_id_fkey(count),
    subscriptions:subscriptions!subscriptions_subscriber_id_fkey(
      subscriber_id,
      subscribed_to_id,
      subscribed_to_details:profiles!subscriptions_subscribed_to_id_fkey(
        username,
        avatar_url
      )
    )
  `
    )
    .eq("user_id", userId)
    .single();
  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
  return {
    ...data,
    subscriberCount: data?.subscriberCount?.[0]?.count ?? 0,
  } as ProfileDetailed;
}

export const useProfile = (userId: string) => {
  const { data: profile, isPending } = useQuery({
    queryKey: [
      constants.QUERY_KEYS.PROFILES,
      constants.QUERY_KEYS.PROFILE,
      userId,
    ],
    queryFn: () => getProfile(userId),
    enabled: Boolean(userId),
    staleTime: constants.STALE_TIMES.PROFILE_STALE,
    gcTime: constants.GC_TIMES.PROFILE_GC,
  });

  return { profile, isPending };
};
