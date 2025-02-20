import { ENDPOINTS } from '@/app/_config/endpoints';
import catchAsync from '@/app/_lib/catch-async';
import paginatedResponse from '@/app/_models/pageable.model';
import storeModel, { storeCategoryModel } from '@/app/_models/store.model';
import { APIFiltersType, PaginatedResponseType } from '@/app/_types/api.type';

import { SellerRegistrationDataType } from '@/app/[locale]/seller/registration/page';
import { OTP_ACTION_TYPE } from '@/app/_config/constants';
import { productApi, storeApi } from '@/app/_lib/api-service';
import { StoreCategoryType, StoreType } from '@/app/_types/store.type';
import { QueryClient, dehydrate } from '@tanstack/react-query';

export class StoreService {
  fetch = async ({ slug }: { slug: string }) => {
    const data = await storeApi.get(ENDPOINTS.seller(slug));
    return storeModel(data?.data?.content[0]);
  };

  get = catchAsync<StoreType, { slug: string }>(this.fetch);

  fetchAll = async ({ filters }: { filters?: APIFiltersType }) => {
    const data = await storeApi.get(ENDPOINTS.sellers, { filters, config: { cache: 'no-store' } });

    return paginatedResponse<StoreType[]>(data?.data, storeModel);
  };

  getAll = catchAsync<PaginatedResponseType<StoreType[]>>(this.fetchAll);

  prefetchAll = async ({ filters }: { filters?: APIFiltersType } = {}) => {
    const queryClient = new QueryClient();

    await queryClient.prefetchInfiniteQuery({
      queryKey: [ENDPOINTS.products, JSON.stringify(filters)],
      queryFn: () => this.fetchAll({ filters }),
      initialPageParam: filters,
    });

    return dehydrate(queryClient);
  };

  fetchCategories = async ({ sellerId }: { sellerId: string }) => {
    const data = await productApi.get(ENDPOINTS.sellerCategories(sellerId));
    return data?.data?.content?.map((category: StoreCategoryType) => storeCategoryModel(category));
  };

  getCategories = catchAsync<StoreCategoryType[], { sellerId: string }>(this.fetchCategories);

  fetchRecommended = async () => {
    const data = await storeApi.get(ENDPOINTS.recommendedSellers);
    return data.data?.content.map((seller: StoreType) => storeModel(seller));
  };

  getRecommended = catchAsync<StoreType[]>(this.fetchRecommended);

  registrationPost = async (sellerInfo: SellerRegistrationDataType) => {
    const data = await storeApi.post(ENDPOINTS.sellerRegistration, {
      ...sellerInfo,
      actionType: OTP_ACTION_TYPE.registration,
    });
    return data;
  };

  registration = catchAsync(this.registrationPost);
}

const storeService = new StoreService();
export default storeService;
