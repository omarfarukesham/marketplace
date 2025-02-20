import categoryService from '@/app/_services/category/category.service';
import SubCategoryItems from './subcategory-items';

const Subcategories = async ({ categoryId }: { categoryId: number }) => {
  const { data: subcategories } = await categoryService.getAll({ filters: { parentCategoryId: categoryId } });

  if (!subcategories?.length) return null;

  return <SubCategoryItems subCategories={subcategories} />;
};

export default Subcategories;
