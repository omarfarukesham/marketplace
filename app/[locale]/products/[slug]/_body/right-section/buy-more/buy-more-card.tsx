import ProductCardCartButton from '@/app/_components/product/product-card-cart-button';
import { ROUTES } from '@/app/_config/routes';
import { merge } from '@/app/_lib/merge';
import { ProductType } from '@/app/_types/product.type';
import StarFill from '@/icons/star-fill';
import Image from 'next/image';
import Link from 'next/link';

type BuyMoreCardType = {
  product: ProductType;
  className?: string;
};

const BuyMoreCard = ({ product, className }: BuyMoreCardType) => {
  return (
    <div className={merge('group relative w-auto shrink-0', 'grid gap-1', className)}>
      <Link href={ROUTES.product(product.slug)}>
        <div className='relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-t-md border border-gray-300'>
          <span className='sr-only'>Product Image</span>
          <Image
            src={product.thumbnail?.url ?? ''}
            alt={product.thumbnail?.altText || ''}
            fill
            sizes='(max-width: 768px) 100vw'
            className='object-cover transition-transform group-hover:scale-105'
          />
        </div>
      </Link>
      <Link href={ROUTES.product(product.slug)}>
        <h2 className='line-clamp-1 text-label font-regular'>{product.title}</h2>
      </Link>
      {product.averageRating ? (
        <div className='flex w-fit items-center gap-1 rounded bg-accent-4 px-1 pt-0.5 text-label text-white'>
          {product.averageRating}
          <StarFill className='-translate-y-[1px] fill-white' />
        </div>
      ) : null}
      <div className='flex items-center justify-between'>
        <span className='flex items-center gap-1 md:gap-2'>
          <span className='text-sm font-medium md:font-bold'>{product.appliedPrice?.priceText}</span>
          {product.hasDiscount && <del className='text-xs text-gray-700 md:text-sm'>{product.price?.priceText}</del>}
          {product.hasDiscount && (
            <span className='absolute right-0 top-0 whitespace-nowrap rounded bg-danger p-1 leading-none text-white'>
              -{product.discountedAmount}
            </span>
          )}
        </span>
        <ProductCardCartButton product={product} />
      </div>
    </div>
  );
};

export default BuyMoreCard;
