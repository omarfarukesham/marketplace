'use client';

import { merge } from '@/app/_lib/merge';
import { ProductType } from '@/app/_types/product.type';
import Tick from '@/icons/tick';
import Image from 'next/image';
import { useState } from 'react';

type ColorsType = {
  product: ProductType;
};

const Colors = ({ product }: ColorsType) => {
  const [selectedSize, setSelectedSize] = useState(product.colors?.[0]);

  if (!product.colors) return null;

  return (
    <div className='grid gap-1.5 md:gap-2.5'>
      <div>
        <span className='font-bold'>Color: </span>
        <span>{selectedSize?.label}</span>
      </div>
      <div className='flex items-end gap-4'>
        <div className='flex gap-2.5'>
          {product.colors?.map((color) => (
            <button
              key={color.value}
              className={merge(
                'relative flex h-11 w-11 items-center justify-center border border-gray-500 bg-gray-100 px-3 py-1 hover:bg-secondary-300 md:h-14 md:w-14 md:px-4',
                color.value === selectedSize?.value && 'bg-secondary-300',
              )}
              onClick={() => setSelectedSize(color)}
            >
              <div className='relative h-full w-full'>
                <Image src={color.imageUrl} alt={color.label} fill />
              </div>
              {color.value === selectedSize?.value && (
                <span className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                  <Tick className='fill-white' />
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Colors;
