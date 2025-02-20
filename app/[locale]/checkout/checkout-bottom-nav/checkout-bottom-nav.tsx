'use client';

import LoadingSpinner from '@/app/_components/ui/loading-spinner';
import { useCartQuery } from '@/app/_services/cart/use-cart';
import ArrowRight from '@/icons/arrows/arrow-right';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import SubmitOrder from '../checkout-order-summary/submit-order/submit-order';
import CheckoutPriceDetailsDrawer from './checkout-price-details-drawer';

const CheckoutBottomNav = () => {
  const [priceDrawerOpen, setPriceDrawerOpen] = useState(false);
  const searchParams = useSearchParams();

  const { data: cart, isLoading } = useCartQuery({
    filters: {
      ...(searchParams.get('productId') && { productId: searchParams.get('productId') as string }),
    },
  });

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className='fixed bottom-0 left-0 z-10 flex w-full items-center gap-3 border-t border-gray-200 bg-white px-3 py-3 md:hidden'>
      <button onClick={() => setPriceDrawerOpen(!priceDrawerOpen)} className='flex items-center justify-start gap-1'>
        Total:
        <span className='whitespace-nowrap font-bold'>{cart?.summary?.netAmount || '-'}</span>
        <ArrowRight className='fill-gray-900' />
      </button>

      <SubmitOrder className='py-4' />

      {priceDrawerOpen && <CheckoutPriceDetailsDrawer onClose={() => setPriceDrawerOpen(false)} />}
    </div>
  );
};

export default CheckoutBottomNav;
