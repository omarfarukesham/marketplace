import { ENDPOINTS } from '@/app/_config/endpoints';
import { globalConfigApi } from '@/app/_lib/api-service';
import catchAsync from '@/app/_lib/catch-async';
import shelfModel from '@/app/_models/shelf.model';
import { APIFiltersType } from '@/app/_types/api.type';
import { ShelfType } from '@/app/_types/shelf.type';

export class FeaturedProductService {
  fetchAll = async ({ filters }: { filters?: APIFiltersType }) => {
    const data = await globalConfigApi.get(ENDPOINTS.featuredProducts, {
      filters,
      config: {
        cache: 'no-store',
      },
    });

    return data?.data?.content?.map((product: ShelfType) => shelfModel(product));
  };

  getAll = catchAsync<ShelfType[], { filters?: APIFiltersType }>(this.fetchAll);

  fetch = async ({ code }: { code: string }) => {
    const data = await globalConfigApi.get(ENDPOINTS.featuredProduct(code), {
      config: {
        cache: 'no-store',
      },
    });

    return shelfModel(data.data?.content[0]);
  };

  get = catchAsync<ShelfType, { code: string }>(this.fetch);
}

const featuredProductService = new FeaturedProductService();
export default featuredProductService;
