import productPlaceholder from '@/app/_assets/product-placeholder.svg';
import { ROUTES } from '@/app/_config/routes';
import { merge } from '@/app/_lib/merge';
import { ImageType, ProductCampaignInfoType, ProductType } from '@/app/_types/product.type';
import Image from 'next/image';
import Link from 'next/link';
import Countdown from '../ui/countdown/countdown';
import { default as Rating } from '../ui/rating/rating';
import ProductCardCartButton from './product-card-cart-button';

type ProductCardType = {
  product: ProductType;
  className?: string;
};

const ProductCard = ({ product, className }: ProductCardType) => {
  const {
    thumbnail,
    title,
    averageRating,
    totalRatingCount,
    slug,
    productCampaignInfo,
    discountedAmount,
    shippingCampaignInfo,
  } = product ?? {};

  return (
    <div className={merge('group relative w-auto min-w-[10.8rem] shrink-0', 'grid gap-1', className)}>
      <div className='relative overflow-hidden rounded-t-md border border-gray-300'>
        <ProductImage thumbnail={thumbnail} slug={slug} />

        {productCampaignInfo && (
          <ProductCampaignInfo productCampaignInfo={productCampaignInfo} discountedAmount={discountedAmount} />
        )}
        {shippingCampaignInfo && <ShippingCampaignInfo shippingCampaignInfo={shippingCampaignInfo} />}

        {/* <WishlistButton /> */}
      </div>

      <Link href={ROUTES.product(slug)} className='mt-1'>
        <h3 title={title} className='line-clamp-1 text-sm font-medium md:text-base'>
          {title.slice(0, 60)}
        </h3>
      </Link>

      <SellInfo product={product} />

      <div className='flex items-center justify-between'>
        <div className='grid gap-1'>
          <PriceInfo product={product} />
          {averageRating ? <RatingInfo averageRating={averageRating} totalRatingCount={totalRatingCount} /> : null}
        </div>
        <ProductCardCartButton product={product} />
      </div>
    </div>
  );
};

const ProductImage = ({ thumbnail, slug }: { thumbnail?: ImageType; slug: string }) => {
  return (
    <>
      <span className='sr-only'>Product Image</span>
      <Link href={ROUTES.product(slug)} className='relative flex aspect-square w-full items-center justify-center'>
        <Image
          src={thumbnail?.url ?? productPlaceholder}
          alt={thumbnail?.altText || ''}
          fill
          sizes='(max-width: 768px) 100vw'
          className='rounded-t-md object-cover transition-transform group-hover:scale-105'
        />
      </Link>
    </>
  );
};

const ProductCampaignInfo = ({
  productCampaignInfo,
  discountedAmount,
}: {
  productCampaignInfo: ProductCampaignInfoType;
  discountedAmount: string | undefined;
}) => {
  return (
    <div className='absolute bottom-0 left-0 h-7 w-full md:h-9'>
      {productCampaignInfo.effectiveEndDate && (
        <div className='absolute right-0 top-1/2 z-1 flex -translate-y-1/2 items-center gap-1 whitespace-nowrap text-xs text-white md:right-4 md:text-label'>
          <span className='hidden md:inline'>Ends:</span>
          <Countdown
            targetDate={productCampaignInfo.effectiveEndDate.getTime()}
            className='!gap-0 md:!gap-1'
            itemClassName='!bg-transparent md:!p-0 text-xs md:!text-label font-regular !w-auto !h-auto text-white'
          />
        </div>
      )}
      <Image
        src={productCampaignInfo.headerImage?.url}
        alt={productCampaignInfo.headerImage?.altText}
        fill
        sizes='(max-width: 768px) 50vw'
      />
      {discountedAmount && (
        <div className='absolute left-1.5 top-1/2 -translate-y-1/2 rounded bg-white p-1 text-sm font-medium shadow'>
          -{discountedAmount}
        </div>
      )}
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

const SellInfo = ({ product }: { product: ProductType }) => {
  if (!product.shouldShowStockWarning && product.isInStock) return null;

  return (
    <div className='flex items-center leading-0'>
      {/* <p className='mr-2 text-xs font-bold text-gray-700 md:text-sm md:font-medium'>5.2K+ Sold</p> */}
      {product.shouldShowStockWarning ? (
        <p className='text-xs font-bold text-accent-4 transition-all group-hover:shadow-accent-4/80 md:text-sm md:font-medium'>
          Only {product.stockCount} Left
        </p>
      ) : (
        <p></p>
      )}
      {!product.isInStock && (
        <div className='absolute right-0 top-0 rounded-bl rounded-tr bg-accent-4 p-1 text-sm font-medium text-white md:hidden'>
          Sold Out
        </div>
      )}
    </div>
  );
};

const PriceInfo = ({ product }: { product: ProductType }) => {
  const { appliedPrice, price, hasDiscount } = product;

  const currency = appliedPrice?.symbol;
  const integerPart = parseInt(appliedPrice?.priceValue.toString());
  const decimalPart = appliedPrice?.priceValue.toFixed(2).split('.')[1];

  return (
    <div className='line-clamp-1 flex items-center gap-1 md:gap-2'>
      <div className='leading-0'>
        <span className='text-label font-medium md:text-lg md:font-bold'>
          {currency}
          {integerPart}
        </span>
        <span className='text-xs font-medium md:text-sm md:font-bold'>.{decimalPart}</span>
      </div>
      {hasDiscount && <del className='translate-y-0.5 text-xs text-gray-700 md:text-sm'>{price.priceText}</del>}
    </div>
  );
};

const RatingInfo = ({ averageRating, totalRatingCount }: { averageRating: number; totalRatingCount: number }) => {
  return (
    <div className='flex items-center gap-1'>
      <Rating rating={averageRating || 0} size='sm' />
      <span className='translate-y-[1.5px] text-xs font-bold md:text-label md:font-medium'>
        ({totalRatingCount || 0})
      </span>
    </div>
  );
};

// const WishlistButton = () => {
//   return (
//     <div className='invisible absolute right-2 top-2 h-9 w-9 rounded-full bg-white p-2 group-hover:visible'>
//       <Heart className='h-full w-full' />
//     </div>
//   );
// };
export default ProductCard;
