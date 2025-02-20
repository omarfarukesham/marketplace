'use client';

import ProductsGrid from '@/app/_components/product/products-grid';
import Button from '@/app/_components/ui/button';
import LoadingSpinner from '@/app/_components/ui/loading-spinner';
import { useInfiniteFeaturedCategory } from '@/app/_services/featured-category/user-featured-category';
import { APIFiltersType } from '@/app/_types/api.type';
import { ShelfType } from '@/app/_types/shelf.type';
import ArrowDown from '@/icons/arrows/arrow-down';

const FeaturedCategoryProducts = ({
  code,
  filters,
  initialCategory,
}: {
  code: string;
  filters: APIFiltersType;
  initialCategory: ShelfType;
}) => {
  const {
    data: category,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteFeaturedCategory({
    code,
    filters,
    initialData: { pages: [initialCategory], pageParams: [filters] },
  });

  const products = category?.pages.map((page) => page.products?.items || []).flat();

  return (
    <div>
      {products?.length ? <ProductsGrid products={products} /> : <p>No Product found</p>}

      {(isFetching || isFetchingNextPage) && <LoadingSpinner />}

      {products?.length ? (
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

export default FeaturedCategoryProducts;
