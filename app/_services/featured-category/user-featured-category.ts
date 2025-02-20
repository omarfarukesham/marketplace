import { ENDPOINTS } from '@/app/_config/endpoints';
import { APIFiltersType, QueryConfig } from '@/app/_types/api.type';
import { ShelfType } from '@/app/_types/shelf.type';
import { InfiniteData, QueryKey, useInfiniteQuery, useQuery } from '@tanstack/react-query';
import featuredCategoryService from './featured-category.service';

export const useFeaturedCategory = ({
  code,
  queryOptions,
}: {
  code: string;
  queryOptions?: QueryConfig<ShelfType>;
}) => {
  return useQuery<ShelfType>({
    queryKey: [ENDPOINTS.featuredCategory(code)],
    queryFn: () => featuredCategoryService.fetch({ code }),
    ...queryOptions,
  });
};

export const useInfiniteFeaturedCategory = ({
  code,
  filters,
  initialData,
}: {
  code: string;
  filters: APIFiltersType;
  initialData?: InfiniteData<ShelfType, APIFiltersType>;
}) => {
  return useInfiniteQuery<ShelfType, unknown, InfiniteData<ShelfType>, QueryKey, APIFiltersType>({
    queryKey: [ENDPOINTS.featuredCategory(code), JSON.stringify(filters)],
    queryFn: ({ pageParam: filters }) => featuredCategoryService.fetch({ code, filters }),
    initialPageParam: filters,
    initialData,
    getNextPageParam: (lastPage) => {
      const products = lastPage?.products;
      if (!products) return;

      return products.paginate.last
        ? undefined
        : {
            ...filters,
            page: products.paginate.currentPage + 1,
          };
    },
  });
};
