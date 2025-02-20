'use client';

import ProductsGrid from '@/app/_components/product/products-grid';
import Button from '@/app/_components/ui/button';
import LoadingSpinner from '@/app/_components/ui/loading-spinner';
import { CategoryFiltersType } from '@/app/_config/filters';
import { useInfiniteProducts } from '@/app/_services/product/use-product';
import ArrowDown from '@/icons/arrows/arrow-down';

const CategoryProductsList = ({ filters, grid = 5 }: { filters: CategoryFiltersType; grid?: 4 | 5 | 6 }) => {
  const {
    data: products,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isFetching,
  } = useInfiniteProducts({ filters });

  const allProducts = products?.pages.map((page) => page.items).flat();

  return (
    <div>
      {!allProducts?.length ? <p>No Product Found!</p> : <ProductsGrid products={allProducts} grid={grid} />}
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

export default CategoryProductsList;
