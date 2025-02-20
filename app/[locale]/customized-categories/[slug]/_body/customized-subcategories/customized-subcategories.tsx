import customizedCategoryService from '@/app/_services/customized-category/customized-categories.service';
import CustomizedSubCategoryItems from './customized-subcategory-items';

const CustomizedSubcategories = async ({ categoryId }: { categoryId: number }) => {
  const { data: subcategories } = await customizedCategoryService.getAll({
    filters: { customizedParentCategoryId: categoryId, status: 'ACTIVE' },
  });

  if (!subcategories?.items.length) return null;

  return <CustomizedSubCategoryItems subCategories={subcategories.items} />;
};

export default CustomizedSubcategories;
