import supabase from "@/lib/supabase";
import { useQuery } from "@tanstack/react-query";

const getCurrentUser = async () => {
  const { data: dataSession } = await supabase.auth.getSession();

  if (!dataSession.session) {
    return null;
  }

  const { data } = await supabase.auth.getUser();

  return data?.user;
};

export const useUser = () => {
  const { isPending, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  return { isPending, user, isAuth: user?.role === "authenticated" };
};
