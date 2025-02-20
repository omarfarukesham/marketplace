'use client';

import ProductsGrid from '@/app/_components/product/products-grid';
import Button from '@/app/_components/ui/button';
import ProductsGridLoading from '@/app/_components/ui/loading/products-grid-loading';
import { useInfiniteRelevantProducts } from '@/app/_services/product/use-product';
import ArrowDown from '@/icons/arrows/arrow-down';

// TODO: this should be reusable
const RelatedProducts = ({ productId }: { productId: string }) => {
  const {
    data: products,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isFetching,
  } = useInfiniteRelevantProducts({ id: productId, type: 'RELATED', filters: { page: 0, size: 5 } });

  const allProducts = products?.pages.map((page) => page.items).flat() || [];

  const isLoading = isFetching || isFetchingNextPage;

  return (
    <div className='my-5 md:my-16'>
      <h2 className='mb-3 text-center text-base font-bold uppercase md:mb-7 md:text-2xl md:capitalize'>
        Related Products
      </h2>
      {!isLoading && !allProducts?.length ? <p>No Product Found!</p> : <ProductsGrid products={allProducts} />}
      {isLoading && <ProductsGridLoading />}

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

export default RelatedProducts;
