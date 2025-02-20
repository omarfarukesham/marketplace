'use client';

import ProductsGrid from '@/app/_components/product/products-grid';
import Button from '@/app/_components/ui/button';
import LoadingSpinner from '@/app/_components/ui/loading-spinner';
import { BaseFiltersType } from '@/app/_config/filters';
import { useInfiniteBestSellingProducts } from '@/app/_services/product/use-product';
import ArrowDown from '@/icons/arrows/arrow-down';

const BestSellingProductsList = ({ slug, filters }: { slug: string; filters: BaseFiltersType }) => {
  const {
    data: products,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isFetching,
  } = useInfiniteBestSellingProducts({ slug, filters });

  const allProducts = products?.pages.map((page) => page.items).flat();

  return (
    <div>
      {!allProducts?.length ? <p>No Product Found!</p> : <ProductsGrid products={allProducts} grid={5} />}
      {(isFetching || isFetchingNextPage) && <LoadingSpinner />}

      {allProducts?.length ? (
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

export default BestSellingProductsList;
