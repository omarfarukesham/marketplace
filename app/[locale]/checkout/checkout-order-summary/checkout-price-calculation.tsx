'use client';

import LoadingSpinner from '@/app/_components/ui/loading-spinner';
import { API_SUCCESS } from '@/app/_config/constants';
import { ENDPOINTS } from '@/app/_config/endpoints';
import cartService from '@/app/_services/cart/cart.service';
import { useCartQuery } from '@/app/_services/cart/use-cart';
import Cross from '@/icons/cross';
import { useQueryClient } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import toast from 'react-hot-toast';

const CheckoutPriceCalculation = () => {
  const searchParams = useSearchParams();
  const queryClient = useQueryClient();

  const { data: cart, isLoading } = useCartQuery({
    filters: {
      ...(searchParams.get('productId') && { productId: searchParams.get('productId') as string }),
    },
  });

  const { summary } = cart ?? {};

  const handleRemoveCoupon = async () => {
    const res = await cartService.removeCoupon({});

    if (res.data?.status !== API_SUCCESS && res.error) return toast.error(res.error?.message);

    queryClient.invalidateQueries({ queryKey: [ENDPOINTS.cart] });
    toast.success('Coupon removed Successfully');
  };

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className='mt-7 grid gap-2 text-label md:gap-3 md:text-base'>
      <div className='flex justify-between'>
        <span>Subtotal:</span>
        {summary?.totalDiscount ? (
          <del className='text-gray-900'>{summary?.totalAmount}</del>
        ) : (
          <span>{summary?.totalAmount}</span>
        )}
      </div>
      {summary?.totalDiscount ? (
        <div className='flex justify-between'>
          <span>Discount:</span>
          <span className='text-accent-4 '>- {summary?.totalDiscount}</span>
        </div>
      ) : null}
      {summary?.totalDiscount && <div className='text-right'>{summary?.netAmountWithoutShipping}</div>}
      <hr />

      <div className='flex justify-between'>
        <span>Shipping:</span>
        {summary?.shippingFeeDiscount ? (
          <del className='text-gray-900'>{summary.shippingFee}</del>
        ) : (
          <span>{summary?.shippingFee}</span>
        )}
      </div>
      {summary?.shippingFeeDiscount && (
        <div className='flex justify-between'>
          <span>Shipping Discount:</span>
          <span className='text-accent-4'>-{summary.shippingFeeDiscount}</span>
        </div>
      )}
      {summary?.shippingFeeDiscount && <div className='text-right'>{summary.netShippingFee}</div>}

      {cart?.couponId && <hr />}

      {cart?.couponId && (
        <div className='flex justify-between'>
          <span>Coupon Discount:</span>
          <div>
            <span className='text-accent-4'>-{summary?.couponDiscount}</span>
            <div className='flex items-center gap-1 rounded bg-secondary-200 py-2 pl-3 pr-2 text-center'>
              {summary?.couponCode}
              <button className='rounded hover:bg-danger' onClick={handleRemoveCoupon} title='Remove Coupon'>
                <Cross className='h-4 w-4 hover:fill-white' />
              </button>
            </div>
          </div>
        </div>
      )}

      <div className='text-label text-gray-900'>
        <span>Delivery: 3 - 5 days</span>
        {/* <div className='mt-2 flex -translate-y-1 flex-wrap items-center md:mt-3'>
          <Info className='mr-1 shrink-0 fill-gray-900' /> Free shipping is a time-limited offer.
          <div className='ml-5 flex items-center md:ml-1'>
            Today time left
            <Countdown
              targetDate={1796169222013}
              className='!gap-0 text-accent-4'
              itemClassName='font-regular !text-label !p-0'
            />
          </div>
        </div> */}
      </div>

      <hr className='h-[1.5px] bg-gray-300' />

      <div className='flex justify-between text-base font-bold md:text-lg'>
        <span>
          Total{' '}
          <span className='font-regular'>
            ({summary?.totalSelectedInStockItem ?? 0} item{(summary?.totalSelectedInStockItem ?? 0) > 1 && 's'})
          </span>
        </span>
        <span>{summary?.netAmount}</span>
      </div>
    </div>
  );
};

export default CheckoutPriceCalculation;
