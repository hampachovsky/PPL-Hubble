import { paths } from "@/config";
import { useAuthModal, useUser } from "@/features/auth";
import { usePostsRenderer } from "@/hooks/usePostsRenderer";
import React, { useEffect } from "react";
import { useNavigate } from "react-router";

interface UserFeedPageProps {
  filterCriteria: string;
}

export const UserFeedPage: React.FC<UserFeedPageProps> = ({
  filterCriteria,
}) => {
  const { user } = useUser();
  const { openAuthModal } = useAuthModal();
  const navigate = useNavigate();

  const { renderPosts } = usePostsRenderer({
    input_category_id: null,
    input_user_id: user?.id || null,
    input_type:
      filterCriteria === "subscriptions"
        ? "subscriptions"
        : filterCriteria === "bookmarked"
          ? "bookmarks"
          : "all",
    profile_user_id: null,
    fullWidth: false,
  });

  useEffect(() => {
    if (
      user === null &&
      (filterCriteria === "bookmarked" || filterCriteria === "subscriptions")
    ) {
      navigate(paths.popular.path);
      openAuthModal("login");
    }
  }, [user, filterCriteria, navigate, openAuthModal]);
  return (
    <>
      <h1 className="text-center text-2xl">Posts {filterCriteria}</h1>
      {renderPosts()}
    </>
  );
};
