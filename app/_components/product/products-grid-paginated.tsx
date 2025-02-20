'use client';

import ProductsGrid from '@/app/_components/product/products-grid';
import Button from '@/app/_components/ui/button';
import LoadingSpinner from '@/app/_components/ui/loading-spinner';
import { useInfiniteProducts } from '@/app/_services/product/use-product';
import { APIFiltersType } from '@/app/_types/api.type';
import ArrowDown from '@/icons/arrows/arrow-down';

type ProductsGridPaginatedType<FiltersType = APIFiltersType> = {
  filters: FiltersType;
  grid?: 4 | 5 | 6;
};

// TODO: Make this fully reusable (useProducts hook should be dynamic)
const ProductsGridPaginated = <FiltersType extends APIFiltersType = APIFiltersType>({
  filters,
  grid = 5,
}: ProductsGridPaginatedType<FiltersType>) => {
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
          onClick={() => {
            window.history.pushState(
              null,
              '',
              `?page=${Number((products?.pageParams[products.pageParams.length - 1] as typeof filters).page) + 1}`,
            );
            fetchNextPage();
          }}
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

export default ProductsGridPaginated;
