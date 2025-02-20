import Tooltip from '@/app/_components/ui/tooltip';
import QuestionFill from '@/icons/question-fill';
import Tick from '@/icons/tick';
import Verified from '@/icons/verified';

const ShoppingSecurity = () => {
  return (
    <div className='mt-4 grid gap-2.5 text-gray-900 md:mt-6'>
      <div className='flex items-center gap-1 text-label font-medium text-accent-4 md:gap-2 md:text-base'>
        <Verified className='h-5 w-5 fill-accent-4 md:h-6 md:w-6' /> Shopping Security
        <Tooltip text='We strive to get your order to you as soon as possible. Our estimated delivery times for standard shipping are between 3 to 7 business days within the contiguous United States. For expedited shipping options, please refer to the checkout page for details.'>
          <QuestionFill className='fill-gray-500 hover:fill-secondary-900' />
        </Tooltip>
      </div>

      <div className='grid w-fit grid-cols-2 gap-8 gap-y-2 md:gap-y-3'>
        <p className='flex items-center text-sm md:text-base'>
          <Tick className='h-4 w-4 fill-accent-4 md:h-6 md:w-6' /> Safe Payment Options
        </p>
        <p className='flex items-center text-sm md:text-base'>
          <Tick className='h-4 w-4 fill-accent-4 md:h-6 md:w-6' /> Secure privacy
        </p>

        <p className='flex items-center text-sm md:text-base'>
          <Tick className='h-4 w-4 fill-accent-4 md:h-6 md:w-6' /> Purchase protection
        </p>
        <p className='flex items-center text-sm md:text-base'>
          <Tick className='h-4 w-4 fill-accent-4 md:h-6 md:w-6' /> Secure logistics
        </p>
      </div>
    </div>
  );
};

export default ShoppingSecurity;
