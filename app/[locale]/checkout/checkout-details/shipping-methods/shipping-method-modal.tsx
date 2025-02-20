import { ShippingMethodType } from '@/app/_types/checkout.type';
import { Dispatch, SetStateAction } from 'react';
import ShippingMethodDrawer from './shipping-method-drawer';
import ShippingMethodModalDesktop from './shipping-method-modal-desktop';

type ShippingMethodModalType = {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  isDesktop: boolean;
  shippingMethod: ShippingMethodType;
};

const ShippingMethodModal = ({ setModalOpen, isDesktop, shippingMethod }: ShippingMethodModalType) => {
  return isDesktop ? (
    <ShippingMethodModalDesktop setModalOpen={setModalOpen} shippingMethod={shippingMethod} />
  ) : (
    <ShippingMethodDrawer setDrawerOpen={setModalOpen} shippingMethod={shippingMethod} />
  );
};

export default ShippingMethodModal;
