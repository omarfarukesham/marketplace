import dynamic from 'next/dynamic';
import PaymentMethods from '../checkout-details/payment-methods/payment-methods';
import CheckoutHelpingInformation from './checkout-helping-information';
import CheckoutPriceCalculation from './checkout-price-calculation';
import SubmitOrder from './submit-order/submit-order';

const CheckoutCouponCode = dynamic(() => import('./checkout-coupon-code'), { ssr: false });

const CheckoutOrderSummary = () => {
  return (
    <section className='w-full md:w-[35%]'>
      <h2 className='mb-3 border-b border-gray-300 pb-2 text-base font-bold md:mb-4 md:pb-4 md:text-2xl'>
        Order Summary
      </h2>

      <CheckoutCouponCode />

      <CheckoutPriceCalculation />

      <PaymentMethods />

      <SubmitOrder className='my-7 hidden md:flex' />

      <CheckoutHelpingInformation />
    </section>
  );
};

export default CheckoutOrderSummary;
