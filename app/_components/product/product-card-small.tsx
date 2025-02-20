import productPlaceholder from '@/app/_assets/product-placeholder.svg';
import { ROUTES } from '@/app/_config/routes';
import { merge } from '@/app/_lib/merge';
import { ProductCampaignInfoType, ProductType } from '@/app/_types/product.type';
import Image from 'next/image';
import Link from 'next/link';
import ProductCardCartButton from './product-card-cart-button';

type ProductCardSmallType = {
  product: ProductType;
  className?: string;
};

const ProductCardSmall = ({ product, className }: ProductCardSmallType) => {
  const { thumbnail, title, slug, appliedPrice, shippingCampaignInfo, discountedAmount } = product ?? {};
  // TODO: add campaigns here

  return (
    <div className={merge('group w-auto min-w-[8.75rem] shrink-0', 'grid gap-1.5 md:gap-3', className)}>
      <div className='relative overflow-hidden rounded-t-md border border-gray-300'>
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

        {shippingCampaignInfo && <ShippingCampaignInfo shippingCampaignInfo={shippingCampaignInfo} />}
        {discountedAmount && <ProductCampaignInfo discountedAmount={discountedAmount} />}
      </div>

      <Link href={ROUTES.product(slug)}>
        <h3 className='text-label font-regular'>{title}</h3>
      </Link>

      <div className='flex items-center justify-between'>
        <div className='grid gap-2'>
          <span className='flex items-end gap-2'>
            <span className='text-base font-bold'>{appliedPrice?.priceText}</span>
          </span>
        </div>
        <ProductCardCartButton product={product} />
      </div>
    </div>
  );
};

const ShippingCampaignInfo = ({ shippingCampaignInfo }: { shippingCampaignInfo: ProductCampaignInfoType }) => {
  return (
    <div className='absolute left-0 top-0 rounded-br bg-accent-4 px-2 py-1 text-xs text-white shadow md:text-sm'>
      {shippingCampaignInfo.label}
    </div>
  );
};

const ProductCampaignInfo = ({ discountedAmount }: { discountedAmount: string }) => {
  return (
    <div className='absolute bottom-0 left-1.5 h-fit -translate-y-1/2 rounded bg-accent-4 p-1 text-sm font-medium shadow'>
      -{discountedAmount}
    </div>
  );
};

export default ProductCardSmall;
