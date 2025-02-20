'use client';

import HorizontalScroll from '@/app/_components/ui/horizontal-scroll/horizontal-scroll';
import { CustomizedCategoryType } from '@/app/_types/category.type';
import { Dispatch, SetStateAction } from 'react';
import RecommendationTag from './recommendation-tag';

const RecommendationTags = ({
  categories,
  activeTag,
  setActiveCategory,
}: {
  categories: CustomizedCategoryType[];
  activeTag?: string;
  setActiveCategory: Dispatch<SetStateAction<CustomizedCategoryType>>;
}) => {
  return (
    <HorizontalScroll arrow={true} progressBar={false} containerClassName='-my-1 py-1' className='-my-1 py-1'>
      <div className='flex gap-4'>
        {categories.map((category) => (
          <RecommendationTag
            key={category.slug}
            active={category.slug === activeTag}
            onClick={() => setActiveCategory(category)}
          >
            {category.name}
          </RecommendationTag>
        ))}
      </div>
    </HorizontalScroll>
  );
};

export default RecommendationTags;
