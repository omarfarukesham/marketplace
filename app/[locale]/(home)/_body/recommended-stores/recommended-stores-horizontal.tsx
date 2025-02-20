'use client';

import HScroll from '@/app/_components/ui/h-scroll/h-scroll';
import { StoreType } from '@/app/_types/store.type';
import { SwiperSlide } from 'swiper/react';
import RecommendedStoreCard from './recommended-store-card';

const RecommendedStoresHorizontal = ({ stores }: { stores: StoreType[] }) => {
  return (
    <HScroll className='m-1 w-[95vw] rounded-md shadow'>
      {stores.map((store) => (
        <SwiperSlide key={store.id} className='h-full w-full'>
          <RecommendedStoreCard store={store} />
        </SwiperSlide>
      ))}
    </HScroll>
  );
};

export default RecommendedStoresHorizontal;
