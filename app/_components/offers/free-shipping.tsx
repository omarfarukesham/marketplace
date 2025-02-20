import { merge } from '@/app/_lib/merge';
import Tick from '@/icons/tick';
import Countdown from '../ui/countdown/countdown';

const FreeShipping = ({ countdownTime, className }: { countdownTime: number; className?: string }) => {
  return (
    <div className={merge('flex h-14 w-full items-center justify-between bg-secondary-200 px-4', className)}>
      <span className='flex max-w-[40%] items-center gap-1.5 text-label font-medium'>
        <Tick /> Free shipping on all orders
      </span>
      <span className='flex items-center gap-1 text-label md:gap-2'>
        Left
        <Countdown targetDate={countdownTime} />
      </span>
    </div>
  );
};

export const ShippingDiscountAlert = ({
  message,
  countdownTime,
  className,
}: {
  message: string;
  countdownTime: number;
  className?: string;
}) => {
  return (
    <div className={merge('flex h-14 w-full items-center justify-between bg-secondary-200 px-4', className)}>
      <span className='flex max-w-[40%] items-center gap-1.5 text-label font-medium'>
        <Tick /> {message}
      </span>
      <span className='flex items-center gap-1 text-label md:gap-2'>
        Left
        <Countdown targetDate={countdownTime} />
      </span>
    </div>
  );
};

export default FreeShipping;
