'use client';

import { getViewportClient } from '@/app/_lib/get-viewport-client';
import ArrowRight from '@/icons/arrows/arrow-right';
import { Dispatch, SetStateAction, useState } from 'react';

import ShippingAddressProvider, { useShippingAddress } from '@/app/_store/address/shipping-address.context';
import ShippingAddressCard from './shipping-address-card';
import ShippingAddressesModal from './shipping-addresses-modal/shipping-addresses-modal';

const UserAddresses = () => {
  const [addressesModalOpen, setAddressesModalOpen] = useState(false);

  const { isDesktop } = getViewportClient();

  return (
    <ShippingAddressProvider>
      <div>
        <AddressHeader setAddressesModalOpen={setAddressesModalOpen} />
        <SelectedAddress setAddressesModalOpen={setAddressesModalOpen} />
      </div>

      {addressesModalOpen && <ShippingAddressesModal setModalOpen={setAddressesModalOpen} isDesktop={isDesktop} />}
    </ShippingAddressProvider>
  );
};

const AddressHeader = ({ setAddressesModalOpen }: { setAddressesModalOpen: Dispatch<SetStateAction<boolean>> }) => {
  return (
    <div className='mb-2 hidden items-center justify-between md:mb-5 md:flex'>
      <h2 className='text-base font-medium md:font-bold'>Shipping Address</h2>
      <button className='flex items-center gap-1' onClick={() => setAddressesModalOpen(true)}>
        Change Address <ArrowRight />
      </button>
    </div>
  );
};

const SelectedAddress = ({ setAddressesModalOpen }: { setAddressesModalOpen: Dispatch<SetStateAction<boolean>> }) => {
  const { setActiveStepIndex, activeAddress, setAddressToEdit } = useShippingAddress();

  const { isDesktop } = getViewportClient();

  if (!activeAddress)
    return (
      <div>
        <p className='text-sm text-gray-500'>You have no saved addresses. Add a new address to continue.</p>
        <button
          className='mt-2 text-sm text-primary-500 underline'
          onClick={() => {
            setActiveStepIndex(2);
            setAddressesModalOpen(true);
          }}
        >
          Add Address
        </button>
      </div>
    );

  return (
    <ShippingAddressCard
      address={activeAddress}
      onEditClick={(address) => {
        setAddressToEdit(address);
        setActiveStepIndex(isDesktop ? 1 : 0); // in desktop this opens the edit modal, in mobile it opens the all addresses drawer
        setAddressesModalOpen(true);
      }}
    />
  );
};
export default UserAddresses;
