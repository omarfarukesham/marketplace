'use client';

import APP_STORE from '@/app/_assets/app_appstore.svg';
import PLAY_STORE from '@/app/_assets/app_playstore.svg';
import Info from '@/icons/info';
import Image from 'next/image';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { FOOTER_COLUMNS } from '../columns-data';

const Columns = () => {
  return (
    <div className='col-span-3 flex justify-around'>
      {FOOTER_COLUMNS.map((column) => (
        <div key={column.name} className='flex h-full flex-col gap-7'>
          <h2 className='text-2xl font-bold text-primary-900'>{column.name}</h2>
          <div className='grid gap-6 text-base font-bold'>
            {column.items.map((item) => (
              <Link key={item.label} href={item.link} className='transition-colors hover:text-secondary-900'>
                {item.label}
              </Link>
            ))}
          </div>
          {column.name === 'My Account' && (
            <div className='mt-auto flex gap-4'>
              <Image
                src={PLAY_STORE}
                alt='play store'
                onClick={() =>
                  toast.success('App coming soon. Stay tuned.', {
                    icon: <Info />,
                  })
                }
              />
              <Image
                src={APP_STORE}
                alt='app store'
                onClick={() =>
                  toast.success('App coming soon. Stay tuned.', {
                    icon: <Info />,
                  })
                }
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Columns;
