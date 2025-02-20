import { useShippingAddress } from '@/app/_store/address/shipping-address.context';
import { useEffect, useRef } from 'react';
import { SwiperRef } from 'swiper/react';

type StepType<T> = {
  id: number;
  label: string;
  component: (props: T) => JSX.Element;
};

// waste some time to add the appropriate type here 😁
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useShippingAddressModal = (steps: StepType<any>[]) => {
  const { activeStepIndex, setActiveStepIndex } = useShippingAddress();

  const activeStep = steps.find((step) => step.id === activeStepIndex)!;

  const sliderRef = useRef<SwiperRef>(null);

  // slide to active index slide when active index changes
  useEffect(() => {
    if (sliderRef.current && sliderRef.current.swiper) {
      sliderRef.current.swiper.slideTo(activeStepIndex);
    }
  }, [activeStepIndex]);

  return {
    activeStep,
    activeStepIndex,
    setActiveStepIndex,
    sliderRef,
  };
};

export default useShippingAddressModal;
