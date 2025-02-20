'use client';

import ReviewLoading from '@/app/_components/ui/loading/review-loading';
import Pagination from '@/app/_components/ui/pagination';
import { DOM_IDS } from '@/app/_config/dom-ids';
import { useProductReviews } from '@/app/_services/product/use-product-reviews';
import { ProductType } from '@/app/_types/product.type';
import { forwardRef, useEffect, useState } from 'react';
import { default as Review } from './review';

const CustomerReviewsPaginated = forwardRef<HTMLDivElement, { product: ProductType }>(({ product }, ref) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const LIMIT = 5;

  const { data: reviews, isLoading } = useProductReviews({
    productId: product.id,
    filters: { page: currentPage - 1, size: LIMIT },
  });

  useEffect(() => {
    setTotalPages(reviews?.paginate.totalPages || 1);
  }, [reviews]);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div id={DOM_IDS.PRODUCT_REVIEWS} className='scroll-m-20' ref={ref}>
      <h2 className='mb-4 text-base font-bold md:text-2xl'>Customer Reviews</h2>
      <div className='mb-14 grid gap-8'>
        {isLoading ? (
          <ReviewLoading />
        ) : reviews?.items?.length ? (
          reviews.items.map((review) => <Review key={review.id} review={review}></Review>)
        ) : (
          <p className='text-gray-500'>No review Yet</p>
        )}
      </div>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
          onPageChange={onPageChange}
        />
      )}
    </div>
  );
});

CustomerReviewsPaginated.displayName = 'CustomerReviewsPaginated';
export default CustomerReviewsPaginated;
