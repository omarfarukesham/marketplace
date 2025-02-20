'use client';

import APP_STORE from '@/app/_assets/app_appstore.svg';
import PLAY_STORE from '@/app/_assets/app_playstore.svg';
import { ALIPO_FACEBOOK, ALIPO_INSTA, ALIPO_LINKEDIN, ALIPO_YOUTUBE } from '@/app/_config/constants';
import Info from '@/icons/info';
import Facebook from '@/icons/social/facebook';
import Instagram from '@/icons/social/instagram';
import LinkedIn from '@/icons/social/linkedin';
import Youtube from '@/icons/social/youtube';
import Image from 'next/image';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { FOOTER_COLUMNS } from '../columns-data';
import PaymentOptions from '../desktop/payments-options';
import FooterColumn from './footer-column';

const FooterMobile = () => {
  return (
    <footer className='grid gap-6 pt-3'>
      {FOOTER_COLUMNS.map((column) => (
        <FooterColumn key={column.name} column={column} />
      ))}

      <hr className='border border-gray-400' />

      <div className='grid gap-5 px-3'>
        <div>
          <h3 className='mb-2.5 text-base font-bold'>Follow us on:</h3>

          <div className='flex items-center gap-8'>
            <Link href={ALIPO_FACEBOOK} target='_blank'>
              <Facebook className='h-7 w-7 transition-colors hover:fill-secondary-900' />
            </Link>
            <Link href={ALIPO_INSTA} target='_blank'>
              <Instagram className='h-7 w-7 transition-colors hover:fill-secondary-900' />
            </Link>
            <Link href={ALIPO_LINKEDIN} target='_blank'>
              <LinkedIn className='h-7 w-7 transition-colors hover:fill-secondary-900' />
            </Link>
            <Link href={ALIPO_YOUTUBE} target='_blank'>
              <Youtube className='h-7 w-7 transition-colors hover:fill-secondary-900' />
            </Link>
          </div>
        </div>

        <div>
          <h3 className='mb-2.5 text-base font-bold'>Get the App:</h3>

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
        </div>
      </div>

      <hr className='border border-gray-400' />

      <div className='grid gap-5 px-3'>
        <PaymentOptions />
      </div>

      <div className='grid w-full gap-5 bg-primary-900 px-2.5 py-5 text-label text-white'>
        <p>
          Copyright © 2023 Alipo.com <br /> All Rights Reserved
        </p>
        <p>Terms & Conditions | Privacy Policy</p>
      </div>
    </footer>
  );
};

export default FooterMobile;
