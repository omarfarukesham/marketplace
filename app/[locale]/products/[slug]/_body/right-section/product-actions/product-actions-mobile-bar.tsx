'use client';

import ClockLoader from '@/icons/product/clock-loader';

import { ProductType } from '@/app/_types/product.type';
import ShareArrow from '@/icons/arrows/share-arrow';
import AddToCartMobile from './add-to-cart/add-to-cart-mobile';

const ProductActionsMobileBar = ({
  product,
  disabled,
  handleBuyNow,
  handleShare,
}: {
  product: ProductType;
  disabled: boolean;
  handleBuyNow: () => void;
  handleShare: () => void;
}) => {
  return (
    <div className='fixed bottom-0 left-0 z-10 grid w-full gap-1 border-t border-gray-200 bg-white px-3 pb-2.5 pt-2.5'>
      {product.shouldShowStockWarning ? (
        <div className='flex items-center justify-center gap-1'>
          <span className='text-sm font-bold'>Hurry!</span>
          <ClockLoader className='fill-accent-4' />
          <span className='flex items-center gap-1.5 text-accent-4'>Only {product.stockCount} left in stock</span>
        </div>
      ) : null}

      <div className='flex h-10 items-center justify-center gap-3'>
        <AddToCartMobile product={product} disabled={disabled} />

        <button
          onClick={handleBuyNow}
          disabled={disabled}
          className='h-full shrink-0 rounded-full border px-3 text-base font-medium transition-all hover:text-white disabled:bg-gray-300 disabled:text-gray-500 nd:border-gray-900 nd:hover:scale-105 nd:hover:border-primary-900 nd:hover:bg-primary-900 nd:hover:shadow-lg'
        >
          Buy Now
        </button>
        <button
          onClick={handleShare}
          className='flex h-full shrink-0 items-center gap-1.5 rounded-full border border-gray-900 px-4 font-medium transition-all hover:text-white disabled:bg-gray-300 disabled:text-gray-500 nd:hover:scale-105 nd:hover:border-primary-900 nd:hover:bg-primary-900 nd:hover:shadow-lg'
        >
          <ShareArrow className='h-6 w-6 fill-gray-900' />
        </button>
      </div>
    </div>
  );
};

export default ProductActionsMobileBar;
