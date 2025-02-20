'use client';

import { merge } from '@/app/_lib/merge';
import { useState } from 'react';

const SizeUnitSwitch = () => {
  const [selectedUnit, setSelectedUnit] = useState('in');

  return (
    <div className='grid h-7 w-24 grid-cols-2 items-center rounded-full shadow md:h-9 md:w-32'>
      <button
        className={merge(
          'flex h-full w-full items-center justify-center rounded-l-full text-sm font-medium md:text-base md:font-regular',
          selectedUnit === 'in' && 'bg-secondary-900',
        )}
        onClick={() => setSelectedUnit('in')}
      >
        IN
      </button>
      <button
        className={merge(
          'flex h-full w-full items-center justify-center rounded-r-full text-sm font-medium md:text-base md:font-regular',
          selectedUnit === 'cm' && 'bg-secondary-900',
        )}
        onClick={() => setSelectedUnit('cm')}
      >
        CM
      </button>
    </div>
  );
};

export default SizeUnitSwitch;
