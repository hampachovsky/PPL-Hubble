import { paths } from "@/config";
import { useCategories } from "@/features/category";
import { MenuItem } from "@/features/sidebar";

import React from "react";
import { Tooltip } from "react-tooltip";

export const Sidebar: React.FC = () => {
  const { categories, isPending } = useCategories();
  return (
    <>
      <aside className="sticky top-16 col-span-2 row-span-2 h-[calc(100vh-4rem)] overflow-y-auto bg-transparent p-2">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <MenuItem
              path={paths.popular.path}
              text="Popular"
              iconName={"FireIcon"}
            />
            <MenuItem path={paths.new.path} text="New" iconName={"ClockIcon"} />
            <MenuItem
              path={paths.bookmarked.path}
              text="Bookmarked"
              iconName={"BookmarkIcon"}
            />
            <MenuItem
              path={paths.subscriptions.path}
              text="Subscription"
              iconName={"ListBulletIcon"}
            />
          </div>

          <div className="mt-14 flex flex-col gap-2">
            {categories !== undefined && !isPending ? (
              [...categories]
                .reverse()
                .map((category) => (
                  <MenuItem
                    path={paths.category.getHref(category.name)}
                    text={category.name}
                    iconName={category.icon_name}
                    key={category.id}
                  />
                ))
            ) : (
              <>
                <MenuItemSkeleton />
                <MenuItemSkeleton />
                <MenuItemSkeleton />
              </>
            )}
          </div>
        </div>
      </aside>
      <Tooltip place="right" id="menu-text" className="block md:hidden" />
    </>
  );
};

const MenuItemSkeleton = () => {
  return (
    <div className="group relative flex animate-pulse items-center justify-center space-x-2 rounded-sm p-2">
      <div className="h-5 w-5 rounded bg-gray-200"></div>
      <div className="hidden h-4 w-24 rounded bg-gray-200 sm:block"></div>
    </div>
  );
};
