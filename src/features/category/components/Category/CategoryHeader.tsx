import { Banner, NamedIcon } from "@/components";
import { Category } from "@/types/api";
import React from "react";

interface CategoryHeaderProps {
  category: Category;
}

export const CategoryHeader: React.FC<CategoryHeaderProps> = ({ category }) => {
  return (
    <>
      <Banner imageURL={category.image_url} />
      <div className="p-4">
        <div className="flex items-center gap-2">
          <NamedIcon
            iconName={category.icon_name}
            className="h-5 w-5 flex-shrink-0 text-cyan-500"
          />
          <h5 className="text-xl">{category.name}</h5>
        </div>
        <div>
          <p className="text-wrap">{category.description}</p>
        </div>
      </div>
    </>
  );
};
