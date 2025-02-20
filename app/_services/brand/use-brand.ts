import { ENDPOINTS } from '@/app/_config/endpoints';
import { APIFiltersType, PaginatedResponseType, QueryConfig } from '@/app/_types/api.type';
import { BrandType } from '@/app/_types/brand.type';
import { InfiniteData, QueryKey, useInfiniteQuery, useQuery } from '@tanstack/react-query';
import brandService from './brand.service';

export const useBrands = ({
  filters,
  queryConfig,
}: {
  filters?: APIFiltersType;
  queryConfig?: QueryConfig<PaginatedResponseType<BrandType[]>>;
}) => {
  return useQuery<PaginatedResponseType<BrandType[]>>({
    queryKey: [ENDPOINTS.products, JSON.stringify(filters)],
    queryFn: () => brandService.fetchAll({ filters }),
    ...queryConfig,
  });
};

export const useInfiniteBrands = ({
  filters,
  initialData,
}: {
  filters: APIFiltersType;
  initialData?: InfiniteData<PaginatedResponseType<BrandType[]>, APIFiltersType>;
}) => {
  return useInfiniteQuery<
    PaginatedResponseType<BrandType[]>,
    unknown,
    InfiniteData<PaginatedResponseType<BrandType[]>>,
    QueryKey,
    APIFiltersType
  >({
    queryKey: [ENDPOINTS.brands, JSON.stringify(filters)],
    queryFn: ({ pageParam }) => brandService.fetchAll({ filters: pageParam }),
    initialPageParam: filters,
    initialData,
    placeholderData: (previousData) => previousData,
    getNextPageParam: (lastPage) =>
      lastPage.paginate.last
        ? undefined
        : {
            ...filters,
            page: lastPage.paginate.currentPage + 1,
          },
  });
};
