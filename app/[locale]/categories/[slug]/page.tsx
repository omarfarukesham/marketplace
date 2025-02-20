import SanitizedDescription from '@/app/_components/misc/sanitized-description';
import Breadcrumb from '@/app/_components/ui/breadcrumb';
import { CategoryFiltersType, PAGINATION_SIZE } from '@/app/_config/filters';
import { getViewport } from '@/app/_lib/get-viewport';
import GTM_EVENTS from '@/app/_lib/gtm/events';
import { DataLayerOnLoad } from '@/app/_lib/gtm/send-data';
import categoryService from '@/app/_services/category/category.service';
import { SearchParamsType } from '@/app/_types/utility.type';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import CategoryFilters from './_body/category-filters/category-filters';
import CategoryProducts from './_body/category-products/category-products';
import Subcategories from './_body/subcategories/subcategories';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { data: category } = await categoryService.get({ slug: params.slug });

  if (!category) return notFound();

  return {
    title: category.name,
    description: category.description || `${category.name} products`,
  };
}

const Category = async ({
  params: { slug },
  searchParams,
}: {
  params: { slug: string };
  searchParams: SearchParamsType;
}) => {
  // const { data: category } = await categoryService.get({ slug });
  // const { data: categoryFilters } = await categoryService.getFilters({ slug: category?.slug });

  const data = await Promise.all([categoryService.get({ slug }), categoryService.getFilters({ slug })]);

  const category = data[0].data;
  const categoryFilters = data[1].data;

  if (!category) return notFound();

  const filters: CategoryFiltersType = {
    categoryId: category.categoryId,
    size: PAGINATION_SIZE,
    page: 0,
    ...searchParams,
  };

  const BREADCRUMB_ITEMS = [
    { label: 'Home', link: '/' },
    ...category.hierarchy.map((item) => ({
      label: item.name,
      link: `/categories/${item.slug}`,
    })),
  ];

  const { isDesktop } = getViewport();

  return (
    <main className='relative overflow-hidden px-3 pb-14 md:px-11'>
      <DataLayerOnLoad eventName={GTM_EVENTS.VIEW_CATEGORY} data={category} />

      <Breadcrumb items={BREADCRUMB_ITEMS} />

      <h1 className='my-3 text-center text-label md:hidden'>{category.name}</h1>

      <Suspense>
        <Subcategories categoryId={category.categoryId} />
      </Suspense>

      <hr className='-mx-3 translate-y-3 border-2 md:hidden' />

      <div className='flex flex-col gap-[3%] md:flex-row'>
        <Suspense>
          <CategoryFilters category={category} isDesktop={isDesktop} initialFilters={categoryFilters} />
        </Suspense>
        <CategoryProducts filters={filters} />
      </div>

      <Suspense>
        <SanitizedDescription label={category.name} description={category.description} />
      </Suspense>
    </main>
  );
};

export default Category;
