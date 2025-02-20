import LOGO_MONOTONE from '@/app/_assets/logo-monotone.svg';
import LOGO from '@/app/_assets/logo.svg';
import { merge } from '@/app/_lib/merge';
import Image from 'next/image';
import Link from 'next/link';
import { ComponentPropsWithoutRef } from 'react';

type LogoType = {
  variant?: 'default' | 'monotone';
} & ComponentPropsWithoutRef<'a'>;

const Logo = ({ className, variant = 'default', ...props }: LogoType) => {
  const images = {
    default: LOGO,
    monotone: LOGO_MONOTONE,
  };

  return (
    <Link href='/' {...props}>
      <Image
        src={images[variant]}
        alt='Alipo Logo'
        height={55}
        width={200}
        loading='eager'
        className={merge('h-6 w-24 object-contain md:h-[55px] md:w-[200px]', className)}
      />
    </Link>
  );
};

export default Logo;
