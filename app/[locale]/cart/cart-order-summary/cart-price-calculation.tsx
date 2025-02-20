'use client';

// import AFTER_PAY from '@/app/_assets/service-logo/afterpay.svg';
// import KLARNA from '@/app/_assets/service-logo/klarna.svg';
import { useCartContext } from '@/app/_store/cart/cart.context';
import Link from 'next/link';

const CartPriceCalculation = () => {
  const { summary } = useCartContext();

  return (
    <div className='grid gap-2 md:gap-3'>
      <div className='flex justify-between'>
        <span>Subtotal:</span>
        {summary?.totalDiscount ? (
          <del className='text-gray-900'>{summary.totalAmount}</del>
        ) : (
          <span>{summary?.totalAmount}</span>
        )}
      </div>
      {summary?.totalDiscount ? (
        <div className='flex justify-between'>
          <span>Discount:</span>
          <span className='text-accent-4 '>- {summary.totalDiscount}</span>
        </div>
      ) : null}
      {summary?.totalDiscount && <div className='text-right'>{summary.netAmountWithoutShipping}</div>}

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

      <hr className='h-[1.5px] bg-gray-300' />

      <div className='flex justify-between'>
        <span className='font-bold'>Estimated Total:</span>
        <span>{summary?.netAmount}</span>
      </div>

      {/* <span className='text-sm text-gray-900 md:text-label'>
        Taxes and delivery fees are calculated on the next page.
      </span>
      <div className='flex flex-wrap items-center gap-1 text-sm text-gray-900 md:text-label'>
        <span>
          4 interest-free installments of <span className='font-bold'>$14.71</span> with
        </span>
        <div className='rounded bg-gray-200 p-1.5'>
          <Image src={AFTER_PAY} alt='after pay' />
        </div>
        or
        <div className='rounded bg-gray-200 p-1.5'>
          <Image src={KLARNA} alt='klarna' />
        </div>
        <Tooltip
          position='left'
          text='We strive to get your order to you as soon as possible. Our estimated delivery times for standard shipping are between 3 to 7 business days within the contiguous United States. For expedited shipping options, please refer to the checkout page for details.'
        >
          <QuestionFill className='fill-gray-500' />
        </Tooltip>
      </div> */}

      {summary?.totalSelectedInStockItem ? (
        <Link
          href='/checkout'
          className='mx-auto my-5 hidden w-full rounded-full bg-secondary-900 px-16 py-3 text-center text-base font-bold transition-all hover:bg-primary-900 hover:text-white md:block'
        >
          Checkout ({summary.totalSelectedInStockItem})
        </Link>
      ) : (
        <button
          disabled
          className='mx-auto my-5 hidden w-full rounded-full bg-gray-300 px-16 py-3 text-center text-base font-bold text-gray-500 transition-all md:block'
        >
          Checkout ({summary?.totalSelectedInStockItem})
        </button>
      )}
    </div>
  );
};

export default CartPriceCalculation;
