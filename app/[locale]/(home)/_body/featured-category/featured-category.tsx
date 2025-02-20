import SectionHeading from '@/app/_components/ui/section-heading';
import { getViewport } from '@/app/_lib/get-viewport';
import featuredCategoryService from '@/app/_services/featured-category/featured-category.service';
import FeaturedCategoryProducts from './featured-category-products';

type FeaturedCategoryType = {
  code: string;
};
const FeaturedCategory = async ({ code }: FeaturedCategoryType) => {
  const { isDesktop } = getViewport();

  const filters = {
    page: 0,
    size: isDesktop ? 6 : 4,
  };

  const { data: category, error } = await featuredCategoryService.get({ code, filters });

  if (!category || error) return null;

  return (
    <section className='overflow-x-hidden pt-5 md:pb-11 md:pt-10'>
      <SectionHeading title={category.name} />
      <FeaturedCategoryProducts code={code} filters={filters} initialCategory={category} />
    </section>
  );
};

export default FeaturedCategory;
