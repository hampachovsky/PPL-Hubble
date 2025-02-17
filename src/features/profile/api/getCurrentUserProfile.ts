import { constants } from "@/config";
import supabase from "@/lib/supabase";
import { Profile } from "@/types/api";
import { useQuery } from "@tanstack/react-query";

export async function getCurrentUserProfile(userId: string) {
  const { data, error } = await supabase
    .from(constants.QUERY_KEYS.PROFILES)
    .select(
      `
    *
  `
    )
    .eq("user_id", userId)
    .single<Profile>();
  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  return data;
}

export const useCurrentUserProfile = (userId: string) => {
  const { data: profile, isPending } = useQuery({
    queryKey: [constants.QUERY_KEYS.SETTINGS, userId],
    queryFn: () => getCurrentUserProfile(userId),
    enabled: Boolean(userId),
    staleTime: constants.STALE_TIMES.SETTINGS_STALE,
    gcTime: constants.GC_TIMES.SETTINGS_GC,
  });

  return { profile, isPending };
};
