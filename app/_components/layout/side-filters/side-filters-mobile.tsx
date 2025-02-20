'use client';

import MobileDrawerLeft from '@/app/_components/layout/mobile-drawer-left';
import useOutsideClick from '@/app/_lib/hooks/use-outside-click';
import Funnel from '@/icons/funnel';
import { ReactNode, useRef, useState } from 'react';

const SideFiltersMobile = ({ children }: { children: ReactNode }) => {
  const [filtersDrawerOpen, setFiltersDrawerOpen] = useState(false);
  const closeDrawer = () => setFiltersDrawerOpen(false);

  const buttonRef = useRef(null);

  const ref = useOutsideClick(closeDrawer, buttonRef.current);

  return (
    <div className='md:w-[15%]'>
      <button
        className='flex translate-y-6 items-center gap-1'
        onClick={() => setFiltersDrawerOpen(!filtersDrawerOpen)}
        ref={buttonRef}
      >
        <Funnel /> Filters
      </button>

      <MobileDrawerLeft drawerOpen={filtersDrawerOpen} closeDrawer={closeDrawer} ref={ref}>
        {children}
      </MobileDrawerLeft>
    </div>
  );
};

export default SideFiltersMobile;
