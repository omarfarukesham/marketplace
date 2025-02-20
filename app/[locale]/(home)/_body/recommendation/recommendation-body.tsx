'use client';

import { useCustomizedCategories } from '@/app/_services/customized-category/use-customized-categories';
import { CustomizedCategoryType } from '@/app/_types/category.type';
import { useState } from 'react';
import RecommendationProducts from './recommendation-products';
import RecommendationTags from './recommendation-tags';

const RecommendationBody = () => {
  const { data: categories } = useCustomizedCategories();
  const [activeCategory, setActiveCategory] = useState<CustomizedCategoryType>(
    categories?.items?.[0] || ({} as CustomizedCategoryType),
  ); // categories is prefetched in server

  if (!categories?.items?.length) return null;

  return (
    <>
      <div className='grid gap-3 md:gap-11'>
        <RecommendationTags
          categories={categories?.items}
          activeTag={activeCategory?.slug}
          setActiveCategory={setActiveCategory}
        />

        <RecommendationProducts activeCategorySlug={activeCategory.slug} />
      </div>
    </>
  );
};

export default RecommendationBody;
