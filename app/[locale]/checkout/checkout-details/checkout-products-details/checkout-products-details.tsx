'use client';

import ProductsGridLoading from '@/app/_components/ui/loading/products-grid-loading';
import { ROUTES } from '@/app/_config/routes';
import GTM_EVENTS from '@/app/_lib/gtm/events';
import { DataLayerOnLoad } from '@/app/_lib/gtm/send-data';
import { useCartQuery } from '@/app/_services/cart/use-cart';
import Info from '@/icons/info';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import CheckoutProductsHeader from './checkout-products-header';
const CheckoutProductsList = dynamic(() => import('./checkout-products-list'), { ssr: false });

const CheckoutProductsDetails = () => {
  const searchParams = useSearchParams();

  const { data: cart, isLoading } = useCartQuery({
    filters: {
      ...(searchParams.get('productId') && { productId: searchParams.get('productId') as string }),
      pageReqType: 'checkout',
    },
  });

  const checkoutProducts = cart?.items || [];

  return (
    <div className='overflow-x-hidden'>
      {cart?.items?.length && checkoutProducts?.length ? (
        <DataLayerOnLoad
          eventName={GTM_EVENTS.BEGIN_CHECKOUT}
          data={{
            items: checkoutProducts,
            currency: cart?.currencyCode,
            value: cart?.summary?._netAmount,
            coupon: cart?.summary?.couponCode,
          }}
        />
      ) : null}
      <CheckoutProductsHeader items={checkoutProducts} />

      {isLoading ? (
        <div className='my-5'>
          <ProductsGridLoading grid={4} />
        </div>
      ) : checkoutProducts?.length ? (
        <CheckoutProductsList items={checkoutProducts} />
      ) : (
        <div className='flex h-64 w-full flex-col items-center justify-center gap-1'>
          <p className='flex items-center gap-1 text-xl'>
            <Info />
            No item found
          </p>
          <p className='text-center'>
            Add some products to cart and make user they are selected in your{' '}
            <Link href={ROUTES.cart} className='underline'>
              cart
            </Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default CheckoutProductsDetails;
