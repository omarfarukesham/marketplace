import Button from '@/app/_components/ui/button';
import GTM_EVENTS from '@/app/_lib/gtm/events';
import { DataLayerOnLoad } from '@/app/_lib/gtm/send-data';
import { merge } from '@/app/_lib/merge';
import orderService from '@/app/_services/order/order.service';
import { SearchParamsType } from '@/app/_types/utility.type';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import OrderIdCapsule from './order-id-capsule';

const inter = Inter({ subsets: ['latin'], display: 'swap', adjustFontFallback: false });

const OrderSuccess = async ({ searchParams }: { searchParams: SearchParamsType }) => {
  if (!searchParams.order_id) notFound();

  const { data: orders } = await orderService.get({ requestId: searchParams.order_id as string });

  if (!orders?.length) notFound();

  return (
    <main className={merge('mx-3 my-10 md:mx-11', inter.className)}>
      <DataLayerOnLoad
        eventName={GTM_EVENTS.PAYMENT_SUCCESSFUL}
        data={{ transaction_id: orders[0].requestId, paymentMethod: orders[0].paymentMethod }}
      />

      <div className='mx-auto flex w-fit flex-col items-center justify-center gap-7 rounded-lg px-5 py-20 shadow-sm md:px-20'>
        <h1>Thank You For Your Order!</h1>
        <p>We will send you a notification when it ships.</p>

        <div className='grid gap-3'>
          {orders.map((order, index) => (
            <OrderIdCapsule key={order.orderSequenceId} orderSequenceId={order.orderSequenceId} index={index} />
          ))}
        </div>

        <Link href='/'>
          <Button color='secondary' size='lg' rounded>
            Continue Shopping
          </Button>
        </Link>
      </div>
    </main>
  );
};

export default OrderSuccess;
