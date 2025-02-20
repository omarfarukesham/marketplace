import BKASH from '@/app/_assets/service-logo/bkash.svg';
import MASTERCARD from '@/app/_assets/service-logo/mastercard.svg';
import NAGAD from '@/app/_assets/service-logo/nagad.svg';
import ROCKET from '@/app/_assets/service-logo/rocket.svg';
import VISA from '@/app/_assets/service-logo/visa.svg';
import Image, { ImageProps } from 'next/image';

const PaymentOptions = () => {
  return (
    <div className='grid gap-3'>
      <h3 className='text-base font-bold'>Payment methods:</h3>
      <div className='flex flex-wrap gap-3'>
        <PaymentItem src={BKASH} alt='bkash' />
        <PaymentItem src={ROCKET} alt='ROCKET' />
        <PaymentItem src={NAGAD} alt='NAGAD' />
        <PaymentItem src={VISA} alt='VISA' />
        <PaymentItem src={MASTERCARD} alt='MASTERCARD' />
      </div>
    </div>
  );
};

const PaymentItem = (props: ImageProps) => {
  return (
    <div className='flex h-9 w-14 items-center justify-center rounded-lg p-3 shadow md:h-12 md:w-20'>
      <Image src={props.src} alt={props.alt} />
    </div>
  );
};

export default PaymentOptions;
