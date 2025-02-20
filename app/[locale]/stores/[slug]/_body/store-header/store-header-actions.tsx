'use client';

import Button from '@/app/_components/ui/button';
import Chat from '@/icons/chat';
import Info from '@/icons/info';
import toast from 'react-hot-toast';

const StoreHeaderActions = () => {
  return (
    <div className='relative z-1 flex flex-col-reverse gap-2 md:flex-row md:gap-7'>
      <Button
        color='white'
        size='lg'
        rounded
        className='h-fit px-3 py-1 text-label md:px-28 md:py-3'
        onClick={() => toast.success('Coming soon.', { icon: <Info /> })}
      >
        Follow
      </Button>
      <Button className='block text-white' onClick={() => toast.success('Coming soon.', { icon: <Info /> })}>
        <Chat className='mx-auto h-5 w-5 fill-white md:h-auto md:w-auto' />
        <span className='block text-center text-sm font-medium md:text-base md:font-regular'>Message</span>
      </Button>
    </div>
  );
};

export default StoreHeaderActions;
