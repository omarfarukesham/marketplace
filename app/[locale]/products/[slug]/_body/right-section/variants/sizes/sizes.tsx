'use client';

import { merge } from '@/app/_lib/merge';
import { ProductType } from '@/app/_types/product.type';
import Ruler from '@/icons/product/ruler';
import Tick from '@/icons/tick';
import { useState } from 'react';
import SizesModal from './sizes-modal';

type SizesType = {
  product: ProductType;
  isDesktop?: boolean;
};

const Sizes = ({ product, isDesktop }: SizesType) => {
  const [selectedSize, setSelectedSize] = useState('s');
  const [sizeModalOpen, setSizeModalOpen] = useState(false);

  return (
    <div className='mt-2 grid gap-1.5 md:mt-7 md:gap-2.5'>
      <div>
        <span className='font-bold'>Size: </span>
        <span>{selectedSize.toUpperCase()}</span>
      </div>
      <div className='flex items-end gap-4'>
        <div className='flex gap-2.5'>
          {product.sizes?.map((size) => (
            <button
              key={size.value}
              className={merge(
                'relative flex h-8 w-8 items-center justify-center border border-gray-500 text-label hover:bg-secondary-300 md:h-10 md:w-10 md:text-base',
                size.value === selectedSize && 'bg-secondary-300',
              )}
              onClick={() => setSelectedSize(size.value)}
            >
              {size.label}
              {size.value === selectedSize && (
                <span className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                  <Tick className='fill-white' />
                </span>
              )}
            </button>
          ))}
        </div>

        <button className='group flex items-center' onClick={() => setSizeModalOpen(true)}>
          <Ruler className='fill-gray-900 group-hover:fill-secondary-900' />
          <span className='text-small text-gray-900 group-hover:text-secondary-900 md:text-label'>Size Guide</span>
        </button>
      </div>

      {sizeModalOpen && <SizesModal isDesktop={isDesktop} setSizeModalOpen={setSizeModalOpen} />}
    </div>
  );
};

export default Sizes;
