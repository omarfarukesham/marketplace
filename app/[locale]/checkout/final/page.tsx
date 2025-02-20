import Button from '@/app/_components/ui/button';
import { API_SUCCESS } from '@/app/_config/constants';
import { merge } from '@/app/_lib/merge';
import orderService from '@/app/_services/order/order.service';
import { SearchParamsType } from '@/app/_types/utility.type';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import OrderIdCapsule from './order-id-capsule';

const inter = Inter({ subsets: ['latin'], display: 'swap', adjustFontFallback: false });

const CheckoutFinal = async ({ searchParams }: { searchParams: SearchParamsType }) => {
  if (!searchParams.order_id) redirect('/');

  const { data: orderResponse } = await orderService.orderFinal(searchParams.order_id as string);

  // if (error?.code === 404) redirect('/');

  if (orderResponse?.status !== API_SUCCESS) {
    return (
      <main className={merge('mx-3 my-10 md:mx-11', inter.className)}>
        <div className='mx-auto flex w-fit flex-col items-center justify-center gap-7 rounded-lg px-5 py-20 shadow-sm md:px-20'>
          <h1>Order Failed!</h1>

          <Link href='/cart'>
            <Button color='secondary' size='lg' rounded>
              Go To Cart
            </Button>
          </Link>
        </div>
      </main>
    );
  }

  const confirmationData = orderResponse?.data?.content[0];

  return (
    <main className={merge('mx-3 my-10 md:mx-11', inter.className)}>
      <div className='mx-auto flex w-fit flex-col items-center justify-center gap-7 rounded-lg px-5 py-20 shadow-sm md:px-20'>
        <h1>Thank You For Your Order!</h1>
        <p>We will send you a notification when it ships.</p>

        <div className='grid gap-3'>
          {confirmationData?.orderIds?.map((orderId: string, index: number) => (
            <OrderIdCapsule key={orderId} orderSequenceId={orderId} index={index} />
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

export default CheckoutFinal;
