'use client';

import { CartItem } from '@/app/_types/cart.type';
import ArrowRight from '@/icons/arrows/arrow-right';
import dynamic from 'next/dynamic';
import { useState } from 'react';
const CheckoutProductsDrawer = dynamic(() => import('./checkout-products-drawer'), { ssr: false });

const CheckoutProductsHeader = ({ items }: { items: CartItem[] }) => {
  const [detailsModalOpen, setDetailsModalOpen] = useState(false);

  return (
    <div className='flex items-center justify-between pb-2 md:border-b md:border-gray-300 md:pb-5'>
      <span className='font-bold'>Item Details ({items.length})</span>
      <button className='flex items-center gap-1' onClick={() => setDetailsModalOpen(true)}>
        View All <ArrowRight />
      </button>

      {detailsModalOpen && <CheckoutProductsDrawer setDrawerOpen={setDetailsModalOpen} products={items} />}
    </div>
  );
};

export default CheckoutProductsHeader;
