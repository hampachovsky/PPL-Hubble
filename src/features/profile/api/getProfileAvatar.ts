import { constants } from "@/config";
import supabase from "@/lib/supabase";
import { Profile } from "@/types/api";
import { useQuery } from "@tanstack/react-query";

export async function getProfileAvatar(userId: string | undefined) {
  if (userId === undefined) return null;

  const { data, error } = await supabase
    .from(constants.QUERY_KEYS.PROFILES)
    .select(`avatar_url`)
    .eq("user_id", userId)
    .single<{ avatar_url: Profile["avatar_url"] }>();
  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  return data;
}

export const useProfileAvatar = (userId: string | undefined) => {
  const isEnabled = Boolean(userId);
  const { data: avatarData, isPending } = useQuery({
    queryKey: [
      constants.QUERY_KEYS.PROFILES,
      constants.QUERY_KEYS.PROFILE_AVATAR,
      userId,
    ],
    queryFn: () => getProfileAvatar(userId),
    staleTime: constants.STALE_TIMES.CURRENT_USER_STALE,
    enabled: isEnabled,
  });

  return { avatarData, isPending: isEnabled ? isPending : false };
};
