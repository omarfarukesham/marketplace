import { ENDPOINTS } from '@/app/_config/endpoints';
import { API, categoryApi } from '@/app/_lib/api-service';
import catchAsync from '@/app/_lib/catch-async';
import { APIFiltersType } from '@/app/_types/api.type';
import { CategoryFiltersType, CategoryType } from '@/app/_types/category.type';
import categoryModel, { categoryFiltersModel } from '../../_models/category.model';

export class CategoryService {
  constructor(private api: API) {}

  fetch = async ({ slug }: { slug: string }) => {
    const data = await this.api.get(ENDPOINTS.category(slug));
    return categoryModel(data?.data?.content[0]);
  };

  get = catchAsync<CategoryType, { slug: string }>(this.fetch);

  fetchAll = async ({ filters }: { filters?: APIFiltersType }) => {
    const data = await this.api.get(ENDPOINTS.categories, { filters });

    return data?.data?.content?.map((category: CategoryType) => categoryModel(category));
  };

  getAll = catchAsync<CategoryType[]>(this.fetchAll);

  fetchFilters = async ({ slug }: { slug: string }) => {
    const data = await this.api.get(ENDPOINTS.categoryFilters(slug));
    return categoryFiltersModel(data?.data?.content?.[0]);
  };

  getFilters = catchAsync<CategoryFiltersType, { slug: string }>(this.fetchFilters);
}

const categoryService = new CategoryService(categoryApi);
export default categoryService;
