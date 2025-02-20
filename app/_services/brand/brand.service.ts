import { ENDPOINTS } from '@/app/_config/endpoints';
import { productApi } from '@/app/_lib/api-service';
import catchAsync from '@/app/_lib/catch-async';
import brandModel, { brandCategoryModel } from '@/app/_models/brand.model';
import paginatedResponse from '@/app/_models/pageable.model';
import { APIFiltersType, PaginatedResponseType } from '@/app/_types/api.type';
import { BrandType } from '@/app/_types/brand.type';
import { StoreCategoryType } from '@/app/_types/store.type';
import { QueryClient, dehydrate } from '@tanstack/react-query';

export class BrandService {
  fetch = async ({ slug }: { slug: string }) => {
    const data = await productApi.get(ENDPOINTS.brand(slug), {
      config: {
        cache: 'no-store',
      },
    });

    return brandModel(data?.data?.content[0]);
  };

  get = catchAsync<BrandType, { slug: string }>(this.fetch);

  fetchAll = async ({ filters }: { filters?: APIFiltersType }) => {
    const data = await productApi.get(ENDPOINTS.brands, {
      filters,
      config: {
        cache: 'no-store',
      },
    });

    return paginatedResponse<BrandType[]>(data?.data, brandModel);
  };

  getAll = catchAsync<PaginatedResponseType<BrandType[]>, { filters: APIFiltersType }>(this.fetchAll);

  prefetchAll = async ({ filters }: { filters?: APIFiltersType } = {}) => {
    const queryClient = new QueryClient();

    await queryClient.prefetchInfiniteQuery({
      queryKey: [ENDPOINTS.brands, JSON.stringify(filters)],
      queryFn: () => this.fetchAll({ filters }),
      initialPageParam: filters,
    });

    return dehydrate(queryClient);
  };

  fetchCategories = async ({ brandId }: { brandId: string }) => {
    const data = await productApi.get(ENDPOINTS.brandCategories(brandId), { config: { cache: 'no-store' } });

    return data?.data?.content?.map((category: StoreCategoryType) => brandCategoryModel(category));
  };

  getCategories = catchAsync<StoreCategoryType[], { brandId: string }>(this.fetchCategories);
}

const brandService = new BrandService();
export default brandService;
