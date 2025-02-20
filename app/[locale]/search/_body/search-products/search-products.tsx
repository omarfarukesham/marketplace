import { BaseFiltersType } from '@/app/_config/filters';
import productService from '@/app/_services/product/product.service';
import { HydrationBoundary } from '@tanstack/react-query';
import SearchProductsHeader from './search-products-header';
import SearchProductsList from './search-products-list';

const SearchProducts = async ({ filters, query }: { filters: BaseFiltersType; query: string }) => {
  const state = await productService.prefetchAll({ filters });

  return (
    <div className='flex flex-col gap-6 md:w-[82%]'>
      <SearchProductsHeader query={query} />
      <HydrationBoundary state={state}>
        <SearchProductsList filters={filters} />
      </HydrationBoundary>
    </div>
  );
};

export default SearchProducts;
