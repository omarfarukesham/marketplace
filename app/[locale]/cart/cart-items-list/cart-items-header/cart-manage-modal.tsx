import { Dispatch, SetStateAction } from 'react';
import CartManageDrawer from './cart-manage-drawer';
import CartManageModalDesktop from './cart-manage-modal-desktop';

type CartManageModalType = {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  isDesktop: boolean;
};

const CartManageModal = ({ setModalOpen, isDesktop }: CartManageModalType) => {
  return isDesktop ? (
    <CartManageModalDesktop setModalOpen={setModalOpen} />
  ) : (
    <CartManageDrawer setDrawerOpen={setModalOpen} />
  );
};

export default CartManageModal;
