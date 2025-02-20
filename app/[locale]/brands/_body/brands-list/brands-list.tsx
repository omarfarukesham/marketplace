import { BaseFiltersType } from '@/app/_config/filters';
import brandService from '@/app/_services/brand/brand.service';
import { HydrationBoundary } from '@tanstack/react-query';
import BrandsListBody from './brands-list-body';
import BrandsListHeader from './brands-list-header';

const BrandsList = async ({ filters }: { filters: BaseFiltersType }) => {
  const state = await brandService.prefetchAll({ filters });

  return (
    <div className='flex flex-col gap-6 md:w-[82%]'>
      <BrandsListHeader />
      <HydrationBoundary state={state}>
        <BrandsListBody filters={filters} />
      </HydrationBoundary>
    </div>
  );
};

export default BrandsList;
