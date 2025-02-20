'use client';

import Breadcrumb from '@/app/_components/ui/breadcrumb';
import { getCheckoutPageBreadcrumb } from '@/app/_lib/breadcrumbs';
import { merge } from '@/app/_lib/merge';
import dynamic from 'next/dynamic';
import { Inter } from 'next/font/google';
import CheckoutDetails from './checkout-details/checkout-details';
import CheckoutOrderSummary from './checkout-order-summary/checkout-order-summary';

const CheckoutBottomNav = dynamic(() => import('./checkout-bottom-nav/checkout-bottom-nav'), { ssr: false });

const inter = Inter({ subsets: ['latin'], display: 'swap', adjustFontFallback: false });

const Checkout = () => {
  return (
    <main className={merge('mx-3 md:mx-11', inter.className)}>
      <Breadcrumb items={getCheckoutPageBreadcrumb()} />

      <div className='flex flex-col items-start gap-[5%] md:flex-row'>
        <CheckoutDetails /> {/* left section */}
        <CheckoutOrderSummary /> {/* right section */}
      </div>

      <CheckoutBottomNav />
    </main>
  );
};

export default Checkout;
