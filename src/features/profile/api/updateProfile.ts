import { constants } from "@/config";
import { UpdateProfileRequest } from "@/features/settings/schemas/settingsSchema";
import supabase, { supabaseURL } from "@/lib/supabase";
import { createSafeFileName } from "@/utils/createSafeFileName";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

async function updateUserFile(
  file: File | null,
  previousUrl: string | null,
  bucketName: string
): Promise<string | null> {
  if (!file) return null;

  if (previousUrl) {
    const oldFileName = previousUrl.split("/").pop();
    if (oldFileName) {
      await supabase.storage.from(bucketName).remove([oldFileName]);
    }
  }

  const fileName = createSafeFileName(file);
  const filePath = `${supabaseURL}/storage/v1/object/public/${bucketName}/${fileName}`;

  const { error } = await supabase.storage
    .from(bucketName)
    .upload(fileName, file, {
      cacheControl: "3600",
      upsert: false,
    });

  if (error) {
    console.error(error);
    throw new Error(`Failed to upload ${bucketName}`);
  }

  return filePath;
}

export async function updateProfile(
  dto: UpdateProfileRequest & {
    userId: string;
    oldBackgroundURL: string;
    oldAvatarURL: string;
  }
) {
  const [avatarPath, bannerPath] = await Promise.all([
    updateUserFile(
      dto.avatar as File,
      dto.oldAvatarURL,
      constants.BUCKETS.AVATARS
    ),
    updateUserFile(
      dto.banner as File,
      dto.oldBackgroundURL,
      constants.BUCKETS.BANNERS
    ),
  ]);

  if (dto.password) {
    const { error: passwordError } = await supabase.auth.updateUser({
      password: dto.password,
    });

    if (passwordError) {
      console.error(passwordError);
      throw new Error("Failed to update password");
    }
  }

  console.log(avatarPath);

  const { error } = await supabase
    .from(constants.QUERY_KEYS.PROFILES)
    .update({
      username: dto.username,
      status: dto.status,
      avatar_url: avatarPath ?? dto.oldAvatarURL,
      background_url: bannerPath ?? dto.oldBackgroundURL,
    })
    .eq("user_id", dto.userId);

  if (error) {
    console.error(error);
    throw new Error("Profile update failed");
  }
}

export const useUpdateProfile = (profileId: string) => {
  const queryClient = useQueryClient();
  const keysToInvalidate = [
    [
      constants.QUERY_KEYS.PROFILES,
      constants.QUERY_KEYS.PROFILE_AVATAR,
      profileId,
    ],
    [constants.QUERY_KEYS.PROFILES, constants.QUERY_KEYS.PROFILE, profileId],
    [constants.QUERY_KEYS.POSTS, constants.QUERY_KEYS.PROFILE, profileId],
    [constants.QUERY_KEYS.SETTINGS, profileId],
  ];
  const {
    mutate: update,
    isPending: isUpdating,
    isSuccess: isUpdated,
  } = useMutation({
    mutationFn: updateProfile,
    onSuccess: () => {
      keysToInvalidate.forEach((key) => {
        queryClient.invalidateQueries({ queryKey: key });
      });
      toast.success("Profile update success", { position: "top-center" });
    },
    onError: (error) => {
      console.log("ERROR", error);
      toast.error(error.message);
    },
  });

  return { update, isUpdating, isUpdated };
};
