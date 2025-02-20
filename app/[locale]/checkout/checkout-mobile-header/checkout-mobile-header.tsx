'use client';

import ArrowLeft from '@/icons/arrows/arrow-left';
import ArrowRight from '@/icons/arrows/arrow-right';
import Lock from '@/icons/lock';
import { useState } from 'react';
import CheckoutExitConfirmationModal from './checkout-exit-confirmation-modal';
import CheckoutPrivacyDrawer from './checkout-privacy-drawer';

const CheckoutMobileHeader = () => {
  const [privacyDrawerOpen, setPrivacyDrawerOpen] = useState(false);
  const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);

  return (
    <div className='flex flex-col items-center gap-1.5 px-3 pb-2.5 pt-5'>
      <div className='flex w-full items-center'>
        <button onClick={() => setConfirmationModalOpen(true)}>
          <ArrowLeft />
        </button>
        <h2 className='w-full -translate-x-2 text-center text-label font-bold'>Order Confirmation</h2>
      </div>

      <button
        className='flex items-center text-sm font-medium text-accent-4 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:fill-accent-4'
        onClick={() => setPrivacyDrawerOpen(true)}
      >
        <Lock className='-translate-y-[1px]' />
        <span>All data will be encrypted</span>
        <ArrowRight />
      </button>

      {privacyDrawerOpen && <CheckoutPrivacyDrawer onClose={() => setPrivacyDrawerOpen(false)} />}

      {confirmationModalOpen && <CheckoutExitConfirmationModal onClose={() => setConfirmationModalOpen(false)} />}
    </div>
  );
};

export default CheckoutMobileHeader;
