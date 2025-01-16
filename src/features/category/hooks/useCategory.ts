import { useCategories } from "@/features/category";

export const useCategory = (categoryName: string) => {
  const { categories, isPending } = useCategories();

  const category = categories?.find((cat) => cat.name === categoryName);

  return { category, isPending };
};
