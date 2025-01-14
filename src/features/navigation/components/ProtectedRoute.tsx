import { Spinner } from "@/components";
import { paths } from "@/config";
import { useAuthModal, useUser } from "@/features/auth";
import React, { useEffect } from "react";
import { useNavigate } from "react-router";

export const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { openAuthModal } = useAuthModal();
  const navigate = useNavigate();

  const { isPending, isAuth } = useUser();

  useEffect(() => {
    if (!isAuth && !isPending) {
      navigate(paths.popular.path, { replace: true });
      openAuthModal("login");
    }
  }, [isAuth, openAuthModal, navigate, isPending]);

  if (isPending) {
    return <Spinner />;
  }

  if (isAuth) return <>{children}</>;
};
