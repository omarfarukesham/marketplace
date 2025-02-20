import { ROUTES } from '@/app/_config/routes';
import Link from 'next/link';
import BasicInformation from './basic-information';
import Columns from './columns';
import PaymentOptions from './payments-options';

const FooterDesktop = () => {
  return (
    <footer className='border-t pt-16'>
      <div className='grid grid-cols-4 px-10 pb-14'>
        <BasicInformation />
        <Columns />
      </div>

      <hr className='w-full' />

      <div className='flex flex-wrap items-center justify-between px-12 py-9'>
        {/* <Curriers /> */}
        <PaymentOptions />
      </div>

      <div className='flex flex-wrap items-center justify-between bg-primary-900 px-12 py-10 text-white'>
        <Link href='/'>Copyright 2023 Alipo.com All Right Reserved</Link>
        <div>
          <Link href={ROUTES.termsConditions}>Terms & Conditions</Link> |{' '}
          <Link href={ROUTES.privacyPolicy}>Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default FooterDesktop;
