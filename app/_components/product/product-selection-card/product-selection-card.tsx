'use client';

import PLACEHOLDER_IMAGE_URL from '@/app/_assets/product-placeholder.svg';
import Bin from '@/app/_components/ui/bin';
import { ROUTES } from '@/app/_config/routes';
import { merge } from '@/app/_lib/merge';
import { useCartContext } from '@/app/_store/cart/cart.context';
import { CartItem } from '@/app/_types/cart.type';
import ClockLoader from '@/icons/product/clock-loader';
import SadBox from '@/icons/product/sad-box';
import Store from '@/icons/store';
import Tick from '@/icons/tick';
import Image from 'next/image';
import Link from 'next/link';
import { ChangeEvent } from 'react';
import toast from 'react-hot-toast';
import { Checkbox } from '../../ui/inputs/checkbox';
import ProductQuantityUpdate from './product-quantity-update';

const ProductSelectionCard = ({
  cartItem,
  isSelected = false,
  onSelect,
  onDelete,
  showCheckbox = true,
  shouldUpdateQuantity = true,
}: {
  cartItem: CartItem;
  isSelected?: boolean;
  onSelect?: (product: CartItem, isSelected: boolean) => void;
  onDelete?: (product: CartItem) => void;
  showCheckbox?: boolean;
  shouldUpdateQuantity?: boolean;
}) => {
  const { removeItemFromCart } = useCartContext();

  const handleDelete = async () => {
    const res = await removeItemFromCart(product.id);
    if (!res.success) return toast.error(res.message);
    toast.success(res.message);

    if (onDelete) onDelete(cartItem);
  };

  if (!cartItem.product) return null;

  const { product } = cartItem;

  return (
    <div className='flex items-start gap-2 border-b border-gray-300 py-3 md:items-center md:gap-5 md:py-6'>
      {showCheckbox && (
        <Checkbox
          className='md:h-5 md:w-5'
          containerClassName='my-auto'
          checked={isSelected}
          onChange={(e: ChangeEvent<HTMLInputElement>) => onSelect?.(cartItem, e.target.checked)}
          disabled={!product.isInStock}
        />
      )}

      <div className='relative shrink-0'>
        <Image
          src={product.thumbnail?.url || PLACEHOLDER_IMAGE_URL}
          alt={product.thumbnail?.altText || ''}
          height={120}
          width={120}
          className='h-20 w-20 object-cover md:h-28 md:w-28'
        />
        {!product.isInStock && (
          <div className='absolute left-0 top-0 flex h-full w-full items-center justify-center bg-black/70 text-center text-label'>
            <div className='flex h-full flex-col items-center justify-center gap-1 text-gray-200'>
              Out of Stock
              <SadBox />
            </div>
          </div>
        )}
        {product.isInsufficientQuantity && (
          <div className='absolute left-0 top-0 z-1 flex h-full w-full items-center justify-center bg-black/70 text-center'>
            <div className='flex flex-col items-center justify-center text-gray-200'>
              Insufficient Stock
              <SadBox />
            </div>
          </div>
        )}
      </div>

      <div className='relative flex grow flex-col items-stretch md:h-[7.5rem] md:flex-row md:justify-between'>
        <BasicInformation product={product} />

        <div className='flex flex-col-reverse md:flex-col md:items-end'>
          <button className='hidden md:block' onClick={handleDelete}>
            <Bin className='h-5 w-5 fill-gray-600' />
          </button>
          <button className='absolute right-0 top-0 md:hidden' onClick={handleDelete}>
            <Bin className='h-5 w-5 fill-gray-600' />
          </button>

          <div className='flex items-center justify-between md:mt-3'>
            <div className='flex items-center gap-1 md:flex-col md:items-end'>
              <div className='flex items-center gap-2'>
                {product.hasDiscount && (
                  <span className='absolute -left-[44px] top-0 rounded bg-danger p-1 text-sm leading-none text-white md:static'>
                    -{product.discountedAmount}
                  </span>
                )}
                <span className='text-label font-medium md:text-xl'>{product.appliedPrice}</span>
              </div>
              {product.hasDiscount ? (
                <del className='text-sm text-gray-800 md:text-right md:text-label'>{product.price}</del>
              ) : null}
            </div>
            {product.isInStock && (
              <QuantitySelection
                className='md:hidden'
                cartItem={cartItem}
                shouldUpdateQuantity={shouldUpdateQuantity}
              />
            )}
          </div>

          {product.isInStock && (
            <QuantitySelection
              className='hidden md:mt-auto md:flex'
              cartItem={cartItem}
              shouldUpdateQuantity={shouldUpdateQuantity}
            />
          )}
        </div>
      </div>
    </div>
  );
};

const BasicInformation = ({ product }: { product: CartItem['product'] }) => {
  return (
    <div className={merge('flex flex-col', !product.isInStock && 'text-gray-700')}>
      <div>
        <Link href={ROUTES.product(product.slug)}>
          <h1 className='mr-7 line-clamp-2 text-label font-regular md:mr-0 md:text-base md:font-bold'>
            {product.title}
          </h1>
        </Link>

        <div className='mt-1 flex items-center gap-1.5 text-sm md:mt-2 md:text-base'>
          <span>Vendor</span>
          <span className='rounded-full bg-gray-300 p-0.5 md:p-1'>
            <Store className='h-4 w-4 md:h-auto md:w-auto' />
          </span>
          <Link href={ROUTES.store(product.sellerSlug)} className='font-medium'>
            {product.sellerStoreName}
          </Link>
        </div>
      </div>
      <div className='mt-auto flex flex-wrap items-center gap-1 md:gap-3'>
        {product.shouldShowStockWarning && (
          <div className='mt-1 flex items-center gap-1 text-sm text-accent-4 md:gap-1.5 md:text-base'>
            <ClockLoader className='h-4 w-4 fill-accent-4 md:h-auto md:w-auto' />
            Only {product.stockCount} left in stock
          </div>
        )}
        {product.shippingCampaignInfo && (
          <div className='mt-1 flex items-center gap-1 text-sm text-accent-4 md:gap-1.5 md:text-base'>
            <Tick className='h-4 w-4 fill-accent-4 md:h-auto md:w-auto' />
            {product.shippingCampaignInfo.label}
          </div>
        )}
      </div>
    </div>
  );
};

const QuantitySelection = ({
  className,
  cartItem,
  shouldUpdateQuantity = true,
}: {
  className?: string;
  cartItem: CartItem;
  shouldUpdateQuantity?: boolean;
}) => {
  return (
    <div className={merge('flex items-center gap-1', className)}>
      {shouldUpdateQuantity ? (
        <ProductQuantityUpdate cartItem={cartItem} />
      ) : (
        <>
          <span className='text-sm'>Quantity:</span>
          <span className='text-label font-medium'>{cartItem.quantity}</span>
        </>
      )}
    </div>
  );
};

export default ProductSelectionCard;
