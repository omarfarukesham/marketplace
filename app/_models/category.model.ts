import { ProductType } from '@/app/_types/product.type';
import { formatHierarchy } from '../_lib/format-hierarchy';
import { CategoryFiltersType, CategoryType } from '../_types/category.type';
import productModel from './product.model';

function categoryModel(data: any = {}): CategoryType {
  const categoryHierarchy = formatHierarchy(data?.categoryHierarchy);

  return {
    slug: data?.categorySlug,

    id: data?.id,
    categoryId: data?.categoryId,
    icon: data?.icon,
    thumbnail: data?.thumbnail,
    status: data?.status,
    createdAt: data?.createdAt,
    createdBy: data?.createdBy,
    updatedAt: data?.updatedAt,
    updatedBy: data?.updatedBy,
    name: data?.name || data?.categoryName,
    parentCategoryId: data?.parentCategoryId,
    parentCategoryName: data?.parentCategoryName,
    description: data?.description,
    bannerImage: data?.bannerImage,
    isVisibleInMenu: data?.isVisibleInMenu,
    isVisibleInHeader: data?.isVisibleInHeader,
    isVisibleInCategorySlider: data?.isVisibleInCategorySlider,
    isFeatured: data?.isFeatured,
    activeMarkets: data?.activeMarkets,
    hierarchy: categoryHierarchy,
    products: data?.products?.map((product: ProductType) => productModel(product)),
  };
}

export function categoryFiltersModel(data: any = {}): CategoryFiltersType {
  return {
    brands: data?.brands,
    filterOptions: data?.filterOptions?.map((filterOption: any) => ({
      ...filterOption,
      options: filterOption.options.map((option: any) => ({
        ...option,
        value: `${option.min}-${option.max}`,
      })),
    })),
  };
}

export default categoryModel;
