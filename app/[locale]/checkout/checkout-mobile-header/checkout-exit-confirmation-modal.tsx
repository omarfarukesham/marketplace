import Countdown from '@/app/_components/ui/countdown/countdown';
import Modal from '@/app/_components/ui/modal';
import Shipping from '@/icons/shipping';
import Link from 'next/link';

const CheckoutExitConfirmationModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <Modal size={{ custom: 'w-[95%]' }} onClose={onClose} className='grid gap-8 px-6 pb-10'>
      <p className='font-medium'>
        You haven’t finished checking out yet. Don’t miss out on <span className='text-accent-4'>free shipping</span> &
        a <span className='text-accent-4'>$60.35 discount</span>!
      </p>

      <div className='flex gap-5'>
        <div className='flex flex-col items-center gap-2'>
          <div className='w-fit rounded-full bg-secondary-100 p-2.5'>
            <Shipping className='fill-accent-4' />
          </div>
          <span className='text-sm font-bold text-gray-900'>Free Shipping</span>
          <div className='mt-auto flex items-center gap-1 text-sm'>
            Time Left
            <Countdown
              targetDate={1706169222013}
              className='!gap-0 text-accent-4'
              itemClassName='font-regular !text-label !p-0 w-auto h-auto'
            />
          </div>
        </div>

        <div className='flex flex-col items-center gap-2'>
          <div className='w-fit rounded-full bg-secondary-100 p-2.5'>
            <Shipping className='fill-accent-4' />
          </div>
          <span className='text-sm font-bold text-gray-900'>Save $60.35</span>
          <div className='mt-auto flex items-center text-sm'>Limited Time Only</div>
        </div>
      </div>

      <div className='grid gap-4'>
        <button
          onClick={onClose}
          className='h-full w-full rounded-full bg-secondary-900 py-3 text-base font-bold transition-all hover:bg-primary-900 hover:text-white'
        >
          Keep Checking Out
        </button>

        <Link
          className='h-full w-full rounded-full border border-black py-3 text-center text-base font-bold transition-all hover:border-none hover:bg-secondary-900 hover:text-white'
          href='/cart'
        >
          Return To Cart
        </Link>
      </div>
    </Modal>
  );
};

export default CheckoutExitConfirmationModal;
