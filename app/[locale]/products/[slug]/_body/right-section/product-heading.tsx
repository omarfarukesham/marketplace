import Rating from '@/app/_components/ui/rating/rating';
import { ROUTES } from '@/app/_config/routes';
import { ProductType } from '@/app/_types/product.type';
import Store from '@/icons/store';
import Link from 'next/link';

type ProductHeadingType = {
  product: ProductType;
};

const ProductHeading = ({ product }: ProductHeadingType) => {
  return (
    <>
      <h1 className='mt-2 text-xl font-bold md:mt-0 md:text-2xl'>{product.title}</h1>
      <div className='mt-1.5 flex w-full flex-wrap items-center justify-between md:mt-5'>
        <div className='flex items-center gap-1.5'>
          <span className='font-bold'>Vendor</span>
          <span className='rounded-full bg-gray-300 p-1'>
            <Store />
          </span>

          <Link href={ROUTES.store(product.sellerSlug)}>{product.sellerStoreName}</Link>
          {/* <span className='hidden md:inline'>({product.totalSold}K Sold)</span> */}
        </div>

        <div className='mt-1.5 flex w-full items-center justify-between md:mt-0 md:w-auto'>
          {/* <span className='md:hidden'>({product.totalSold}K Sold)</span> */}
          {product.averageRating ? (
            <div className='ml-auto flex items-center gap-1.5' title={product.averageRating.toString()}>
              <Rating rating={product.averageRating} />
              <span>
                {product.averageRating}/5 ({product.totalRatingCount})
              </span>
            </div>
          ) : null}
        </div>
      </div>
      <div className='mt-1 flex items-center gap-3 md:mt-6'>
        <span className='text-2xl font-bold md:text-3xl'>{product.appliedPrice?.priceText || 'TBA'}</span>
        {product.hasDiscount && <del className='text-lg text-gray-800'>{product.price?.priceText}</del>}
        {product.hasDiscount && (
          <span className='whitespace-nowrap rounded bg-danger p-1 leading-none text-white'>
            -{product.discountedAmount}
          </span>
        )}
      </div>
    </>
  );
};

export default ProductHeading;
