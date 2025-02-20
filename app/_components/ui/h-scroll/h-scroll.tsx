/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { Swiper, SwiperProps } from 'swiper/react';

import 'swiper/css';

import { ReactNode, useCallback, useRef, useState } from 'react';
import ScrollNavigation from './scroll-navigation';

type HScrollType = {
  children: ReactNode;
} & SwiperProps;

// ! Need to fix the types later
const HScroll = ({ children, ...rest }: HScrollType) => {
  const sliderRef = useRef(null) as any;

  const [arrowLeftDisabled, setArrowLeftDisabled] = useState(true);
  const [arrowRightDisabled, setArrowRightDisabled] = useState(false);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  const handleSlideChange = useCallback((swiper: any) => {
    if (swiper.isBeginning) {
      setArrowLeftDisabled(true);
    } else {
      setArrowLeftDisabled(false);
    }

    if (swiper.isEnd) {
      setArrowRightDisabled(true);
    } else {
      setArrowRightDisabled(false);
    }
  }, []);

  return (
    <div className='relative -mx-10 h-fit overflow-hidden px-10'>
      <Swiper ref={sliderRef} onSlideChange={(swiper) => handleSlideChange(swiper)} {...rest}>
        {children}
      </Swiper>

      {!arrowLeftDisabled && <ScrollNavigation direction='left' handleClick={handlePrev} />}
      {!arrowRightDisabled && <ScrollNavigation direction='right' handleClick={handleNext} />}
    </div>
  );
};

export default HScroll;
