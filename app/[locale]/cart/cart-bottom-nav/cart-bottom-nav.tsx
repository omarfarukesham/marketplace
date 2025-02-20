'use client';

import { useCartContext } from '@/app/_store/cart/cart.context';
import ArrowRight from '@/icons/arrows/arrow-right';
import Link from 'next/link';
import { useState } from 'react';
import CartPriceDrawer from './cart-price-drawer';

const CartBottomNav = () => {
  const [priceDrawerOpen, setPriceDrawerOpen] = useState(false);
  const cart = useCartContext();

  return (
    <div className='fixed bottom-0 left-0 z-10 flex w-full items-center gap-3 border-t border-gray-200 bg-white px-3 py-3'>
      <button onClick={() => setPriceDrawerOpen(!priceDrawerOpen)} className='flex items-center justify-start gap-1'>
        Total:
        <span className='whitespace-nowrap font-bold'>{cart.summary?.netAmount}</span>
        <ArrowRight className='fill-gray-900' />
      </button>

      <Link
        href='/checkout'
        className='h-full w-full rounded-full bg-secondary-900 py-4 text-center text-base font-bold transition-all hover:bg-primary-900 hover:text-white'
      >
        Checkout ({cart.summary?.totalSelectedInStockItem})
      </Link>

      {priceDrawerOpen && <CartPriceDrawer setDrawerOpen={setPriceDrawerOpen} />}
    </div>
  );
};

export default CartBottomNav;
