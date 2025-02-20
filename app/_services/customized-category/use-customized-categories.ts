import { ENDPOINTS } from '@/app/_config/endpoints';
import { APIFiltersType, PaginatedResponseType } from '@/app/_types/api.type';
import { CustomizedCategoryType } from '@/app/_types/category.type';
import { InfiniteData, QueryKey, useInfiniteQuery, useQuery } from '@tanstack/react-query';
import customizedCategoryService from './customized-categories.service';

export const useCustomizedCategories = ({ filters }: { filters?: APIFiltersType } = {}) => {
  return useQuery<PaginatedResponseType<CustomizedCategoryType[]>>({
    queryKey: [ENDPOINTS.customizedCategories, JSON.stringify(filters)],
    queryFn: () => customizedCategoryService.fetchAll({ filters }),
  });
};

export const useCustomizedCategory = ({ slug }: { slug: string }) => {
  return useQuery<CustomizedCategoryType | undefined>({
    queryKey: [ENDPOINTS.customizedCategory(slug)],
    queryFn: () => customizedCategoryService.fetch({ slug }),
    enabled: !!slug,
  });
};

export const useInfiniteCustomizedCategories = ({ filters }: { filters: APIFiltersType }) => {
  return useInfiniteQuery<
    PaginatedResponseType<CustomizedCategoryType[]>,
    unknown,
    InfiniteData<PaginatedResponseType<CustomizedCategoryType[]>>,
    QueryKey,
    APIFiltersType
  >({
    queryKey: [ENDPOINTS.customizedCategories, JSON.stringify(filters)],
    queryFn: ({ pageParam: filters }) => customizedCategoryService.fetchAll({ filters }),
    initialPageParam: filters,
    getNextPageParam: (lastPage) =>
      lastPage.paginate.last
        ? undefined
        : {
            ...filters,
            page: lastPage.paginate.currentPage + 1,
          },
  });
};

export const useCustomizedCategoryInfiniteProducts = ({
  slug,
  filters,
  initialData,
}: {
  slug: string;
  filters: APIFiltersType;
  initialData?: InfiniteData<CustomizedCategoryType, APIFiltersType>;
}) => {
  return useInfiniteQuery<
    CustomizedCategoryType,
    unknown,
    InfiniteData<CustomizedCategoryType>,
    QueryKey,
    APIFiltersType
  >({
    queryKey: [ENDPOINTS.customizedCategory(slug), JSON.stringify(filters)],
    queryFn: ({ pageParam }) => customizedCategoryService.fetch({ slug, filters: pageParam }),
    initialPageParam: filters,
    enabled: !!slug,
    initialData,
    placeholderData: (previousData) => previousData,
    getNextPageParam: (lastPage) =>
      lastPage.products?.paginate.last
        ? undefined
        : {
            ...filters,
            page: lastPage.products!.paginate.currentPage + 1,
          },
  });
};
