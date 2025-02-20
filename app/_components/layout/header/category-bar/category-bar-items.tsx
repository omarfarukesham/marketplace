'use client';

import { merge } from '@/app/_lib/merge';
import { CustomizedCategoryType } from '@/app/_types/category.type';
import ArrowLeft from '@/icons/arrows/arrow-left';
import ArrowRight from '@/icons/arrows/arrow-right';
import { useEffect, useRef, useState } from 'react';
import CategoryBarItem from './category-bar-item';
import CategoryBarItemCampaigns from './category-bar-item-campaigns';
import CategoryBarItemStores from './category-bar-item-stores';

const CategoryBarItems = ({ categories, isDesktop }: { categories: CustomizedCategoryType[]; isDesktop: boolean }) => {
  const barRef = useRef<HTMLUListElement>(null);

  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  useEffect(() => {
    const container = barRef.current;

    const handleScroll = () => {
      if (container) {
        setShowLeftButton(container.scrollLeft > 0);
        setShowRightButton(container.scrollLeft + 1 < container.scrollWidth - container.clientWidth);
      }
    };

    container?.addEventListener('scroll', handleScroll);
    return () => {
      container?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLeftButtonClick = () => {
    const container = barRef.current;

    if (container) {
      container.scrollTo({
        left: container.scrollLeft - 100,
        behavior: 'smooth',
      });
    }
  };

  const handleRightButtonClick = () => {
    const container = barRef.current;

    if (container) {
      container.scrollTo({
        left: container.scrollLeft + 100,
        behavior: 'smooth',
      });
    }
  };

  return (
    <ul ref={barRef} className={merge('flex items-center md:gap-6', 'no-scrollbar overflow-x-auto')}>
      {showLeftButton && (
        <button className='fade-left absolute left-5 md:hidden' onClick={handleLeftButtonClick}>
          <ArrowLeft className='h-4 w-4' />
        </button>
      )}

      {!isDesktop && <CategoryBarItemCampaigns />}
      {!isDesktop && <CategoryBarItemStores />}

      {categories.map((category) => (
        <CategoryBarItem key={category.id} category={category} />
      ))}

      {isDesktop && <CategoryBarItemCampaigns />}
      {isDesktop && <CategoryBarItemStores />}

      {showRightButton && (
        <button className='fade-right absolute right-0 pl-3 md:hidden' onClick={handleRightButtonClick}>
          <ArrowRight className='h-5 w-5' />
        </button>
      )}
    </ul>
  );
};

export default CategoryBarItems;
