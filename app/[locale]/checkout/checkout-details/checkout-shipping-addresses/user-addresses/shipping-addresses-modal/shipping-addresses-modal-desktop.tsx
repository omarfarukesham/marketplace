'use client';

import Modal from '@/app/_components/ui/modal';
import { Dispatch, SetStateAction } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import ShippingAddressCreate from './shipping-address-create';
import ShippingAddressEdit from './shipping-address-edit';
import ShippingAddressesList from './shipping-addresses-list';

import 'swiper/css';
import useShippingAddressModal from './use-shipping-address-modal';

type ShippingAddressesModalDesktopType = {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
};

const ShippingAddressesModalDesktop = ({ setModalOpen }: ShippingAddressesModalDesktopType) => {
  const steps = [
    { id: 0, label: 'Addresses', component: ShippingAddressesList },
    { id: 1, label: 'Edit Address', component: ShippingAddressEdit },
    { id: 2, label: 'Create Address', component: ShippingAddressCreate },
  ];

  const { activeStep, activeStepIndex, setActiveStepIndex, sliderRef } = useShippingAddressModal(steps);

  return (
    <Modal
      size='md'
      title={activeStep.label}
      onClose={() => {
        setModalOpen(false);
        setActiveStepIndex(0);
      }}
      onBack={activeStepIndex !== 0 ? () => setActiveStepIndex(0) : undefined}
      className='thin-scrollbar overflow-y-auto px-16 pb-12'
    >
      <Swiper
        allowTouchMove={false}
        ref={sliderRef}
        spaceBetween={80}
        wrapperClass='items-center'
        className='!overflow-visible'
      >
        {steps.map((step) => (
          <SwiperSlide key={step.id}>
            <step.component />
          </SwiperSlide>
        ))}
      </Swiper>
    </Modal>
  );
};

export default ShippingAddressesModalDesktop;
