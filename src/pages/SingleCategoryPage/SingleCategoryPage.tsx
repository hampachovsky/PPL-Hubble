import { Spinner } from "@/components";
import { constants } from "@/config";
import { CategoryHeader, RulesBlock, useCategory } from "@/features/category";
import { PostCard, useCategoryPosts } from "@/features/post";
import { Tabs } from "@/features/tabs";
import React from "react";
import { useParams } from "react-router";

export const SingleCategoryPage: React.FC = () => {
  const { category: categoryName } = useParams();
  const { category, isPending } = useCategory(categoryName!);
  const { posts, isPending: isPostPending } = useCategoryPosts(
    category?.id || null
  );

  if (isPending || !category) return <Spinner />;
  return (
    <div className="container flex flex-col gap-8 px-4">
      <Tabs
        tabHeader={<CategoryHeader category={category} />}
        tabs={constants.CATEGORY_TABS}
        contents={[
          <div className="flex flex-row space-x-2">
            <div className="w-3/5 flex-auto space-y-8">
              {isPostPending ? (
                <Spinner />
              ) : (
                <>
                  {!posts || !posts.length ? (
                    <>
                      <h1 className="mt-12 border-b border-gray-600 pb-2 text-center text-3xl font-semibold text-red-100">
                        No posts found
                      </h1>
                    </>
                  ) : (
                    posts?.map((post) => (
                      <PostCard key={post.id} post={post} fullWidth />
                    ))
                  )}
                </>
              )}
            </div>
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
