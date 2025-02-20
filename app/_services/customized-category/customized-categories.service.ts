import { globalConfigApi } from '@/app/_lib/api-service';
import paginatedResponse from '@/app/_models/pageable.model';
import { APIFiltersType, PaginatedResponseType } from '@/app/_types/api.type';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import { ENDPOINTS } from '../../_config/endpoints';
import catchAsync from '../../_lib/catch-async';
import customizedCategoryModel from '../../_models/customized-category.model';
import { CustomizedCategoryType } from '../../_types/category.type';

export class CustomizedCategoryService {
  fetch = async ({ slug, filters = {} }: { slug: string; filters?: APIFiltersType }) => {
    const data = await globalConfigApi.get(ENDPOINTS.customizedCategory(slug), {
      filters,
      config: {
        cache: 'no-store',
      },
    });

    return customizedCategoryModel(data?.data?.content[0]);
  };

  get = catchAsync<CustomizedCategoryType, { slug: string; filters?: APIFiltersType }>(this.fetch);

  fetchAll = async ({ filters }: { filters?: APIFiltersType }) => {
    const data = await globalConfigApi.get(ENDPOINTS.customizedCategories, {
      filters,
      config: {
        cache: 'no-store',
      },
    });

    return paginatedResponse<CustomizedCategoryType[]>(data.data, customizedCategoryModel);
  };

  getAll = catchAsync<PaginatedResponseType<CustomizedCategoryType[]>, { filters?: APIFiltersType }>(this.fetchAll);

  prefetchAll = async ({ filters }: { filters?: APIFiltersType } = {}) => {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
      queryKey: [ENDPOINTS.customizedCategories, JSON.stringify(filters)],
      queryFn: () => this.fetchAll({ filters }),
    });

    return dehydrate(queryClient);
  };
}

const customizedCategoryService = new CustomizedCategoryService();
export default customizedCategoryService;
