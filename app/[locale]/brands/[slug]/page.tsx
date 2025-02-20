import SanitizedDescription from '@/app/_components/misc/sanitized-description';
import Breadcrumb from '@/app/_components/ui/breadcrumb';
import { BrandFiltersType, PAGINATION_SIZE } from '@/app/_config/filters';
import { getViewport } from '@/app/_lib/get-viewport';
import brandService from '@/app/_services/brand/brand.service';
import { SearchParamsType } from '@/app/_types/utility.type';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import BrandsFilters from '../_body/brands-filters';
import BrandCategories from './_body/brand-categories/brand-categories';
import BrandProducts from './_body/brand-products/brand-products';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { data: brand } = await brandService.get({ slug: params.slug });

  if (!brand) return notFound();

  return {
    title: brand.name,
    description: `${brand.name} products`,
  };
}

const Brand = async ({
  params: { slug },
  searchParams,
}: {
  params: { slug: string };
  searchParams: SearchParamsType;
}) => {
  const { data: brand } = await brandService.get({ slug });

  if (!brand) return notFound();

  const filters: BrandFiltersType = {
    brandId: brand.id,
    size: PAGINATION_SIZE,
    page: 0,
    ...searchParams,
  };

  const BREADCRUMB_ITEMS = [
    { label: 'Home', link: '/' },
    { label: 'Brands', link: '/brands' },
    {
      label: brand.name,
      link: `/brands/${brand.slug}`,
    },
  ];

  const { isDesktop } = getViewport();

  return (
    <main className='mx-3 mb-14 md:mx-11'>
      <Breadcrumb items={BREADCRUMB_ITEMS} />

      <Suspense>
        <BrandCategories brandId={brand.id} />
      </Suspense>

      <div className='flex flex-col gap-[3%] md:flex-row'>
        <Suspense>
          <BrandsFilters isDesktop={isDesktop} />
        </Suspense>
        <BrandProducts filters={filters} brand={brand} />
      </div>

      <Suspense>
        <SanitizedDescription label={brand.name} description={brand.description} />
      </Suspense>
    </main>
  );
};

export default Brand;
