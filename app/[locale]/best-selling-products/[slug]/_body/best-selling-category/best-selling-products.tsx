import CategoryProductsHeader from '@/app/[locale]/categories/[slug]/_body/category-products/category-products-header';
import { BaseFiltersType } from '@/app/_config/filters';
import bestSellingProductService from '@/app/_services/product/best-selling-products.service';
import { HydrationBoundary } from '@tanstack/react-query';
import BestSellingProductsList from './best-selling-products-list';

const BestSellingProducts = async ({ slug, filters }: { slug: string; filters: BaseFiltersType }) => {
  const state = await bestSellingProductService.prefetchAll({ slug, filters });

  return (
    <div className='flex flex-col gap-6 md:w-[82%]'>
      <CategoryProductsHeader />
      <HydrationBoundary state={state}>
        <BestSellingProductsList slug={slug} filters={filters} />
      </HydrationBoundary>
    </div>
  );
};

export default BestSellingProducts;
