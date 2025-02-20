import CategoryProductsHeader from '@/app/[locale]/categories/[slug]/_body/category-products/category-products-header';
import { CustomizedCategoryFiltersType } from '@/app/_config/filters';
import { CustomizedCategoryType } from '@/app/_types/category.type';
import CategoryProductsList from './customized-category-products-list';

const CustomizedCategoryProducts = async ({
  filters,
  customizedCategory,
}: {
  filters: CustomizedCategoryFiltersType;
  customizedCategory: CustomizedCategoryType;
}) => {
  return (
    <div className='flex flex-col gap-6 md:w-[82%]'>
      <CategoryProductsHeader />
      <CategoryProductsList filters={filters} customizedCategory={customizedCategory} />
    </div>
  );
};

export default CustomizedCategoryProducts;
