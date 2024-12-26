import { Category, Rules, RulesBlock } from "@/features/category";
import { PostCard } from "@/features/post";
import { Tabs } from "@/features/tabs";
import React from "react";

export const CategoryPage: React.FC = () => {
  return (
    <div className="container flex flex-col gap-8 px-4">
      <Tabs
        tabHeader={<Category />}
        tabs={["Posts", "Rules"]}
        contents={[
          <div className="flex flex-row space-x-2">
            <div className="w-3/5 flex-auto space-y-8">
              <PostCard fullWidth />
              <PostCard fullWidth />
              <PostCard fullWidth />
              <PostCard fullWidth />
            </div>
            <div className="hidden w-2/5 flex-none sm:hidden md:block">
              <RulesBlock />
            </div>
          </div>,
          <Rules />,
        ]}
      />
    </div>
  );
};
