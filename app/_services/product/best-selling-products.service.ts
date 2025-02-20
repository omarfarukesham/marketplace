import { ENDPOINTS } from '@/app/_config/endpoints';
import { globalConfigApi } from '@/app/_lib/api-service';
import catchAsync from '@/app/_lib/catch-async';
import categoryModel from '@/app/_models/category.model';
import paginatedResponse from '@/app/_models/pageable.model';
import productModel from '@/app/_models/product.model';
import { APIFiltersType, PaginatedResponseType } from '@/app/_types/api.type';
import { CategoryType } from '@/app/_types/category.type';
import { ProductType } from '@/app/_types/product.type';
import { QueryClient, dehydrate } from '@tanstack/react-query';

export class BestSellingProductService {
  fetchCategories = async ({ filters }: { filters?: APIFiltersType }) => {
    const data = await globalConfigApi.get(ENDPOINTS.bestSellingProductsGroup, {
      filters,
      config: { cache: 'no-store' },
    });

    return data?.data?.content?.map((category: CategoryType) => categoryModel(category));
  };

  getCategories = catchAsync<CategoryType[], { filters?: APIFiltersType }>(this.fetchCategories);

  fetchAll = async ({ slug, filters }: { slug: string; filters: APIFiltersType }) => {
    const data = await globalConfigApi.get(ENDPOINTS.bestSellingProducts(slug), {
      filters,
      config: {
        cache: 'no-store',
      },
    });

    return paginatedResponse<ProductType[]>(data?.data, productModel);
  };

  getAll = catchAsync<PaginatedResponseType<ProductType[]>, { slug: string; filters: APIFiltersType }>(this.fetchAll);

  prefetchAll = async ({ slug, filters }: { slug: string; filters: APIFiltersType }) => {
    const queryClient = new QueryClient();

    await queryClient.prefetchInfiniteQuery({
      queryKey: [ENDPOINTS.bestSellingProducts(slug), JSON.stringify(filters)],
      queryFn: () => this.fetchAll({ slug, filters }),
      initialPageParam: filters,
    });

    return dehydrate(queryClient);
  };
}

const bestSellingProductService = new BestSellingProductService();
export default bestSellingProductService;
