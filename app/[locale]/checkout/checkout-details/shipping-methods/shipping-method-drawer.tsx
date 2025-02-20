'use client';

import Drawer from '@/app/_components/ui/drawer';
import { ShippingMethodType } from '@/app/_types/checkout.type';
import { Dispatch, SetStateAction } from 'react';
import ShippingMethodDetails from './shipping-method-details';

type ShippingMethodDrawerType = {
  setDrawerOpen: Dispatch<SetStateAction<boolean>>;
  shippingMethod: ShippingMethodType;
};

const ShippingMethodDrawer = ({ setDrawerOpen, shippingMethod }: ShippingMethodDrawerType) => {
  return (
    <Drawer
      size='lg'
      title='Shipping'
      onClose={() => setDrawerOpen(false)}
      className='thin-scrollbar overflow-y-auto px-3 pb-3'
    >
      <ShippingMethodDetails shippingMethod={shippingMethod} />
    </Drawer>
  );
};

export default ShippingMethodDrawer;
