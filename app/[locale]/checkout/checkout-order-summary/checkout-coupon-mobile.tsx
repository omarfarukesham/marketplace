'use client';

import ArrowRight from '@/icons/arrows/arrow-right';
import { useState } from 'react';
import CheckoutCouponDrawer from './checkout-coupon-drawer';

const CheckoutCouponMobile = () => {
  const [couponDrawerOpen, setCouponDrawerOpen] = useState(false);

  return (
    <div className='border-b border-gray-300 pb-3'>
      <button className='flex w-full items-center justify-between' onClick={() => setCouponDrawerOpen(true)}>
        <span>Apply Coupon Code</span>
        <ArrowRight />
      </button>

      {couponDrawerOpen && <CheckoutCouponDrawer onClose={() => setCouponDrawerOpen(false)} />}
    </div>
  );
};

export default CheckoutCouponMobile;
