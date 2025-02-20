'use client';

import Modal from '@/app/_components/ui/modal';
import { Dispatch, SetStateAction } from 'react';
import MeasurementsTable from './measurements-table';
import SizeConversionTable from './size-conversion-table';
import SizeTypeDropdown from './size-type-dropdown';
import SizeUnitSwitch from './size-unit-switch';

type SizesModalType = {
  setSizeModalOpen: Dispatch<SetStateAction<boolean>>;
};

const SizesModalDesktop = ({ setSizeModalOpen }: SizesModalType) => {
  return (
    <Modal size='lg' title='Size Guide' onClose={() => setSizeModalOpen(false)} className='flex flex-col px-16 pb-10'>
      <div className='flex items-center justify-between border-b border-gray-300 pb-5 pt-1'>
        <span>Switch to</span>
        <div className='flex gap-7'>
          <SizeTypeDropdown />
          <SizeUnitSwitch />
        </div>
      </div>

      <div className='thin-scrollbar grow overflow-y-auto'>
        <MeasurementsTable />
        <SizeConversionTable />
      </div>
    </Modal>
  );
};

export default SizesModalDesktop;
