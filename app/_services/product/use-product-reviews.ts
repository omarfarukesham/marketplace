import { ENDPOINTS } from '@/app/_config/endpoints';
import { APIFiltersType, PaginatedResponseType, QueryConfig } from '@/app/_types/api.type';
import { _ReviewType } from '@/app/_types/review.type';
import { InfiniteData, QueryKey, useInfiniteQuery, useQuery } from '@tanstack/react-query';
import authService from '../auth/auth.service';
import productService from './product.service';

export const useProductReviews = ({
  productId,
  filters,
  queryConfig,
}: {
  productId: string;
  filters?: APIFiltersType;
  queryConfig?: QueryConfig<PaginatedResponseType<_ReviewType[]>>;
}) => {
  return useQuery<PaginatedResponseType<_ReviewType[]>>({
    queryKey: [ENDPOINTS.reviews(productId), JSON.stringify(filters)],
    queryFn: () => productService.fetchReviews({ productId, filters }),
    ...queryConfig,
  });
};

export const useInfiniteProductReviews = ({ productId, filters }: { productId: string; filters: APIFiltersType }) => {
  return useInfiniteQuery<
    PaginatedResponseType<_ReviewType[]>,
    unknown,
    InfiniteData<PaginatedResponseType<_ReviewType[]>>,
    QueryKey,
    APIFiltersType
  >({
    queryKey: [ENDPOINTS.reviews(productId), JSON.stringify(filters)],

    queryFn: (options) => {
      return productService.fetchReviews({ productId, filters: { ...filters, page: options.pageParam.page } });
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

export const useIsReviewExists = ({ productId }: { productId: string }) => {
  const token = authService.getToken();

  return useQuery({
    queryKey: [ENDPOINTS.isReviewExists(productId), token],
    queryFn: () => productService.checkIfReviewExists({ productId }),
  });
};
