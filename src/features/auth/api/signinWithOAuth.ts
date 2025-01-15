import supabase from "@/lib/supabase";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

const signinWithOAuth = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const useOAuthSignin = () => {
  const { mutate: oauthSignin, isPending } = useMutation({
    mutationFn: () => signinWithOAuth(),
    onSuccess: () => {},
    onError: (error) => {
      console.log("ERROR", error);
      toast.error(error.message);
    },
  });

  return { oauthSignin, isPending };
};
