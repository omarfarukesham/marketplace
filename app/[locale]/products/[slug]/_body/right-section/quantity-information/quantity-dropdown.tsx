'use client';

import { merge } from '@/app/_lib/merge';
import ArrowDown from '@/icons/arrows/arrow-down';
import { useState } from 'react';

const quantityOptions = [
  { label: '1', value: '1' },
  { label: '2', value: '2' },
  { label: '3', value: '3' },
  { label: '4', value: '4' },
  { label: '5', value: '5' },
  { label: '6', value: '6' },
];

const QuantityDropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className='relative inline-block'>
      <span className='pointer-events-none absolute inset-y-2 right-4 flex items-center text-gray-700'>
        <ArrowDown className={merge('fill-gray-700 transition-transform', dropdownOpen && 'rotate-180')} />
      </span>
      <select
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        name='quantity'
        className='h-10 w-32 appearance-none rounded-md border border-gray-900 pl-4'
      >
        {quantityOptions.map((size) => (
          <option value={size.value} key={size.value}>
            {size.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default QuantityDropdown;
