import ProductCard from '@/app/_components/product/product-card';
import Button from '@/app/_components/ui/button';
import ProductsGridLoading from '@/app/_components/ui/loading/products-grid-loading';
import { useCustomizedCategoryInfiniteProducts } from '@/app/_services/customized-category/use-customized-categories';
import { APIFiltersType } from '@/app/_types/api.type';
import ArrowDown from '@/icons/arrows/arrow-down';

const RecommendationProducts = ({ activeCategorySlug }: { activeCategorySlug: string }) => {
  const filters: APIFiltersType = { size: 6, page: 0 };
  const {
    data: customizedCategoryWithProducts,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isFetching,
  } = useCustomizedCategoryInfiniteProducts({ slug: activeCategorySlug, filters });

  if (error) return null;

  const allProducts = customizedCategoryWithProducts?.pages?.map((page) => page.products?.items || []).flat();
  const isLoading = isFetching || isFetchingNextPage;
  const noProducts = !allProducts?.length && !isLoading;

  return (
    <>
      <div className='grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-7 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>
        {allProducts?.length ? allProducts.map((product) => <ProductCard key={product.id} product={product} />) : null}

        {isLoading && <ProductsGridLoading className='col-span-6' />}

        {noProducts && <p className='p-1 text-gray-700'>No Products found!</p>}
      </div>
      {allProducts?.length ? (
        <Button
          onClick={() => fetchNextPage()}
          rounded
          outlined
          color='primary'
          size='lg'
          className='mx-auto mt-3 border-none shadow md:mt-11'
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
    </>
  );
};

export default RecommendationProducts;
