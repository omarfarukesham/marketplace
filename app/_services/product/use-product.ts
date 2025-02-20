import { ENDPOINTS } from '@/app/_config/endpoints';
import { APIFiltersType, PaginatedResponseType, QueryConfig } from '@/app/_types/api.type';
import { ProductType } from '@/app/_types/product.type';
import { InfiniteData, QueryKey, useInfiniteQuery, useQuery } from '@tanstack/react-query';
import bestSellingProductService from './best-selling-products.service';
import productService from './product.service';

export const useProducts = ({
  filters,
  queryConfig,
}: { filters?: APIFiltersType; queryConfig?: QueryConfig<PaginatedResponseType<ProductType[]>> } = {}) => {
  return useQuery<PaginatedResponseType<ProductType[]>>({
    queryKey: [ENDPOINTS.products, JSON.stringify(filters)],
    queryFn: () => productService.fetchAll({ filters }),
    ...queryConfig,
  });
};

export const useProduct = ({
  slug,
  filters,
  queryConfig,
}: {
  slug: string;
  filters?: APIFiltersType;
  queryConfig?: QueryConfig<ProductType>;
}) => {
  return useQuery<ProductType>({
    queryKey: [ENDPOINTS.product(slug), JSON.stringify(filters)],
    queryFn: () => productService.fetch({ slug }),
    ...queryConfig,
  });
};

export const useInfiniteProducts = ({ filters }: { filters: APIFiltersType }) => {
  return useInfiniteQuery<
    PaginatedResponseType<ProductType[]>,
    unknown,
    InfiniteData<PaginatedResponseType<ProductType[]>>,
    QueryKey,
    APIFiltersType
  >({
    queryKey: [ENDPOINTS.products, JSON.stringify(filters)],
    queryFn: ({ pageParam: filters }) => productService.fetchAll({ filters }),
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

export const useBestSellingProducts = ({
  slug,
  filters = {},
  queryConfig,
}: {
  slug: string;
  filters?: APIFiltersType;
  queryConfig?: QueryConfig<PaginatedResponseType<ProductType[]>>;
}) => {
  return useQuery<PaginatedResponseType<ProductType[]>>({
    queryKey: [ENDPOINTS.bestSellingProducts(slug), JSON.stringify(filters)],
    queryFn: () => bestSellingProductService.fetchAll({ slug, filters }),
    ...queryConfig,
  });
};

export const useInfiniteBestSellingProducts = ({ slug, filters }: { slug: string; filters: APIFiltersType }) => {
  return useInfiniteQuery<
    PaginatedResponseType<ProductType[]>,
    unknown,
    InfiniteData<PaginatedResponseType<ProductType[]>>,
    QueryKey,
    APIFiltersType
  >({
    queryKey: [ENDPOINTS.bestSellingProducts(slug), JSON.stringify(filters)],
    queryFn: ({ pageParam: filters }) => bestSellingProductService.fetchAll({ slug, filters }),
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

export const useRelevantProducts = ({
  id,
  type,
  filters,
  queryConfig,
}: {
  id: string;
  type: 'RELATED' | 'RECOMMENDED' | 'CROSS_SELL';
  filters?: APIFiltersType;
  queryConfig?: QueryConfig<PaginatedResponseType<ProductType[]>>;
}) => {
  return useQuery<PaginatedResponseType<ProductType[]>>({
    queryKey: [ENDPOINTS.relevantProducts(id), type, JSON.stringify(filters)],
    queryFn: () => productService.fetchRelevant({ id, type, filters }),
    ...queryConfig,
  });
};

export const useInfiniteRelevantProducts = ({
  id,
  type,
  filters,
}: {
  id: string;
  type: 'RELATED' | 'RECOMMENDED' | 'CROSS_SELL';
  filters: APIFiltersType;
}) => {
  return useInfiniteQuery<
    PaginatedResponseType<ProductType[]>,
    unknown,
    InfiniteData<PaginatedResponseType<ProductType[]>>,
    QueryKey,
    APIFiltersType
  >({
    queryKey: [ENDPOINTS.relevantProducts(id), type, JSON.stringify(filters)],

    queryFn: (options) => {
      return productService.fetchRelevant({ id, type, filters: { ...filters, page: options.pageParam.page } });
    },

    initialPageParam: filters,
    getNextPageParam: (lastPage) => {
      return lastPage.paginate.last
        ? undefined
        : {
            ...filters,
            page: lastPage.paginate.currentPage + 1,
          };
    },
  });
};
