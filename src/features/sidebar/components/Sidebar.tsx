import { paths } from "@/config/paths";
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
            <MenuItem path={paths.home.path} text="Popular" Icon={FireIcon} />
            <MenuItem path={paths.home.path} text="New" Icon={ClockIcon} />
            <MenuItem
              path={paths.home.path}
              text="Bookmarked"
              Icon={BookmarkIcon}
            />
            <MenuItem
              path={paths.home.path}
              text="Subscription"
              Icon={ListBulletIcon}
            />
          </div>

          <div className="mt-14 flex flex-col gap-2">
            <MenuItem
              path={paths.category.getHref("films")}
              text="Films"
              Icon={FireIcon}
            />
            <MenuItem
              path={paths.category.getHref("games")}
              text="Games"
              Icon={FireIcon}
            />
            <MenuItem
              path={paths.category.getHref("books")}
              text="Books"
              Icon={FireIcon}
            />
          </div>
        </div>
      </aside>
      <Tooltip place="right" id="menu-text" className="block md:hidden" />
    </>
  );
};
