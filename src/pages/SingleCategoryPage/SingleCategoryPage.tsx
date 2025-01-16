import { Spinner } from "@/components";
import { constants } from "@/config";
import { CategoryHeader, RulesBlock, useCategory } from "@/features/category";
import { PostCard } from "@/features/post";
import { Tabs } from "@/features/tabs";
import React from "react";
import { useParams } from "react-router";

export const SingleCategoryPage: React.FC = () => {
  const { category: categoryName } = useParams();
  const { category, isPending } = useCategory(categoryName!);
  console.log(category);
  if (isPending) return <Spinner />;
  return (
    <div className="container flex flex-col gap-8 px-4">
      <Tabs
        tabHeader={<CategoryHeader />}
        tabs={constants.CATEGORY_TABS}
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
          <RulesBlock />,
        ]}
      />
    </div>
  );
};
