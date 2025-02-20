'use client';

import FeaturedBrandsGrid from '@/app/[locale]/(home)/_body/featured-brands/featured-brands-grid';
import Button from '@/app/_components/ui/button';
import LoadingSpinner from '@/app/_components/ui/loading-spinner';
import { BaseFiltersType } from '@/app/_config/filters';
import { useInfiniteBrands } from '@/app/_services/brand/use-brand';
import ArrowDown from '@/icons/arrows/arrow-down';

const BrandListBody = ({ filters }: { filters: BaseFiltersType }) => {
  const {
    data: brands,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isFetching,
  } = useInfiniteBrands({
    filters,
  });

  const allBrands = brands?.pages?.map((page) => page?.items || []).flat();

  return (
    <div>
      {!allBrands?.length ? <p>No Brand Found!</p> : <FeaturedBrandsGrid brands={allBrands || []} />}
      {(isFetching || isFetchingNextPage) && <LoadingSpinner />}

      {allBrands?.length ? (
        <Button
          onClick={() => fetchNextPage()}
          rounded
          outlined
          color='primary'
          size='lg'
          className='mx-auto mt-11 border-none shadow'
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {hasNextPage ? (
            <>
              View More <ArrowDown />
            </>
          ) : (
            'Nothing more to load'
          )}
        </Button>
      ) : null}
    </div>
  );
};

export default BrandListBody;
