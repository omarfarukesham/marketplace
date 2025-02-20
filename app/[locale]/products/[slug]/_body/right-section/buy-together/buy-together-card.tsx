import { merge } from '@/app/_lib/merge';
import { ProductType } from '@/app/_types/product.type';
import StarFill from '@/icons/star-fill';
import Image from 'next/image';

type BuyTogetherCardType = {
  product: ProductType;
  className?: string;
  selected?: boolean;
  showCheckbox?: boolean;
  onCheckboxClick: (product: ProductType) => void;
};

const BuyTogetherCard = ({ product, className, selected, onCheckboxClick, showCheckbox }: BuyTogetherCardType) => {
  return (
    <div className={merge('group w-auto shrink-0', 'grid gap-2', className)}>
      <div className='relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-t-md'>
        <span className='sr-only'>Product Image</span>
        <Image
          src={product.thumbnail?.url ?? ''}
          alt={product.thumbnail?.altText || ''}
          fill
          sizes='(max-width: 768px) 100vw'
          className='object-cover transition-transform group-hover:scale-105'
        />
        {showCheckbox && (
          <input
            className='absolute right-1 top-1 h-5 w-5 border shadow-lg'
            onChange={() => onCheckboxClick(product)}
            type='checkbox'
            checked={selected}
          />
        )}
      </div>
      <h2 className='text-label font-regular'>{product.title}</h2>
      <div className='flex w-fit items-center gap-1 rounded bg-accent-4 px-1 py-0.5 text-label text-white'>
        {product.averageRating}
        <StarFill className='-translate-y-[1px] fill-white' />
      </div>
      <span className='flex items-end gap-2'>
        <span className='text-base font-medium md:text-lg md:font-bold'>{product.appliedPrice?.priceText}</span>
        {product.hasDiscount && <del className='text-xs text-gray-700 md:text-sm'>{product.price?.priceText}</del>}
        {product.hasDiscount && (
          <span className='rounded bg-danger p-1 leading-none text-white'>-{product.discountedAmount}</span>
        )}
      </span>
    </div>
  );
};

export default BuyTogetherCard;
