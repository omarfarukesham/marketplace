'use client';

import Button from '@/app/_components/ui/button';
import ReviewLoading from '@/app/_components/ui/loading/review-loading';
import { DOM_IDS } from '@/app/_config/dom-ids';
import { useInfiniteProductReviews } from '@/app/_services/product/use-product-reviews';
import { APIFiltersType } from '@/app/_types/api.type';
import { ProductType } from '@/app/_types/product.type';
import ArrowDown from '@/icons/arrows/arrow-down';
import { forwardRef } from 'react';
import { default as Review } from './review';

const CustomerReviewsInfinite = forwardRef<HTMLDivElement, { product: ProductType }>(({ product }, ref) => {
  const filters: APIFiltersType = { size: 5, page: 0 };

  const {
    data: reviews,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isFetching,
  } = useInfiniteProductReviews({ productId: product.id, filters });

  if (error) return null;

  const allReviews = reviews?.pages?.map((page) => page?.items || []).flat();
  const isLoading = isFetching || isFetchingNextPage;
  const noReviews = !allReviews?.length && !isLoading;

  return (
    <div id={DOM_IDS.PRODUCT_REVIEWS} className='scroll-m-20' ref={ref}>
      <h2 className='mb-4 text-base font-bold md:text-2xl'>Customer Reviews</h2>
      <div className='mb-14 grid gap-8'>
        {allReviews?.length ? allReviews.map((review) => <Review key={review.id} review={review} />) : null}

        {isLoading && <ReviewLoading />}

        {noReviews && <p className='text-gray-500'>No review yet!</p>}
      </div>

      {allReviews?.length ? (
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
    </div>
  );
});

CustomerReviewsInfinite.displayName = 'CustomerReviewsInfinite';
export default CustomerReviewsInfinite;
