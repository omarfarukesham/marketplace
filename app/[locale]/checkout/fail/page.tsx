import Button from '@/app/_components/ui/button';
import GTM_EVENTS from '@/app/_lib/gtm/events';
import { DataLayerOnLoad } from '@/app/_lib/gtm/send-data';
import { merge } from '@/app/_lib/merge';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'], display: 'swap', adjustFontFallback: false });

const OrderFail = async () => {
  return (
    <main className={merge('mx-3 my-10 md:mx-11', inter.className)}>
      <DataLayerOnLoad eventName={GTM_EVENTS.PAYEMNT_FAILED} />
      <div className='mx-auto flex w-fit flex-col items-center justify-center gap-7 rounded-lg px-5 py-20 shadow-sm md:px-20'>
        <h1>Order Failed!</h1>

        <Link href='/'>
          <Button color='secondary' size='lg' rounded>
            Continue Shopping
          </Button>
        </Link>
      </div>
    </main>
  );
};

export default OrderFail;
