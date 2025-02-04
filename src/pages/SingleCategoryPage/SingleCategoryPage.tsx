import { Spinner } from "@/components";
import { constants, paths } from "@/config";
import { useUser } from "@/features/auth";
import { CategoryHeader, RulesBlock, useCategory } from "@/features/category";
import { Tabs } from "@/features/tabs";
import { usePostsRenderer } from "@/hooks/usePostsRenderer";
import React from "react";
import { Navigate, useParams } from "react-router";

export const SingleCategoryPage: React.FC = () => {
  const { category: categoryName } = useParams();
  const { category, isPending } = useCategory(categoryName!);
  const { user } = useUser();

  const { renderPosts } = usePostsRenderer({
    input_category_id: category?.id ? +category.id : null,
    input_user_id: user?.id ?? null,
    input_type: "category",
    profile_user_id: null,
  });
  if (isPending) return <Spinner />;

  if (!category) return <Navigate to={paths.notFound.path} />;

  return (
    <div className="container flex flex-col gap-8 px-4">
      <Tabs
        tabHeader={<CategoryHeader category={category} />}
        tabs={constants.CATEGORY_TABS}
        contents={[
          <div className="flex flex-row space-x-2">
            <div className="w-3/5 flex-auto space-y-8">{renderPosts()}</div>
            <div className="hidden w-2/5 flex-none sm:hidden md:block">
              <RulesBlock rules={category.rules} />
            </div>
          </div>,
          <RulesBlock rules={category.rules} />,
        ]}
      />
    </div>
  );
};
