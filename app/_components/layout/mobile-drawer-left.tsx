import { merge } from '@/app/_lib/merge';
import Cross from '@/icons/cross';
import { forwardRef } from 'react';

type MobileDrawerLeftType = {
  drawerOpen: boolean;
  closeDrawer: () => void;
  children?: React.ReactNode;
};

const MobileDrawerLeft = forwardRef<HTMLDivElement, MobileDrawerLeftType>(function MobileDrawerLeft(
  { drawerOpen, closeDrawer, children },
  ref,
) {
  return (
    <div
      className={merge(
        'absolute -left-3 top-0 z-1 h-full w-[120%] bg-black/80 transition-opacity duration-200',
        drawerOpen ? 'translate-x-0 opacity-100' : '-translate-x-[105%] opacity-0',
      )}
    >
      <div
        className={merge(
          'relative flex min-h-screen w-4/5 flex-col gap-7 bg-white p-5 transition-transform duration-500',
          drawerOpen ? 'translate-x-0' : '-translate-x-[105%]',
        )}
        ref={ref}
      >
        <button
          className='absolute right-2 top-2 rounded-full border border-white hover:border-black'
          onClick={closeDrawer}
        >
          <Cross className='h-6 w-6' />
        </button>
        {children}
      </div>
    </div>
  );
});

export default MobileDrawerLeft;
