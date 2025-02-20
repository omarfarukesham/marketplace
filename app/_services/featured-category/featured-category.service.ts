import { ENDPOINTS } from '@/app/_config/endpoints';
import { globalConfigApi } from '@/app/_lib/api-service';
import catchAsync from '@/app/_lib/catch-async';
import shelfModel from '@/app/_models/shelf.model';
import { APIFiltersType } from '@/app/_types/api.type';
import { ShelfType } from '@/app/_types/shelf.type';
import { QueryClient, dehydrate } from '@tanstack/react-query';

export class FeaturedCategoryService {
  fetch = async ({ code, filters }: { code: string; filters?: APIFiltersType }) => {
    const data = await globalConfigApi.get(ENDPOINTS.featuredCategory(code), {
      filters,
      config: {
        cache: 'no-store',
      },
    });

    return shelfModel(data.data?.content[0]);
  };

  get = catchAsync<ShelfType>(this.fetch);

  prefetch = async ({ code, filters }: { code: string; filters?: APIFiltersType }) => {
    const queryClient = new QueryClient();

    await queryClient.prefetchInfiniteQuery({
      queryKey: [ENDPOINTS.products, JSON.stringify(filters)],
      queryFn: () => this.fetch({ code, filters }),
      initialPageParam: filters,
    });

    return dehydrate(queryClient);
  };
}

const featuredCategoryService = new FeaturedCategoryService();
export default featuredCategoryService;
