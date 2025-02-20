import { BrandCategoryType, BrandType } from '../_types/brand.type';

function brandModel(data: any): BrandType {
  return {
    id: data.id,
    name: data.name,
    logo: data.logo,
    slug: data.brandSlug,
    description: data.description,
  };
}

export const brandCategoryModel = (data: any): BrandCategoryType => {
  return {
    id: data?.id,
    name: data?.name,
    slug: data?.slug,
    thumbnail: data?.thumbnail,
  };
};

export default brandModel;
