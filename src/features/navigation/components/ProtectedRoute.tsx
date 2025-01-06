import { paths } from "@/config";
import { useAuthModal } from "@/features/auth";
import React, { useEffect } from "react";
import { useNavigate } from "react-router";

export const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { openAuthModal } = useAuthModal();

  const isAuth = true;
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate(paths.popular.path, { replace: true });
      openAuthModal("login");
    }
  }, [isAuth, openAuthModal, navigate]);

  if (!isAuth) {
    return null;
  }

  return <>{children}</>;
};
