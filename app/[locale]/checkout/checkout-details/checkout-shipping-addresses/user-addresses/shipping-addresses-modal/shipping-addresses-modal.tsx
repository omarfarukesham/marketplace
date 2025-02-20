import { Dispatch, SetStateAction } from 'react';
import ShippingAddressesDrawer from './shipping-addresses-drawer/shipping-addresses-drawer';
import ShippingAddressesModalDesktop from './shipping-addresses-modal-desktop';

type ShippingAddressesModalType = {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  isDesktop: boolean;
};

const ShippingAddressesModal = ({ setModalOpen, isDesktop }: ShippingAddressesModalType) => {
  return isDesktop ? (
    <ShippingAddressesModalDesktop setModalOpen={setModalOpen} />
  ) : (
    <ShippingAddressesDrawer setDrawerOpen={setModalOpen} />
  );
};

export default ShippingAddressesModal;
