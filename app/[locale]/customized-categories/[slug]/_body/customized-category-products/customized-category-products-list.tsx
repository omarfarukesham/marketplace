'use client';

import ProductsGrid from '@/app/_components/product/products-grid';
import Button from '@/app/_components/ui/button';
import LoadingSpinner from '@/app/_components/ui/loading-spinner';
import { CustomizedCategoryFiltersType } from '@/app/_config/filters';
import { useCustomizedCategoryInfiniteProducts } from '@/app/_services/customized-category/use-customized-categories';
import { CustomizedCategoryType } from '@/app/_types/category.type';
import ArrowDown from '@/icons/arrows/arrow-down';

const CustomizedCategoryProductsList = ({
  filters,
  customizedCategory,
}: {
  filters: CustomizedCategoryFiltersType;
  customizedCategory: CustomizedCategoryType;
}) => {
  const {
    data: customizedCategoryWithProducts,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isFetching,
  } = useCustomizedCategoryInfiniteProducts({
    slug: customizedCategory.slug,
    filters,
    initialData: { pages: [customizedCategory], pageParams: [filters] },
  });

  const allProducts = customizedCategoryWithProducts?.pages?.map((page) => page.products?.items || []).flat();

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

export default CustomizedCategoryProductsList;
