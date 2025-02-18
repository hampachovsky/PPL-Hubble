import { constants } from "@/config";
import supabase, { supabaseURL } from "@/lib/supabase";
import { CreatePostRequest } from "@/types/requestTypes";
import { createSafeFileName } from "@/utils/createSafeFileName";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export async function createPost(dto: CreatePostRequest) {
  console.log(dto);
  let filePath;

  if (dto.image) {
    const fileName = createSafeFileName(dto.image);
    filePath = `${supabaseURL}/storage/v1/object/public/${constants.BUCKETS.POST_IMAGES}/${fileName}`;

    const { error } = await supabase.storage
      .from(constants.BUCKETS.POST_IMAGES)
      .upload(fileName, dto.image, {
        cacheControl: "3600",
        upsert: false,
      });

    if (error) {
      console.error(error);
      throw new Error(`Failed to upload ${constants.BUCKETS.POST_IMAGES}`);
    }
  }
  const { data, error } = await supabase
    .from(constants.QUERY_KEYS.POSTS)
    .insert({
      content: dto.content,
      status: dto.status,
      author_id: dto.author_id,
      category_id: dto.category_id,
      title: dto.title,
      image_url: filePath ?? null,
    })
    .select();

  if (error) {
    console.error(error);
    throw new Error("Post creation failed");
  }
  console.log(data);
}

export const useCreatePost = () => {
  const queryClient = useQueryClient();
  const {
    mutate: create,
    isPending: isCreating,
    isSuccess: isCreated,
  } = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [constants.QUERY_KEYS.POSTS],
      });
      toast.success("Post accepted", { position: "top-center" });
    },
    onError: (error) => {
      console.log("ERROR", error);
      toast.error(error.message);
    },
  });

  return { create, isCreating, isCreated };
};
