import { formatHierarchy } from '../_lib/format-hierarchy';
import { CustomizedCategoryType } from '../_types/category.type';
import { ProductType } from '../_types/product.type';
import paginatedResponse from './pageable.model';
import productModel from './product.model';

function customizedCategoryModel(data: any): CustomizedCategoryType {
  const customizedCategoryHierarchy = formatHierarchy(data.categoryHierarchy);
  return {
    id: data.id,
    slug: data.slug,
    code: data.code,
    name: data.name,
    icon: data.icon,
    thumbnail: data.thumbnail,
    products: data.products ? paginatedResponse<ProductType[]>(data.products, productModel) : undefined,
    customizedCategoryId: data.customizedCategoryId,
    description: data.description,
    productPoolId: data.productPoolId,
    hierarchy: customizedCategoryHierarchy,
    isFeatured: data.isFeatured,
    isRecommended: data.isRecommended,
  };
}

export default customizedCategoryModel;
