'use client';

import Drawer from '@/app/_components/ui/drawer';
import { ProductType } from '@/app/_types/product.type';
import Image from 'next/image';
import { Dispatch, SetStateAction, useState } from 'react';

import { useProduct } from '@/app/_services/product/use-product';
import ClockLoader from '@/icons/product/clock-loader';
import { Swiper, SwiperSlide } from 'swiper/react';
import Variants from '../../../variants/variants';
import AddToCart from '../add-to-cart';

type AddToCartModalType = {
  setCartModalOpen: Dispatch<SetStateAction<boolean>>;
  product: ProductType;
  slug: string;
};

const AddToCartMobileDrawer = ({ setCartModalOpen, product: initialProduct }: AddToCartModalType) => {
  const [slug, setSlug] = useState(initialProduct.slug);

  const [cartButtonDisabled, setCartButtonDisabled] = useState(false);

  const { data: product } = useProduct({ slug, queryConfig: { placeholderData: initialProduct } });

  if (!product) return null;

  return (
    <Drawer
      size='lg'
      title='Confirm!'
      onClose={() => setCartModalOpen(false)}
      className='thin-scrollbar grid content-start gap-5 overflow-y-auto px-2.5'
    >
      <Swiper slidesPerView={2.2} className='h-[9.375rem] w-full' spaceBetween={10}>
        {product.images?.map((img) => (
          <SwiperSlide key={img.url}>
            <Image src={img.url} alt={img.altText} height={150} width={150} className='aspect-square' />
          </SwiperSlide>
        ))}
      </Swiper>

      <div>
        <h1 className='text-ellipsis text-base font-medium'>{product.title}</h1>

        <div className='mt-1 flex items-center gap-3'>
          <span className='text-2xl font-bold'>{product.appliedPrice?.priceText}</span>
          {product.hasDiscount && <del className='text-lg text-gray-800'>{product.price?.priceText}</del>}
          {product.hasDiscount && (
            <span className='whitespace-nowrap rounded bg-danger p-1 leading-none text-white'>
              -{product.discountedAmount}
            </span>
          )}
        </div>
      </div>

      {product.variants?.length ? (
        <Variants
          product={product}
          onVariantChange={(matchedVariant) => {
            if (matchedVariant?.productSlug) {
              setSlug(matchedVariant.productSlug);
            }
            setCartButtonDisabled(!matchedVariant);
          }}
        />
      ) : null}

      {/* <QuantityUpdate quantity={quantity} setQuantity={setQuantity} /> */}
      {product.shouldShowStockWarning ? (
        <span className='flex items-center gap-1.5 text-accent-4'>
          <ClockLoader className='fill-accent-4' />
          Only {product.stockCount} left in stock
        </span>
      ) : null}

      <div className='border-t border-gray-200 p-3'>
        <AddToCart product={product} disabled={cartButtonDisabled} />
      </div>
    </Drawer>
  );
};

export default AddToCartMobileDrawer;
