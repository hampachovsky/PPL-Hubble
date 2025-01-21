import { Banner, UserAvatar } from "@/components";
import { paths } from "@/config";
import { ProfileDetailed } from "@/types/api";
import { Cog6ToothIcon } from "@heroicons/react/20/solid";
import React from "react";
import { useNavigate } from "react-router";

interface ProfileProps {
  profile: ProfileDetailed;
  isAuthUserProfile: boolean;
}

export const Profile: React.FC<ProfileProps> = ({
  profile,
  isAuthUserProfile,
}) => {
  const navigate = useNavigate();
  return (
    <div>
      <>
        <Banner imageURL={profile.background_url || undefined} />
        <div className="p-4">
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex flex-col items-center gap-2 sm:flex-row">
              <div className="flex items-center space-x-2">
                <UserAvatar
                  avatarURL={profile.avatar_url || undefined}
                  size="lg"
                />
                <h5 className="text-xl">{profile.username}</h5>
              </div>
            </div>
            {isAuthUserProfile && (
              <div className="mt-2 sm:mt-0">
                <button
                  onClick={() => navigate(paths.settings.path)}
                  className="inline-flex items-center rounded-md bg-neutral-600 px-4 py-2 font-bold hover:bg-gray-400"
                >
                  <Cog6ToothIcon className="h-6 w-6" />
                </button>
              </div>
            )}
          </div>

          <div>
            <p className="mt-2 text-wrap">{profile.status}</p>
            <div className="flex space-x-2">
              <h6 className="mt-2 text-gray-400">
                {profile.subscriberCount} subscribers
              </h6>
              <h6 className="mt-2 text-gray-400">
                {profile.subscriptions.length} subscription
              </h6>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};
