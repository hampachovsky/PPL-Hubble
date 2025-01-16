import { constants } from "@/config";
import { LoginDto, useAuthModal } from "@/features/auth";
import supabase from "@/lib/supabase";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const loginUser = async (dto: LoginDto) => {
  const { data, error } = await supabase.auth.signInWithPassword(dto);

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const useLogin = () => {
  const queryClient = useQueryClient();
  const { closeAuthModal } = useAuthModal();
  const { mutate: login, isPending } = useMutation({
    mutationFn: (dto: LoginDto) => loginUser(dto),
    onSuccess: ({ user }) => {
      queryClient.setQueryData([constants.QUERY_KEYS.USER], user);
      closeAuthModal();
    },
    onError: (error) => {
      console.log("ERROR", error);
      toast.error(error.message);
    },
  });

  return { login, isPending };
};
