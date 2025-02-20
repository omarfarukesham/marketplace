'use client';

import { getViewportClient } from '@/app/_lib/get-viewport-client';
import { useIsReviewExists } from '@/app/_services/product/use-product-reviews';
import { useUser } from '@/app/_store/user/user.context';
import { ProductType } from '@/app/_types/product.type';
import { forwardRef } from 'react';
import CreateReview from './create-review';
import CustomerReviewsInfinite from './customer-reviews-infinite';
import CustomerReviewsPaginated from './customer-reviews-paginated';
import ReviewExists from './review-exists';

const CustomerReviews = forwardRef<HTMLDivElement, { product: ProductType }>(({ product }, ref) => {
  const { isDesktop } = getViewportClient();
  const { isAuthenticated } = useUser();
  const { data: isReviewExists } = useIsReviewExists({ productId: product.id });

  return (
    <div className='grid gap-10'>
      {isAuthenticated && (isReviewExists ? <ReviewExists /> : <CreateReview productId={product.id} />)}
      {isDesktop ? (
        <CustomerReviewsPaginated product={product} ref={ref} />
      ) : (
        <CustomerReviewsInfinite product={product} ref={ref} />
      )}
    </div>
  );
});

CustomerReviews.displayName = 'CustomerReviews';
export default CustomerReviews;
