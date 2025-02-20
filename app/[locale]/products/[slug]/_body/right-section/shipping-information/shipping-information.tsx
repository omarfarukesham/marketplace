'use client';

import Tooltip from '@/app/_components/ui/tooltip';
import { ProductType } from '@/app/_types/product.type';
import QuestionFill from '@/icons/question-fill';

const ShippingInformation = ({ product }: { product: ProductType }) => {
  return (
    <div className='mt-4 grid gap-1 text-gray-900 md:mt-6 md:gap-2.5'>
      {/* <p className='flex items-center gap-1 text-label font-medium text-gray-900 md:gap-4 md:text-base md:text-accent-4'>
        <Shipping className='h-5 w-5 fill-accent-4 md:h-6 md:w-6' /> Free shipping on all orders
      </p> */}

      <div className='flex items-center gap-2 text-sm md:text-label'>
        <span className='font-medium'>Delivery:</span>
        <span>{product.shipping?.carrierName} | </span>
        {/* <span>Oct 28-Nov 3, 71.7% are ≤ 10 days</span> */}
        <span>In 2-3 days</span>
        <Tooltip text='We strive to get your order to you as soon as possible. Our estimated delivery times for standard shipping are between 3 to 7 business days within the contiguous United States. For expedited shipping options, please refer to the checkout page for details.'>
          <QuestionFill className='fill-gray-500 hover:fill-secondary-900' />
        </Tooltip>
      </div>

      {/* <div className='flex items-center gap-2 text-sm md:text-label'>
        Get a $5.00 credit for late delivery
        <Tooltip text='We strive to get your order to you as soon as possible. Our estimated delivery times for standard shipping are between 3 to 7 business days within the contiguous United States. For expedited shipping options, please refer to the checkout page for details.'>
          <QuestionFill className='fill-gray-500 hover:fill-secondary-900' />
        </Tooltip>
      </div> */}

      {/* <div className='flex gap-3 md:items-center'>
        <span className='whitespace-nowrap text-sm font-medium md:text-label'>Courier company:</span>
        <div className='flex flex-wrap gap-3'>
          {CURRIERS_DATA.map((currier) => (
            <div key={currier.label} className='flex items-center gap-1.5'>
              <div className='flex h-6 w-9 items-center justify-center rounded-sm px-1 shadow'>
                <Image src={currier.logo} alt={currier.label} className='max-h-[70%]' />
              </div>
              <span className='text-xs'>{currier.label}</span>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default ShippingInformation;
