import brandService from '@/app/_services/brand/brand.service';
import BrandCategoryItems from './brand-category-items';

const BrandCategories = async ({ brandId }: { brandId: string }) => {
  const { data: categories } = await brandService.getCategories({ brandId });

  if (!categories?.length) return null;

  return <BrandCategoryItems categories={categories} />;
};

export default BrandCategories;
