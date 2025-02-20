import { useToggleSubscription } from "@/api";
import { UserAvatar } from "@/components";
import { paths } from "@/config";
import { ProfileDetailed } from "@/types/api";
import { MinusCircleIcon } from "@heroicons/react/20/solid";
import React from "react";
import { Link } from "react-router";

interface SubscriptionBlockProps {
  subscriptions: ProfileDetailed["subscriptions"];
  isAuthUserProfile: boolean;
  userId: ProfileDetailed["user_id"] | undefined;
}

export const SubscriptionBlock: React.FC<SubscriptionBlockProps> = ({
  subscriptions,
  isAuthUserProfile,
  userId,
}) => {
  const { mutate: toggleSubscription, isSubscriptionPending } =
    useToggleSubscription();
  const handleSubscribeClick = (subscribed_to_id: string) => {
    if (isSubscriptionPending) return;
    if (userId) {
      toggleSubscription({
        isSubscribed: true,
        subscriber_id: userId,
        subscribed_to_id: subscribed_to_id,
      });
    }
  };

  return (
    <div className="overflow-hidden rounded-md border border-gray-700 bg-stone-700 p-4 text-white shadow-lg">
      {!subscriptions.length ? (
        <h1 className="text-lg font-semibold">No subscriptions</h1>
      ) : (
        <>
          <h3 className="mb-4 text-lg font-semibold">Subscription</h3>
          <ul className="space-y-2 text-pretty text-justify">
            {subscriptions.map((subscription) => (
              <li
                key={subscription.subscribed_to_id}
                className="flex items-center justify-between"
              >
                <div>
                  <Link
                    className="flex items-center space-x-2"
                    to={paths.profile.getHref(subscription.subscribed_to_id)}
                  >
                    <UserAvatar
                      avatarURL={
                        subscription.subscribed_to_details.avatar_url ||
                        undefined
                      }
                    />
                    <h4 className="hover:cursor-pointer hover:text-cyan-400">
                      {subscription.subscribed_to_details.username}
                    </h4>
                  </Link>
                </div>
                {isAuthUserProfile && (
                  <button
                    onClick={() =>
                      handleSubscribeClick(subscription.subscribed_to_id)
                    }
                  >
                    <MinusCircleIcon className="size-6 text-red-400" />
                  </button>
                )}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};
