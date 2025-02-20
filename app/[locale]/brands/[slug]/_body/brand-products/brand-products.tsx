import { BrandFiltersType } from '@/app/_config/filters';
import productService from '@/app/_services/product/product.service';
import { BrandType } from '@/app/_types/brand.type';
import { HydrationBoundary } from '@tanstack/react-query';
import BrandProductsHeader from './brand-products-header';
import BrandProductsList from './brand-products-list';

const BrandProducts = async ({ brand, filters }: { brand: BrandType; filters: BrandFiltersType }) => {
  const state = await productService.prefetchAll({ filters });

  return (
    <div className='flex flex-col gap-6 md:w-[82%]'>
      <BrandProductsHeader name={brand.name} />
      <HydrationBoundary state={state}>
        <BrandProductsList filters={filters} />
      </HydrationBoundary>
    </div>
  );
};

export default BrandProducts;
