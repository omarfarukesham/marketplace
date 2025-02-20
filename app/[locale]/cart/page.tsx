import Breadcrumb from '@/app/_components/ui/breadcrumb';
import { getCartPageBreadcrumb } from '@/app/_lib/breadcrumbs';
import { getViewport } from '@/app/_lib/get-viewport';
import { SearchParamsType } from '@/app/_types/utility.type';
import dynamic from 'next/dynamic';
import CartItemsList from './cart-items-list/cart-items-list';
import CartOrderSummary from './cart-order-summary/cart-order-summary';

const CartBottomNav = dynamic(() => import('./cart-bottom-nav/cart-bottom-nav'), { ssr: false });

const Cart = ({ searchParams }: { searchParams?: SearchParamsType }) => {
  const { isDesktop } = getViewport();

  return (
    <main className='mx-3 md:mx-11'>
      <Breadcrumb items={getCartPageBreadcrumb()} />

      <div className='flex flex-col items-start gap-[5%] md:flex-row'>
        <CartItemsList searchParams={searchParams} />
        <CartOrderSummary />
      </div>

      {/* {isDesktop && (
        <section className='mt-24'>
          <RecommendedProducts id='' />
          <RelatedProducts />
        </section>
      )} */}

      {!isDesktop && <CartBottomNav />}
    </main>
  );
};

export default Cart;
