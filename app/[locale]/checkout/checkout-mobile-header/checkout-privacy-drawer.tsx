'use client';

import Drawer from '@/app/_components/ui/drawer';
import CheckoutHelpingInformation from '../checkout-order-summary/checkout-helping-information';

type CheckoutPrivacyDrawerType = {
  onClose: () => void;
};

const CheckoutPrivacyDrawer = ({ onClose }: CheckoutPrivacyDrawerType) => {
  return (
    <Drawer
      size='lg'
      title='Encrypted for Your Safety & Privacy'
      onClose={onClose}
      className='thin-scrollbar overflow-y-auto px-3 pb-3'
    >
      <CheckoutHelpingInformation />
    </Drawer>
  );
};

export default CheckoutPrivacyDrawer;
