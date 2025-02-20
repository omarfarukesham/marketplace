import { Dispatch, SetStateAction } from 'react';
import CartShareDrawer from './cart-share-drawer';
import CartShareModalDesktop from './cart-share-modal-desktop';

type CartShareModalType = {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  isDesktop?: boolean;
};

const CartShareModal = ({ setModalOpen, isDesktop }: CartShareModalType) => {
  return isDesktop ? (
    <CartShareModalDesktop setModalOpen={setModalOpen} />
  ) : (
    <CartShareDrawer setDrawerOpen={setModalOpen} />
  );
};

export default CartShareModal;
