import ProductsGridPaginated from '@/app/_components/product/products-grid-paginated';
import { CategoryFiltersType } from '@/app/_config/filters';
import productService from '@/app/_services/product/product.service';
import { HydrationBoundary } from '@tanstack/react-query';
import CategoryProductsHeader from './category-products-header';

const CategoryProducts = async ({ filters }: { filters: CategoryFiltersType }) => {
  const state = await productService.prefetchAll({ filters });

  return (
    <div className='flex flex-col gap-6 md:w-[82%]'>
      <CategoryProductsHeader />
      <HydrationBoundary state={state}>
        <ProductsGridPaginated<CategoryFiltersType> filters={filters} grid={5} />
      </HydrationBoundary>
    </div>
  );
};

export default CategoryProducts;
