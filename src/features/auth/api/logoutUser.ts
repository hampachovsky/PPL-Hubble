import { paths } from "@/config";
import supabase from "@/lib/supabase";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const logoutUser = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    throw new Error(error.message);
  }

  return "User signed out";
};

export const useLogout = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: logout, isPending } = useMutation({
    mutationFn: logoutUser,
    onSuccess: (message) => {
      queryClient.removeQueries();
      toast.success(message);
      navigate(paths.popular.path, { replace: true });
    },
    onError: (error) => {
      toast.error(error.message);
      console.error("ERROR", error);
    },
  });

  return { logout, isPending };
};
