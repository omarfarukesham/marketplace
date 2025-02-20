import { ENDPOINTS } from '@/app/_config/endpoints';
import { APIFiltersType, QueryConfig } from '@/app/_types/api.type';
import { CategoryFiltersType, CategoryType } from '@/app/_types/category.type';
import { useQuery } from '@tanstack/react-query';
import categoryService from './category.service';

export const useCategories = ({
  filters,
  queryOptions,
}: {
  filters: APIFiltersType;
  queryOptions?: QueryConfig<CategoryType[]>;
}) => {
  return useQuery<CategoryType[]>({
    queryKey: [ENDPOINTS.categories, JSON.stringify(filters)],
    queryFn: () => categoryService.fetchAll({ filters }),
    ...queryOptions,
  });
};

export const useCategoryFilters = ({
  slug,
  queryOptions,
}: {
  slug: string;
  queryOptions?: QueryConfig<CategoryFiltersType>;
}) => {
  return useQuery<CategoryFiltersType>({
    queryKey: [ENDPOINTS.categoryFilters(slug)],
    queryFn: () => categoryService.fetchFilters({ slug }),
    ...queryOptions,
  });
};
