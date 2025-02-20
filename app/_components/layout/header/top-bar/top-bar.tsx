'use client';

import { ROUTES } from '@/app/_config/routes';
import Info from '@/icons/info';
import Mobile from '@/icons/mobile';
import QuestionCircle from '@/icons/question-circle';

import Link from 'next/link';
import toast from 'react-hot-toast';

const TopBar = () => {
  return (
    <div className='hidden h-10 w-full items-start justify-between bg-primary-900 md:flex'>
      <BecomeASellerButton />

      <div className='flex h-full items-center justify-end gap-5'>
        <HelpButton />
        <GetTheAppButton />
      </div>
    </div>
  );
};

const BecomeASellerButton = () => {
  return (
    <Link href={ROUTES.becomeASeller} className='ml-10 flex h-7 items-center bg-secondary-900 px-3'>
      Become a Seller
    </Link>
  );
};

const HelpButton = () => {
  return (
    <Link
      href={ROUTES.helpCenter}
      className='group flex h-full items-center gap-1 px-3 text-white transition-colors hover:text-secondary-900'
    >
      <QuestionCircle className='fill-white transition-colors group-hover:fill-secondary-900' /> Help
    </Link>
  );
};

const GetTheAppButton = () => {
  return (
    <Link
      href='#'
      onClick={() =>
        toast.success('App coming soon. Stay tuned.', {
          icon: <Info />,
        })
      }
      className='flex h-full items-center gap-1 bg-secondary-900 p-3'
    >
      <Mobile /> Get the App
    </Link>
  );
};

export default TopBar;
