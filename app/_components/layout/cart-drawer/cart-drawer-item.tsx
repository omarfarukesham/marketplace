'use client';

import { PRODUCT_IMAGE_PLACEHOLDER } from '@/app/_config/resources';
import { ROUTES } from '@/app/_config/routes';
import { merge } from '@/app/_lib/merge';
import { CartItem } from '@/app/_types/cart.type';
import { ProductCampaignInfoType } from '@/app/_types/product.type';
import SadBox from '@/icons/product/sad-box';
import Image from 'next/image';
import Link from 'next/link';
import ProductQuantityUpdate from '../../product/product-selection-card/product-quantity-update';

type ProductCardQuantityType = {
  cartItem: CartItem;
  className?: string;
  shouldUpdate?: boolean;
};

const CartDrawerItem = ({ cartItem, className, shouldUpdate = true }: ProductCardQuantityType) => {
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
    <div className={merge('relative flex justify-between gap-3 rounded-lg border-2 p-3', className)}>
      <Link href={ROUTES.product(slug)} className='relative aspect-square w-2/5 overflow-hidden rounded bg-gray-100'>
        <Image
          src={thumbnail?.url || PRODUCT_IMAGE_PLACEHOLDER}
          alt={thumbnail?.altText}
          width={200}
          height={200}
          className='h-full w-full rounded object-contain'
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
            <div className='flex h-full flex-col items-center justify-center gap-1 text-gray-200'>
              Insufficient Stock
              <SadBox />
            </div>
          </div>
        )}
      </Link>
      {shippingCampaignInfo && <ShippingCampaignInfo shippingCampaignInfo={shippingCampaignInfo} />}
      <div className='flex flex-col'>
        <p className='flex justify-end gap-1'>
          {appliedPrice}
          {hasDiscount ? (
            <span className='rounded bg-danger p-1 py-0.5 text-sm leading-none text-white md:py-1'>
              -{discountedAmount}
            </span>
          ) : null}
        </p>
        {/* <ProductQuantityUpdate cartItem={cartItem} /> */}
        {shouldUpdate && isInStock && (
          <div className='ml-auto mt-auto'>
            <ProductQuantityUpdate cartItem={cartItem} inputClassName='md:max-w-[60px]' />
          </div>
        )}
        {!shouldUpdate && <span className='mt-auto text-label font-medium'>Quantity: {cartItem.quantity}</span>}
      </div>
    </div>
  );
};

const ShippingCampaignInfo = ({ shippingCampaignInfo }: { shippingCampaignInfo: ProductCampaignInfoType }) => {
  return (
    <div className='absolute left-0 top-0 rounded-br rounded-tl bg-secondary-900 px-2 py-1 text-xs shadow md:text-sm'>
      {shippingCampaignInfo.label}
    </div>
  );
};

export default CartDrawerItem;
