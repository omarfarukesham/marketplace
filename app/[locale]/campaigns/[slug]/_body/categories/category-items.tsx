'use client';

import ALL_PRODUCTS from '@/app/_assets/all-products.svg';
import HorizontalScroll from '@/app/_components/ui/horizontal-scroll/horizontal-scroll';
import HorizontalScrollFlex from '@/app/_components/ui/horizontal-scroll/horizontal-scroll-flex';
import { createUrl } from '@/app/_lib/create-url';
import { merge } from '@/app/_lib/merge';
import { CampaignCategoryType } from '@/app/_types/campaign.type';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const CampaignCategoryItems = ({ categories }: { categories: CampaignCategoryType[] }) => {
  const allProducts = { categoryId: -1, slug: '', name: 'All', thumbnail: ALL_PRODUCTS, id: '-1', icon: '' };
  const allCategories: CampaignCategoryType[] = [allProducts, ...categories];

  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryClick = (category: CampaignCategoryType) => {
    setSelectedCategory(category.slug);
  };

  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const categoryIdFromParams = searchParams.get('categoryId');
    if (categoryIdFromParams) {
      const foundCategory = allCategories.find((category) => category.categoryId === Number(categoryIdFromParams));

      setSelectedCategory(foundCategory?.slug ?? 'invalid');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <HorizontalScroll>
      <HorizontalScrollFlex>
        {allCategories.map((category, i) => {
          const href = createUrl(
            pathname,
            new URLSearchParams({
              categoryId: category.categoryId.toString(),
            }),
          );
          return (
            <Link
              key={category.categoryId}
              href={href}
              scroll={false}
              className='group grid shrink-0 place-items-center gap-2.5 overflow-hidden p-2'
              onClick={() => handleCategoryClick(category)}
            >
              <div
                className={merge(
                  'relative flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 md:h-24 md:w-24',
                  selectedCategory === category.slug && 'ring-2 ring-primary-900 ring-offset-2',
                )}
              >
                <Image
                  src={category.thumbnail}
                  alt={category.name}
                  fill={i !== 0}
                  className='rounded-full object-cover ring-0 transition-transform group-hover:scale-105'
                />
              </div>
              <h4
                className='link-animation text-center text-label font-regular md:text-base'
                data-replace={category.name}
              >
                <span>{category.name}</span>
              </h4>
            </Link>
          );
        })}
      </HorizontalScrollFlex>
    </HorizontalScroll>
  );
};

export default CampaignCategoryItems;
