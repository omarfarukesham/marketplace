'use client';

import Drawer from '@/app/_components/ui/drawer';
import { Dispatch, SetStateAction } from 'react';
import MeasurementsTable from './measurements-table';
import SizeConversionTable from './size-conversion-table';
import SizeTypeDropdown from './size-type-dropdown';
import SizeUnitSwitch from './size-unit-switch';

type SizesDrawerType = {
  setSizeDrawerOpen: Dispatch<SetStateAction<boolean>>;
};

const SizesDrawer = ({ setSizeDrawerOpen }: SizesDrawerType) => {
  return (
    <Drawer size='lg' title='Size Guide' onClose={() => setSizeDrawerOpen(false)} className='flex flex-col px-3 pb-5'>
      <div className='flex items-center justify-between py-1 md:border-b md:border-gray-300 md:py-5'>
        <span>Switch to</span>
        <div className='flex items-center gap-7'>
          <SizeTypeDropdown />
          <SizeUnitSwitch />
        </div>
      </div>

      <div className='thin-scrollbar grow overflow-y-auto'>
        <MeasurementsTable />
        <SizeConversionTable />
      </div>
    </Drawer>
  );
};

export default SizesDrawer;
