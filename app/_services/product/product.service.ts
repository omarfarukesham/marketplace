import { ENDPOINTS } from '@/app/_config/endpoints';
import { productApi } from '@/app/_lib/api-service';
import catchAsync from '@/app/_lib/catch-async';
import paginatedResponse from '@/app/_models/pageable.model';
import productModel from '@/app/_models/product.model';
import reviewModel from '@/app/_models/review.model';
import { APIFiltersType, PaginatedResponseType } from '@/app/_types/api.type';
import { ProductType } from '@/app/_types/product.type';
import { _ReviewType } from '@/app/_types/review.type';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import authService from '../auth/auth.service';

export type CreateReviewPayload = {
  rating: string;
  review: string;
  images: {
    url: string;
  }[];
  productId: string;
};

export class ProductService {
  fetch = async ({ slug }: { slug: string }) => {
    const data = await productApi.get(ENDPOINTS.product(slug), { config: { cache: 'no-store' } });
    return productModel(data?.data?.content[0]);
  };

  get = catchAsync<ProductType>(this.fetch);

  fetchAll = async ({ filters }: { filters?: APIFiltersType }) => {
    const data = await productApi.get(ENDPOINTS.products, { filters });

    return paginatedResponse<ProductType[]>(data?.data, productModel);
  };

  getAll = catchAsync<PaginatedResponseType<ProductType[]>, { filters?: APIFiltersType }>(this.fetchAll);

  prefetchAll = async ({ filters }: { filters?: APIFiltersType } = {}) => {
    const queryClient = new QueryClient();

    await queryClient.prefetchInfiniteQuery({
      queryKey: [ENDPOINTS.products, JSON.stringify(filters)],
      queryFn: () => this.fetchAll({ filters }),
      initialPageParam: filters,
    });

    return dehydrate(queryClient);
  };

  fetchRelevant = async ({
    id,
    type,
    filters,
  }: {
    id: string;
    type: 'RELATED' | 'RECOMMENDED' | 'CROSS_SELL';
    filters?: APIFiltersType;
  }) => {
    const data = await productApi.get(ENDPOINTS.relevantProducts(id), {
      filters: {
        type,
        ...filters,
      },
    });
    return paginatedResponse<ProductType[]>(data?.data?.content?.[0]?.relevantProducts, productModel);
  };

  fetchReviews = async ({ productId, filters }: { productId: string; filters?: APIFiltersType }) => {
    const data = await productApi.get(ENDPOINTS.reviews(productId), { filters });
    return paginatedResponse<_ReviewType[]>(data?.data, reviewModel);
  };

  createReview = catchAsync(async ({ reviewInfo }: { reviewInfo: CreateReviewPayload }) => {
    const token = authService.getToken();
    if (!token) return toast.error('Please login first.');

    const data = await productApi.post(ENDPOINTS.createReview, reviewInfo, {
      config: {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    });
    return data;
  });

  checkIfReviewExists = async ({ productId }: { productId: string }) => {
    const token = authService.getToken();
    if (!token) return;

    const data = await productApi.get(ENDPOINTS.isReviewExists(productId), {
      config: {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    });

    return data.data?.content?.[0]?.isExist;
  };
}

const productService = new ProductService();
export default productService;
