import { CategoryType } from '@/app/_types/category.type';

export const subcategoryFilters = (activeCategory?: CategoryType) => {
  const filters: { parentCategoryId: number | ''; isFeatured?: boolean } = {
    parentCategoryId: activeCategory?.categoryId || '',
  };
  if (activeCategory?.id === '1') filters.isFeatured = true;

  const options = { enabled: !!activeCategory?.id };

  return { filters, options };
};
