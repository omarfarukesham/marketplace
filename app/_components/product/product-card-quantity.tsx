'use client';

import { PRODUCT_IMAGE_PLACEHOLDER } from '@/app/_config/resources';
import { ROUTES } from '@/app/_config/routes';
import { merge } from '@/app/_lib/merge';
import { CartItem } from '@/app/_types/cart.type';
import { ProductCampaignInfoType } from '@/app/_types/product.type';
import SadBox from '@/icons/product/sad-box';
import Image from 'next/image';
import Link from 'next/link';
import ProductQuantityUpdate from './product-selection-card/product-quantity-update';

type ProductCardQuantityType = {
  cartItem: CartItem;
  className?: string;
  shouldUpdate?: boolean;
};

const ProductCardQuantity = ({ cartItem, className, shouldUpdate = true }: ProductCardQuantityType) => {
  const {
    thumbnail,
    appliedPrice,
    hasDiscount,
    discountedAmount,
    slug,
    shippingCampaignInfo,
    isInStock,
    isInsufficientQuantity,
  } = cartItem.product ?? {};

  return (
    <div className={merge('group w-auto shrink-0 md:min-w-[9rem]', 'grid gap-1.5 md:gap-3', className)}>
      <div className='relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-t-md'>
        <span className='sr-only'>Product Image</span>
        <Link href={ROUTES.product(slug)} className='relative h-full w-full'>
          <Image
            src={thumbnail?.url || PRODUCT_IMAGE_PLACEHOLDER}
            alt={thumbnail?.altText || ''}
            fill
            sizes='(max-width: 768px) 100vw'
            className='rounded-t-md border border-gray-300 object-cover transition-transform group-hover:scale-105'
          />
          {!isInStock && (
            <div className='absolute left-0 top-0 flex h-full w-full items-center justify-center bg-black/70 text-center text-label'>
              <div className='flex h-full flex-col items-center justify-center gap-1 text-gray-200'>
                Out of Stock
                <SadBox />
              </div>
            </div>
          )}
          {isInsufficientQuantity && (
            <div className='absolute left-0 top-0 z-1 flex h-full w-full items-center justify-center bg-black/70 text-center'>
              <div className='flex flex-col items-center justify-center text-gray-200'>
                Insufficient Stock
                <SadBox />
              </div>
            </div>
          )}
        </Link>

        {shippingCampaignInfo && <ShippingCampaignInfo shippingCampaignInfo={shippingCampaignInfo} />}
      </div>

      <span className='flex items-end gap-2'>
        <span className='text-sm font-medium md:text-lg'>
          <span className='hidden md:inline'></span>
          {appliedPrice}
        </span>
        {hasDiscount ? (
          <span className='rounded bg-danger p-1 py-0.5 text-sm leading-none text-white md:py-1'>
            -{discountedAmount}
          </span>
        ) : null}
      </span>

      {shouldUpdate && isInStock && <ProductQuantityUpdate cartItem={cartItem} />}
      {!shouldUpdate && <span className='text-label font-medium'>Quantity: {cartItem.quantity}</span>}
    </div>
  );
};

const ShippingCampaignInfo = ({ shippingCampaignInfo }: { shippingCampaignInfo: ProductCampaignInfoType }) => {
  return (
    <div className='absolute left-0 top-0 rounded-br bg-secondary-900 px-2 py-1 text-xs shadow md:text-sm'>
      {shippingCampaignInfo.label}
    </div>
  );
};

export default ProductCardQuantity;
