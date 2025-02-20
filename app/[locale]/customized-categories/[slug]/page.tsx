import SanitizedDescription from '@/app/_components/misc/sanitized-description';
import Breadcrumb from '@/app/_components/ui/breadcrumb';
import { CustomizedCategoryFiltersType } from '@/app/_config/filters';
import { getCustomizedCatPageBreadcrumb } from '@/app/_lib/breadcrumbs';
import getServerContext from '@/app/_lib/get-server-context';
import customizedCategoryService from '@/app/_services/customized-category/customized-categories.service';
import { SearchParamsType } from '@/app/_types/utility.type';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import CategoryFilters from '../../categories/[slug]/_body/category-filters/category-filters';
import CustomizedCategoryProducts from './_body/customized-category-products/customized-category-products';
import CustomizedSubcategories from './_body/customized-subcategories/customized-subcategories';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { data: customizedCategory } = await customizedCategoryService.get({ slug: params.slug });

  if (!customizedCategory) return notFound();

  return {
    title: customizedCategory.name,
    description: customizedCategory.description || `${customizedCategory.name} products`,
  };
}

const CustomizedCategory = async ({
  params: { slug },
  searchParams,
}: {
  params: { slug: string };
  searchParams: SearchParamsType;
}) => {
  const filters: CustomizedCategoryFiltersType = {
    size: 10,
    page: 0,
    ...searchParams,
  };
  const { data: customizedCategory } = await customizedCategoryService.get({ slug, filters });

  if (!customizedCategory) return notFound();

  const { viewport } = getServerContext();

  return (
    <main className='relative overflow-hidden px-3 pb-14 md:px-11'>
      <Breadcrumb items={getCustomizedCatPageBreadcrumb(customizedCategory)} />

      <h1 className='my-3 text-center text-label md:hidden'>{customizedCategory.name}</h1>

      <Suspense>
        <CustomizedSubcategories categoryId={customizedCategory.customizedCategoryId} />
      </Suspense>

      <hr className='-mx-3 translate-y-3 border-2 md:hidden' />

      <div className='flex flex-col gap-[3%] md:flex-row'>
        <Suspense>
          <CategoryFilters category={customizedCategory} isDesktop={viewport.isDesktop} />
        </Suspense>
        <CustomizedCategoryProducts filters={filters} customizedCategory={customizedCategory} />
      </div>

      <Suspense>
        <SanitizedDescription label={customizedCategory.name} description={customizedCategory.description} />
      </Suspense>
    </main>
  );
};

export default CustomizedCategory;
