import { MenuItem } from "@/features/sidebar";
import {
  BookmarkIcon,
  ClockIcon,
  FireIcon,
  ListBulletIcon,
} from "@heroicons/react/20/solid";
import React from "react";
import { Tooltip } from "react-tooltip";

export const Sidebar: React.FC = () => {
  return (
    <>
      <aside className="sticky top-16 col-span-2 row-span-2 h-[calc(100vh-4rem)] overflow-y-auto bg-transparent p-2">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <MenuItem text="Popular" Icon={FireIcon} />
            <MenuItem text="New" Icon={ClockIcon} />
            <MenuItem text="Bookmarked" Icon={BookmarkIcon} />
            <MenuItem text="Subscription" Icon={ListBulletIcon} />
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-lg text-gray-300">Themes: </h3>
            <MenuItem text="Placeholder" Icon={FireIcon} />
            <MenuItem text="Placeholder" Icon={FireIcon} />
            <MenuItem text="Placeholder" Icon={FireIcon} />
          </div>
        </div>
      </aside>
      <Tooltip place="right" id="menu-text" className="block md:hidden" />
    </>
  );
};
