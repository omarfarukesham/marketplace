'use client';

import { ROUTES } from '@/app/_config/routes';
import dataLayer from '@/app/_lib/gtm/send-data';
import { useCartContext } from '@/app/_store/cart/cart.context';
import Cart from '@/icons/product/cart';
import Cookies from 'js-cookie';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const CartDrawer = dynamic(() => import('./cart-drawer'), { ssr: false });

const CartRoot = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const {
    items,
    summary: { totalItem, netAmount },
  } = useCartContext();

  const toggleCart = () => {
    // send cart view to data layer
    if (!isCartOpen) {
      dataLayer.viewCart({ items, value: netAmount, currency: 'BDT' });
    }

    setIsCartOpen((prev) => !prev);
  };
  const closeCart = () => setIsCartOpen(false);

  const isDesktop = Cookies.get('viewport') === 'desktop';
  const router = useRouter();

  return (
    <div className='leading-0'>
      <button
        onClick={() => {
          isDesktop ? toggleCart() : router.push(ROUTES.cart);
        }}
        className='relative h-6 w-6 md:h-11 md:w-11'
      >
        <Cart className='h-full w-full' />
        <span className='absolute left-[53%] top-0 -translate-x-1/2 text-sm font-medium text-danger md:text-lg'>
          {totalItem}
        </span>
      </button>

      <CartDrawer isCartOpen={isCartOpen} toggleCart={toggleCart} closeCart={closeCart} />
    </div>
  );
};

export default CartRoot;
