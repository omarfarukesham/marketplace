'use client';

import DropdownSort from '@/app/_components/ui/dropdown/dropdown-sort';
import { getCategoryProductsSortOptions } from '@/app/_config/filters';
import getClientContext from '@/app/_lib/get-client-context';
import { useSearchParams } from 'next/navigation';

const BrandsListHeader = () => {
  const context = getClientContext();
  const searchParams = useSearchParams();

  return (
    <div className='flex items-center justify-between'>
      <h2 className='hidden text-lg font-bold md:block'>All Brands</h2>
      <span className='md:hidden'></span>
      <div className='flex items-center gap-3'>
        <span className='text-label md:text-base md:font-bold'>Sort by</span>
        <DropdownSort
          options={getCategoryProductsSortOptions(context)}
          defaultValue={searchParams.get('sort') || ''}
          buttonClassName='h-7 md:h-10 max-w-[120px] px-2 md:px-3 md:max-w-[205px] text-label md:text-base'
          optionsClassName='px-2 md:px-4'
        />
      </div>
    </div>
  );
};

export default BrandsListHeader;
