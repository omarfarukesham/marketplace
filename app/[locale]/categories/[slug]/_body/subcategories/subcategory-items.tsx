'use client';

import HorizontalScroll from '@/app/_components/ui/horizontal-scroll/horizontal-scroll';
import HorizontalScrollFlex from '@/app/_components/ui/horizontal-scroll/horizontal-scroll-flex';
import { CategoryType } from '@/app/_types/category.type';
import Image from 'next/image';
import Link from 'next/link';

const SubCategoryItems = ({ subCategories }: { subCategories: CategoryType[] }) => {
  return (
    <HorizontalScroll className='md:mb-10'>
      <HorizontalScrollFlex className='gap-5'>
        {subCategories.map((subcategory) => (
          <Link href={`/categories/${subcategory.slug}`} className='grid shrink-0 gap-2.5' key={subcategory.id}>
            <Image
              src={subcategory.thumbnail}
              alt={subcategory.name}
              height={120}
              width={120}
              className='h-16 w-16 rounded-full object-cover md:h-32 md:w-32'
            />
            <h4 className='text-center text-base font-regular'>{subcategory.name}</h4>
          </Link>
        ))}
      </HorizontalScrollFlex>
    </HorizontalScroll>
  );
};

export default SubCategoryItems;
