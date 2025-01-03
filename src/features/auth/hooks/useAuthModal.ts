import { authPaths } from "@/features/auth";
import { useCallback } from "react";
import { useSearchParams } from "react-router";

export const useAuthModal = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const openAuthModal = useCallback(
    (modalType: keyof typeof authPaths) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set("modal", authPaths[modalType]);
      setSearchParams(params);
    },
    [searchParams, setSearchParams]
  );

  const closeAuthModal = useCallback(() => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("modal");
    params.delete("authOption");
    setSearchParams(params);
  }, [searchParams, setSearchParams]);

  const currentModal = searchParams.get("modal");

  return { openAuthModal, closeAuthModal, currentModal };
};
