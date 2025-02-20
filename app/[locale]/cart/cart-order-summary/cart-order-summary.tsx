import Info from '@/icons/info';
import CartHelpingInformation from './cart-helping-information';
import CartPriceCalculation from './cart-price-calculation';

const CartOrderSummary = () => {
  return (
    <section className='w-full md:w-[35%]'>
      <p className='mb-3 mt-6 flex items-center gap-1 text-label text-gray-900 md:hidden'>
        <Info className='shrink-0 fill-gray-900' /> Item availability and pricing are not guaranteed until payment is
        final.
      </p>
      <h2 className='mb-3 border-b border-gray-300 pb-2 text-base font-bold md:mb-4 md:pb-4 md:text-2xl'>
        Order Summary
      </h2>

      <CartPriceCalculation />

      {/* {!isDesktop && (
        <div className='mt-6 overflow-x-hidden md:hidden'>
          <RecommendedProducts id='' />
          <RelatedProducts />
        </div>
      )} */}

      <CartHelpingInformation />
    </section>
  );
};

export default CartOrderSummary;
