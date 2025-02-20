import { Dispatch, SetStateAction } from 'react';
import SizesDrawer from './sizes-drawer';
import SizesModalDesktop from './sizes-modal-desktop';

type SizesModalType = {
  setSizeModalOpen: Dispatch<SetStateAction<boolean>>;
  isDesktop?: boolean;
};

const SizesModal = ({ setSizeModalOpen, isDesktop }: SizesModalType) => {
  return isDesktop ? (
    <SizesModalDesktop setSizeModalOpen={setSizeModalOpen} />
  ) : (
    <SizesDrawer setSizeDrawerOpen={setSizeModalOpen} />
  );
};

export default SizesModal;
