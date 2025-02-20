import SanitizedDescription from '@/app/_components/misc/sanitized-description';
import Breadcrumb from '@/app/_components/ui/breadcrumb';
import { BaseFiltersType, PAGINATION_SIZE } from '@/app/_config/filters';
import { getViewport } from '@/app/_lib/get-viewport';
import categoryService from '@/app/_services/category/category.service';
import { SearchParamsType } from '@/app/_types/utility.type';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import CategoryFilters from '../../categories/[slug]/_body/category-filters/category-filters';
import BestSellingProducts from './_body/best-selling-category/best-selling-products';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { data: category } = await categoryService.get({ slug: params.slug });

  if (!category) return notFound();

  return {
    title: category.name,
    description: category.description || `${category.name} products`,
  };
}

const BestSellingCategory = async ({
  params: { slug },
  searchParams,
}: {
  params: { slug: string };
  searchParams: SearchParamsType;
}) => {
  const { data: category } = await categoryService.get({ slug });

  if (!category) return notFound();

  const filters: BaseFiltersType = {
    size: PAGINATION_SIZE,
    page: 0,
    ...searchParams,
  };

  const BREADCRUMB_ITEMS = [
    { label: 'Home', link: '/' },
    {
      label: category.name,
      link: `/best-selling-products/${category.slug}`,
    },
  ];

  const { isDesktop } = getViewport();

  return (
    <main className='mx-3 mb-14 md:mx-11'>
      <Breadcrumb items={BREADCRUMB_ITEMS} />

      <div className='flex flex-col gap-[3%] md:flex-row'>
        <Suspense>
          <CategoryFilters category={category} isDesktop={isDesktop} />
        </Suspense>
        <BestSellingProducts slug={slug} filters={filters} />
      </div>

      <Suspense>
        <SanitizedDescription label={category.name} description={category.description} />
      </Suspense>
    </main>
  );
};

export default BestSellingCategory;
