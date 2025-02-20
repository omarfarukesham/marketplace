'use client';

import { DOM_IDS } from '@/app/_config/dom-ids';
import { merge } from '@/app/_lib/merge';
import { ProductType } from '@/app/_types/product.type';
import DOMPurify from 'dompurify';
import { forwardRef, useEffect, useRef, useState } from 'react';
import ViewAllButton from './view-all-button';

const ProductDescription = forwardRef<HTMLDivElement, { product: ProductType }>(({ product }, ref) => {
  const [sanitizedDescription, setSanitizedDescription] = useState('');

  useEffect(() => {
    setSanitizedDescription(DOMPurify.sanitize(product.description));
  }, [product.description]);

  const [viewAll, setViewAll] = useState(false);

  const [showButton, setShowButton] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current && contentRef.current.offsetHeight > 300) {
      setShowButton(true);
    }
  }, [product, sanitizedDescription]);

  return (
    <div id={DOM_IDS.PRODUCT_DESCRIPTION} className='relative scroll-m-20 pb-14' ref={ref}>
      <h2 className='mb-4 text-base font-bold md:text-2xl'>Description</h2>
      <div
        className={merge('no-scrollbar max-h-[350px] overflow-hidden', viewAll && 'max-h-none')}
        ref={contentRef}
        dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
      ></div>
      {showButton && <ViewAllButton viewAll={viewAll} setViewAll={setViewAll} />}
    </div>
  );
});

ProductDescription.displayName = 'ProductDescription';
export default ProductDescription;
