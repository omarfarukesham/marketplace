import Breadcrumb from '@/app/_components/ui/breadcrumb';
import { PAGINATION_SIZE, SearchFiltersType } from '@/app/_config/filters';
import { getViewport } from '@/app/_lib/get-viewport';
import { TempCategoryType } from '@/app/_lib/static-data/categories-data';
import { Suspense } from 'react';
import CategoryFilters from '../categories/[slug]/_body/category-filters/category-filters';
import SearchProducts from './_body/search-products/search-products';

export async function generateMetadata({ searchParams }: { searchParams: { q: string } }) {
  return {
    title: `${searchParams.q} Search Results`,
    description: `Products for search ${searchParams.q}`,
  };
}

const Search = async ({ searchParams }: { searchParams: SearchFiltersType }) => {
  const query = searchParams.q;

  const filters: SearchFiltersType = {
    size: PAGINATION_SIZE,
    page: 0,
    ...searchParams,
    titleEn: query || '', // temp
  };

  const BREADCRUMB_ITEMS = [
    { label: 'Home', link: '/' },
    { label: 'Search', link: `/search` },
  ];

  const { isDesktop } = getViewport();

  return (
    <main className='mx-3 mb-14 md:mx-11'>
      <Breadcrumb items={BREADCRUMB_ITEMS} />

      <div className='flex flex-col gap-[3%] md:my-12 md:flex-row'>
        <Suspense>
          <CategoryFilters category={{} as TempCategoryType} isDesktop={isDesktop} />
        </Suspense>
        {query?.length ? <SearchProducts filters={filters} query={query} /> : <p>Please Search Something</p>}
      </div>
    </main>
  );
};

export default Search;
