import { useToggleSubscription } from "@/api";
import { NamedIcon, UserAvatar } from "@/components";
import { paths } from "@/config";
import { PostDetailed, Profile } from "@/types/api";
import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { formatDistanceToNow } from "date-fns";
import React from "react";
import { Link } from "react-router";
import { Tooltip } from "react-tooltip";

interface PostCardHeaderProps {
  marginBottom?: "none" | "default";
  category: PostDetailed["category"];
  profile: PostDetailed["profile"];
  is_subscribed: boolean;
  createdAt: Date;
  userId: Profile["user_id"] | undefined;
}

export const PostCardHeader: React.FC<PostCardHeaderProps> = ({
  marginBottom = "default",
  category,
  profile,
  createdAt,
  is_subscribed,
  userId,
}) => {
  const { mutate: toggleSubscription, isSubscriptionPending } =
    useToggleSubscription();

  const handleSubscribeClick = () => {
    if (isSubscriptionPending) return;
    if (userId) {
      toggleSubscription({
        isSubscribed: is_subscribed,
        subscriber_id: userId,
        subscribed_to_id: profile.user_id,
      });
    }
  };
  return (
    <div
      className={clsx(
        "flex flex-nowrap items-center justify-between",
        marginBottom === "default" ? "mb-4" : ""
      )}
    >
      <div className="flex flex-wrap items-center gap-2 sm:gap-4">
        <div className="flex items-center gap-2 text-cyan-400">
          <NamedIcon
            iconName={category.icon_name}
            className="h-5 w-5 flex-shrink-0"
          />
          <h5 className="text-sm sm:text-base">{category.name}</h5>
        </div>
        <div className="flex flex-row items-center gap-2">
          <Link
            className="flex items-center space-x-2"
            to={`${paths.profile.getHref(profile.user_id)}`}
          >
            <UserAvatar avatarURL={profile.avatar_url || undefined} />
            <span className="decoration-cyan-400 hover:text-cyan-400 hover:underline">
              {profile.username}
            </span>
          </Link>
          <span className="text-xs text-gray-400 sm:text-sm">
            {formatDistanceToNow(createdAt, { addSuffix: true })}
          </span>
        </div>
      </div>
      {userId !== profile.user_id && (
        <div className="ml-auto flex-shrink-0">
          <button
            data-tooltip-id="subscribe-status"
            data-tooltip-content={is_subscribed ? "Unsubscribe" : "Subscribe"}
            className="flex items-center text-cyan-400"
          >
            {is_subscribed ? (
              <MinusCircleIcon
                onClick={handleSubscribeClick}
                className="h-6 w-6 text-red-400"
              />
            ) : (
              <PlusCircleIcon
                onClick={handleSubscribeClick}
                className="h-6 w-6"
              />
            )}
          </button>
          <Tooltip place="right" id="subscribe-status" />
        </div>
      )}
    </div>
  );
};
