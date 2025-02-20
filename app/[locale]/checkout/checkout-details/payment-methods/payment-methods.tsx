'use client';

import { PAYMENT_METHODS } from '@/app/_config/constants';
import { useCheckout } from '@/app/_store/checkout/checkout.context';
import PaymentMethodItem2 from './payment-method-item2';

const PaymentMethods = () => {
  const { error } = useCheckout();

  return (
    <div className='mt-10 grid gap-5'>
      <div
        className={error?.type === 'PAYMENT' ? 'animate-blink rounded-lg border border-secondary-900 px-5 py-5' : ''}
      >
        <h2 className='mb-3 border-b text-base font-bold md:mb-6 md:pb-3'>Select A Payment Method</h2>
        <div className='flex flex-wrap gap-5 md:gap-8'>
          {PAYMENT_METHODS.map((method, index) => (
            <PaymentMethodItem2 key={method.id} method={method} index={index} />
          ))}
        </div>
      </div>

      {/* <div className='flex flex-wrap gap-3'>
        <PaymentItem src={BKASH} alt='bkash' />
        <PaymentItem src={ROCKET} alt='ROCKET' />
        <PaymentItem src={NAGAD} alt='NAGAD' />
        <PaymentItem src={VISA} alt='VISA' />
        <PaymentItem src={MASTERCARD} alt='MASTERCARD' />
      </div> */}
    </div>
  );
};

// const PaymentItem = (props: ImageProps) => {
//   return (
//     <div className='flex h-7 w-12 items-center justify-center rounded-lg p-3 shadow'>
//       <Image src={props.src} alt={props.alt} />
//     </div>
//   );
// };

export default PaymentMethods;
