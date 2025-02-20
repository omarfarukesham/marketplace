'use client';

import HScroll from '@/app/_components/ui/h-scroll/h-scroll';
import { CustomizedCategoryType } from '@/app/_types/category.type';
import Image from 'next/image';
import Link from 'next/link';
import { SwiperSlide } from 'swiper/react';

const CustomizedSubCategoryItems = ({ subCategories }: { subCategories: CustomizedCategoryType[] }) => {
  return (
    <HScroll
      breakpoints={{
        640: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 5,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 6,
          spaceBetween: 10,
        },
        1280: {
          slidesPerView: 7,
          spaceBetween: 10,
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
      className='mb-10 w-full'
    >
      {subCategories.map((subcategory) => (
        <SwiperSlide key={subcategory.id} className='max-w-fit'>
          <Link href={`/customized-categories/${subcategory.slug}`} className='grid gap-2.5'>
            <Image
              src={subcategory.thumbnail || ''}
              alt={subcategory.name}
              height={120}
              width={120}
              className='h-32 w-32 rounded-full object-cover'
            />
            <h4 className='text-center text-base font-regular'>{subcategory.name}</h4>
          </Link>
        </SwiperSlide>
      ))}
    </HScroll>
  );
};

export default CustomizedSubCategoryItems;
