import { UserAvatar } from "@/components";
import { paths } from "@/config";
import { UserMinusIcon } from "@heroicons/react/20/solid";
import React from "react";
import { Link } from "react-router";

export const SubscriptionBlock: React.FC = () => {
  return (
    <div className="overflow-hidden rounded-md border border-gray-700 bg-stone-700 p-4 text-white shadow-lg">
      <h3 className="mb-4 text-lg font-semibold">Subscription</h3>
      <ul className="space-y-2 text-pretty text-justify">
        <li className="flex items-center justify-between">
          <div>
            <Link
              className="flex items-center space-x-2"
              to={paths.profile.getHref("1")}
            >
              <UserAvatar />
              <h4 className="hover:cursor-pointer hover:text-cyan-400">
                Nickname
              </h4>
            </Link>
          </div>
          <button>
            <UserMinusIcon className="size-6 text-red-600" />
          </button>
        </li>
        <li className="flex items-center justify-between">
          <div>
            <Link
              className="flex items-center space-x-2"
              to={paths.profile.getHref("1")}
            >
              <UserAvatar />
              <h4 className="hover:cursor-pointer hover:text-cyan-400">
                Nickname
              </h4>
            </Link>
          </div>
          <button>
            <UserMinusIcon className="size-6 text-red-600" />
          </button>
        </li>
        <li className="flex items-center justify-between">
          <div>
            <Link
              className="flex items-center space-x-2"
              to={paths.profile.getHref("1")}
            >
              <UserAvatar />
              <h4 className="hover:cursor-pointer hover:text-cyan-400">
                Nickname
              </h4>
            </Link>
          </div>
          <button>
            <UserMinusIcon className="size-6 text-red-600" />
          </button>
        </li>
      </ul>
    </div>
  );
};
