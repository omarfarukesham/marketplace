import ArrowRight from '@/icons/arrows/arrow-right';
import Lock from '@/icons/lock';
import Shipping from '@/icons/shipping';
import Tick from '@/icons/tick';
import Verified from '@/icons/verified';
import Image from 'next/image';

const CheckoutHelpingInformation = () => {
  return (
    <div className='mt-4 grid gap-4 text-sm text-gray-900 md:mb-14 md:mt-0 md:gap-6 md:text-label'>
      <div>
        <p className='flex items-center gap-1 text-label font-medium md:text-base'>
          <Verified className='fill-accent-4' /> Alipo protects your card information
        </p>
        <div className='mb-2 mt-1.5 grid gap-y-2.5 md:mb-3 md:mt-2.5'>
          <div className='flex items-center gap-0.5'>
            <Tick className='fill-accent-4' /> Card information is secure and uncompromised
          </div>
          <div className='flex items-center gap-0.5'>
            <Tick className='shrink-0 fill-accent-4' /> Alipo follows the Payment Card Industry Data Security Standard
            (PCI DSS) when handling card data
          </div>
          <div className='flex items-center gap-0.5'>
            <Tick className='fill-accent-4' /> All data is encrypted
          </div>
          <div className='flex items-center gap-0.5'>
            <Tick className='fill-accent-4' /> Alipo never sells your card information
          </div>
        </div>
        <Image
          src='https://i.ibb.co/ynM5Q8t/8ea3b754359bb27c1298f089145d01ab.png'
          alt='card verification'
          width={341}
          height={84}
        />
      </div>

      <div>
        <p className='flex items-center gap-1 text-label font-medium md:text-base'>
          <Lock className='fill-accent-4' /> Secure privacy
        </p>
        <p className='mb-2 mt-1.5 md:mb-3 md:mt-2.5'>
          Protecting your privacy is important to us! Please be assured that your information will be kept secured and
          uncompromised. We do not sell your personal information for money and will only use your information in
          accordance with our privacy and cookie policy to provide and improve our services to you.
        </p>
        <button className='group flex items-center gap-0 text-sm font-medium hover:font-bold hover:text-secondary-900 md:gap-1 md:text-label md:font-regular'>
          Learn More <ArrowRight className='h-4 w-4 translate-y-[1px] fill-gray-800 group-hover:fill-secondary-900' />
        </button>
      </div>

      <div>
        <p className='flex items-center gap-1 text-label font-medium md:text-base'>
          <Lock className='fill-accent-4' /> Alipo Purchase Protection
        </p>
        <p className='mb-2 mt-1.5 md:mb-3 md:mt-2.5'>
          Shop confidently on Alipo knowing that if something goes wrong, we&apos;ve always got your back.
        </p>
        <button className='group flex items-center gap-0 text-sm font-medium hover:font-bold hover:text-secondary-900 md:gap-1 md:text-label md:font-regular'>
          Learn More <ArrowRight className='h-4 w-4 translate-y-[1px] fill-gray-800 group-hover:fill-secondary-900' />
        </button>
      </div>

      <div>
        <p className='flex items-center gap-1 text-label font-medium md:text-base'>
          <Shipping className='fill-accent-4' /> Delivery guarantee
        </p>
        <div className='mb-2 mt-1.5 grid grid-cols-2 gap-y-2.5 md:mb-3 md:mt-2.5'>
          <div className='flex items-center gap-0.5'>
            <Tick className='fill-accent-4' /> 5.00 Credit for delay
          </div>
          <div className='flex items-center gap-0.5'>
            <Tick className='fill-accent-4' /> Refund if item damaged
          </div>
          <div className='flex items-center gap-0.5'>
            <Tick className='fill-accent-4' /> Refund if package lost
          </div>
          <div className='flex items-center gap-0.5'>
            <Tick className='fill-accent-4' /> 30-Day undelivered refund
          </div>
        </div>
        <button className='group flex items-center gap-0 text-sm font-medium hover:font-bold hover:text-secondary-900 md:gap-1 md:text-label md:font-regular'>
          Learn More <ArrowRight className='h-4 w-4 translate-y-[1px] fill-gray-800 group-hover:fill-secondary-900' />
        </button>
      </div>
    </div>
  );
};

export default CheckoutHelpingInformation;
