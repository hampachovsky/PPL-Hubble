import { authPaths } from "@/features/auth";
import { useCallback } from "react";
import { useSearchParams } from "react-router";

export const useEmailAuth = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const emailAuth = searchParams.get("authOption");

  const handleEmailAuth = useCallback(() => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("authOption", authPaths.emailAuth);
    setSearchParams(params);
  }, [searchParams, setSearchParams]);

  const handleBack = useCallback(() => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("authOption");
    setSearchParams(params);
  }, [searchParams, setSearchParams]);

  return { emailAuth, handleEmailAuth, handleBack };
};
