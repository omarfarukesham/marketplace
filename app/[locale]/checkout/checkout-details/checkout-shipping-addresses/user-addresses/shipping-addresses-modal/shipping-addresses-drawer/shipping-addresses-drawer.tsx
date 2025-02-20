'use client';

import Drawer from '@/app/_components/ui/drawer';
import { useShippingAddress } from '@/app/_store/address/shipping-address.context';
import { Dispatch, SetStateAction } from 'react';
import 'swiper/css';
import ShippingAddressCreate from '../shipping-address-create';
import ShippingAddressEdit from '../shipping-address-edit';
import ShippingAddressesListMobile from './shipping-addresses-list-mobile';

type ShippingAddressesDrawerType = {
  setDrawerOpen: Dispatch<SetStateAction<boolean>>;
};

const ShippingAddressesDrawer = ({ setDrawerOpen }: ShippingAddressesDrawerType) => {
  const { activeStepIndex } = useShippingAddress();

  switch (activeStepIndex) {
    case 0:
      return <AddressListDrawer setDrawerOpen={setDrawerOpen} />;
    case 1:
      return <AddressEditDrawer />;
    case 2:
      return <AddressCreateDrawer />;
    default:
      return null;
  }
};

const AddressListDrawer = ({ setDrawerOpen }: ShippingAddressesDrawerType) => {
  return (
    <Drawer
      size={{}}
      title='Change Address'
      onClose={() => setDrawerOpen(false)}
      className='thin-scrollbar overflow-y-auto'
    >
      <ShippingAddressesListMobile />
    </Drawer>
  );
};

const AddressEditDrawer = () => {
  const { setActiveStepIndex } = useShippingAddress();
  return (
    <Drawer
      size='lg'
      title='Edit Address'
      onClose={() => setActiveStepIndex(0)}
      onBack={() => setActiveStepIndex(0)}
      className='flex flex-col pb-3'
    >
      <div className='thin-scrollbar overflow-y-auto px-4'>
        <ShippingAddressEdit />
      </div>
    </Drawer>
  );
};

const AddressCreateDrawer = () => {
  const { setActiveStepIndex } = useShippingAddress();
  return (
    <Drawer
      size='lg'
      title='Add New Address'
      onClose={() => setActiveStepIndex(0)}
      onBack={() => setActiveStepIndex(0)}
      className='flex flex-col pb-3'
    >
      <div className='thin-scrollbar overflow-y-auto px-4'>
        <ShippingAddressCreate />
      </div>
    </Drawer>
  );
};

export default ShippingAddressesDrawer;
