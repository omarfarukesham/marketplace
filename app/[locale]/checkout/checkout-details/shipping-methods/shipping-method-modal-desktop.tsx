'use client';

import Modal from '@/app/_components/ui/modal';
import { ShippingMethodType } from '@/app/_types/checkout.type';
import { Dispatch, SetStateAction } from 'react';
import ShippingMethodDetails from './shipping-method-details';

type ShippingMethodModalDesktopType = {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  shippingMethod: ShippingMethodType;
};

const ShippingMethodModalDesktop = ({ setModalOpen, shippingMethod }: ShippingMethodModalDesktopType) => {
  return (
    <Modal
      size='lg'
      title='Shipping'
      onClose={() => setModalOpen(false)}
      className='thin-scrollbar overflow-y-auto px-12 pb-12'
    >
      <ShippingMethodDetails shippingMethod={shippingMethod} />
    </Modal>
  );
};

export default ShippingMethodModalDesktop;
