'use client';

import BN_FLAG from '@/app/_assets/flags/flag_bn.svg';
import { Radio } from '@/app/_components/ui/inputs/radio';
import { MarketCodeType } from '@/app/_config/constants';
import { LocaleType } from '@/app/_config/locales';
import { attachInterceptors } from '@/app/_lib/attach-interceptors';
import useOutsideClick from '@/app/_lib/hooks/use-outside-click';
import ArrowDown from '@/icons/arrows/arrow-down';
import cookies from 'js-cookie';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const LanguageSelector = ({
  locale: currentLocale,
  marketCode,
}: {
  locale: LocaleType;
  marketCode: MarketCodeType;
}) => {
  const [locale, setLocale] = useState(currentLocale);
  // const router = useRouter();
  const pathname = usePathname();

  const [selectionOpen, setSelectionOpen] = useState(false);

  const handleChange = (newLocale: LocaleType) => {
    setLocale(newLocale);

    cookies.set('locale', newLocale);

    const currentLocaleRegex = new RegExp(`^/${locale}`, 'i');
    // router.push(`/${newLocale}/${pathname.replace(currentLocaleRegex, '')}`);
    // router.refresh();

    // Using window.location.pathname to reload the client components, otherwise the language change will not be reflected
    window.location.pathname = `/${newLocale}/${pathname.replace(currentLocaleRegex, '')}`;
  };

  useEffect(() => {
    attachInterceptors({ locale, marketCode });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale]);

  const ref = useOutsideClick(() => setSelectionOpen(false));

  return (
    <div className='relative text-label' ref={ref}>
      <button className='flex items-center gap-1 md:gap-2.5' onClick={() => setSelectionOpen(!selectionOpen)}>
        <Image src={BN_FLAG} alt='Flag Of UK' height={36} width={36} className='h-5 w-5 md:h-9 md:w-9' />
        <span className='flex items-center md:gap-1'>
          {locale.toUpperCase()}
          <ArrowDown className='h-3 w-3' />
        </span>
      </button>

      {selectionOpen && (
        <div className='absolute -right-10 top-[120%] z-10 flex h-64 w-60 flex-col gap-4 rounded-md bg-white p-5 shadow-lg md:left-0'>
          <p>Language</p>

          <Radio
            name='locale'
            id='EN'
            label='English -En'
            className='h-6 w-6'
            checked={locale === 'EN'}
            onChange={(e) => {
              if (e.target.checked) handleChange('EN');
            }}
          />

          <Radio
            name='locale'
            id='BN'
            label='Bangla - Bn'
            className='h-6 w-6 text-xl'
            checked={locale === 'BN'}
            onChange={(e) => {
              if (e.target.checked) handleChange('BN');
            }}
          />

          <hr />

          <div>
            Currency: <span className='font-bold'>Taka: ৳</span>
          </div>

          <hr />

          <div className='flex items-center gap-2'>
            <Image src={BN_FLAG} alt='Flag Of UK' height={36} width={36} />
            <p>
              You are shopping on <span className='font-bold'>Bangladesh</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
