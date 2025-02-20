'use client';

import HScroll from '@/app/_components/ui/h-scroll/h-scroll';
import { StoreCategoryType } from '@/app/_types/store.type';
import Image from 'next/image';
import Link from 'next/link';
import { SwiperSlide } from 'swiper/react';

const BrandCategoryItems = ({ categories }: { categories: StoreCategoryType[] }) => {
  return (
    <HScroll
      breakpoints={{
        0: {
          slidesPerView: 3.5,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 6,
          spaceBetween: 20,
        },
        1280: {
          slidesPerView: 7,
          spaceBetween: 20,
        },
        1536: {
          slidesPerView: 9,
          spaceBetween: 30,
        },
        1920: {
          slidesPerView: 11,
          spaceBetween: 30,
        },
      }}
      className='w-full md:mb-10'
    >
      {categories.map((category) => (
        <SwiperSlide key={category.id} className='max-w-fit'>
          <Link href={`/categories/${category.slug}`} className='grid gap-2.5'>
            <Image
              src={category.thumbnail}
              alt={category.name}
              height={120}
              width={120}
              className='h-20 w-20 rounded-full object-cover md:h-32 md:w-32'
            />
            <h4 className='text-center text-base font-regular'>{category.name}</h4>
          </Link>
        </SwiperSlide>
      ))}
    </HScroll>
  );
};

export default BrandCategoryItems;
