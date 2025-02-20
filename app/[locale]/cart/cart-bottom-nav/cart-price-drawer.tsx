'use client';

import Drawer from '@/app/_components/ui/drawer';
import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';

import { useCartContext } from '@/app/_store/cart/cart.context';
import { Swiper, SwiperSlide } from 'swiper/react';
import CartPriceCalculation from '../cart-order-summary/cart-price-calculation';

type CartPriceDrawerType = {
  setDrawerOpen: Dispatch<SetStateAction<boolean>>;
};

const CartPriceDrawer = ({ setDrawerOpen }: CartPriceDrawerType) => {
  const cart = useCartContext();
  return (
    <Drawer
      size='lg'
      title='Price Details'
      onClose={() => setDrawerOpen(false)}
      className='thin-scrollbar grid content-start gap-2.5 overflow-y-auto px-4'
      overlayClassName='!-top-[4.7rem]'
    >
      <hr className='h-0.5 bg-gray-300' />
      <p className='font-medium'>Cart ({cart.summary?.totalSelectedInStockItem})</p>
      <Swiper slidesPerView={3.3} className='w-full' spaceBetween={5}>
        {cart.items?.map(({ product }, i) => (
          <SwiperSlide key={i}>
            <Image
              src={product.thumbnail?.url || ''}
              alt={product.thumbnail?.altText || ''}
              height={100}
              width={100}
              className='aspect-square'
            />
            <span className='text-label font-medium'>{product.price}</span>
          </SwiperSlide>
        ))}
      </Swiper>

      <hr className='h-0.5 bg-gray-300' />

      <CartPriceCalculation />
    </Drawer>
  );
};

export default CartPriceDrawer;
