import { RegisterDto, useAuthModal } from "@/features/auth";
import supabase from "@/lib/supabase";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

const signupUser = async ({ email, password, username }: RegisterDto) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { username },
    },
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const useSignup = () => {
  const { openAuthModal } = useAuthModal();
  const { mutate: signup, isPending } = useMutation({
    mutationFn: (dto: RegisterDto) => signupUser(dto),
    onSuccess: () => {
      toast.success("User successfully registered");
      openAuthModal("login");
    },
    onError: (error) => {
      console.log("ERROR", error);
      toast.error(error.message);
    },
  });

  return { signup, isPending };
};
