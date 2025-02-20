'use client';

import { DOM_IDS } from '@/app/_config/dom-ids';
import useIntersection from '@/app/_lib/hooks/useIntersection';
import { ProductType } from '@/app/_types/product.type';
import { useRef } from 'react';
import CustomerReviews from '../customer-reviews/customer-reviews';
import DetailsMenu from './details-menu';
import ProductDescription from './product-description';
import ProductSpecification from './product-specification';

const ProductDetails = ({ product }: { product: ProductType }) => {
  const descriptionRef = useRef<HTMLDivElement>(null);
  const specificationRef = useRef<HTMLDivElement>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);

  const sections = [
    {
      id: DOM_IDS.PRODUCT_DESCRIPTION,
      highlightPosition: 'left-0 w-[90px]',
      label: 'Description',
      intersection: useIntersection(descriptionRef, {
        root: null,
        rootMargin: '0px',
        threshold: 1,
      }),
    },
    {
      id: DOM_IDS.PRODUCT_SPECIFICATION,
      highlightPosition: 'left-[105px] md:left-[140px] w-28',

      label: 'Specifications',
      intersection: useIntersection(specificationRef, {
        root: null,
        rootMargin: '0px',
        threshold: 1,
      }),
    },
    {
      id: DOM_IDS.PRODUCT_REVIEWS,
      highlightPosition: 'left-[235px] md:left-[305px] w-36',
      label: 'Customer Reviews',
      intersection: useIntersection(reviewsRef, {
        root: null,
        rootMargin: '0px',
        threshold: 1,
      }),
    },
    {
      id: DOM_IDS.PRODUCT_RECOMMENDATION,
      highlightPosition: '',
      label: 'Recommendation',
    },
  ];

  return (
    <section id={DOM_IDS.PRODUCT_DETAILS}>
      <DetailsMenu sections={sections} />

      <div className='grid gap-14'>
        <ProductDescription ref={descriptionRef} product={product} />
        <ProductSpecification ref={specificationRef} product={product} />
        <CustomerReviews ref={reviewsRef} product={product} />
      </div>
    </section>
  );
};

export default ProductDetails;
