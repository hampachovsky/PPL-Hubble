import { Spinner } from "@/components";
import { constants, paths } from "@/config";
import { useUser } from "@/features/auth";
import { PostCard, usePostsBy } from "@/features/post";
import { Profile, SubscriptionBlock, useProfile } from "@/features/profile";
import { Tabs } from "@/features/tabs";
import React from "react";
import { Navigate, useParams } from "react-router";

export const ProfilePage: React.FC = () => {
  const { id } = useParams();
  const { user } = useUser();

  const isAuthUserProfile = id === user?.id;

  const { profile, isPending: isPendingProfile } = useProfile(id!);
  const { posts, isPending: isPostPending } = usePostsBy({
    input_category_id: null,
    input_user_id: user?.id ?? null,
    input_type: "profile",
    profile_user_id: profile?.user_id ?? null,
  });

  if (isPendingProfile) return <Spinner />;
  if (!profile) return <Navigate to={paths.notFound.path} />;

  const renderPosts = () => {
    if (isPostPending) return <Spinner />;
    if (!posts || posts.length === 0) {
      return (
        <h1 className="mt-12 border-b border-gray-600 pb-2 text-center text-3xl font-semibold text-red-100">
          No posts found
        </h1>
      );
    }
    return posts.map((post) => (
      <PostCard userId={user?.id} key={post.id} post={post} fullWidth />
    ));
  };

  return (
    <div className="container flex flex-col gap-8 px-4">
      <Tabs
        tabHeader={
          <Profile profile={profile} isAuthUserProfile={isAuthUserProfile} />
        }
        tabs={constants.PROFILE_TABS}
        contents={[
          <div className="flex flex-row space-x-2">
            <div className="w-3/5 flex-auto space-y-8">{renderPosts()}</div>
            <div className="hidden w-2/5 flex-none sm:hidden md:block">
              <SubscriptionBlock
                isAuthUserProfile={isAuthUserProfile}
                subscriptions={profile.subscriptions}
              />
            </div>
          </div>,
          <SubscriptionBlock
            isAuthUserProfile={isAuthUserProfile}
            subscriptions={profile.subscriptions}
          />,
        ]}
      />
    </div>
  );
};
