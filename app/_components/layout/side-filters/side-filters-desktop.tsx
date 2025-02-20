'use client';

import Filter from '@/icons/filter';
import { ReactNode } from 'react';

const SideFiltersDesktop = ({ children }: { children: ReactNode }) => {
  return (
    <div className='w-[15%]'>
      <h3 className='mb-7 flex items-center gap-1 text-lg font-bold'>
        <Filter /> Filters
      </h3>

      <div className='grid gap-7'>{children}</div>
    </div>
  );
};

export default SideFiltersDesktop;
