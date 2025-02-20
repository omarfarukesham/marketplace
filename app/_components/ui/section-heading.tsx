import { merge } from '@/app/_lib/merge';
import ArrowRight from '@/icons/arrows/arrow-right';
import Link from 'next/link';
import { ReactNode } from 'react';

type SectionHeadingType = {
  title: ReactNode;
  linkText?: string;
  link?: string;
  className?: string;
};

const SectionHeading = ({ title, linkText, link, className }: SectionHeadingType) => {
  return (
    <div className={merge('relative mb-2 md:mb-9', className)}>
      <h1 className='flex justify-center text-center text-base font-bold uppercase md:text-2xl md:font-extrabold'>
        {title}
      </h1>
      {linkText && (
        <Link
          href={link || '/'}
          className='group absolute right-0 top-1/2 flex -translate-y-1/2 items-center text-sm font-bold text-gray-900 hover:text-secondary-900 md:text-lg'
        >
          <span className='hidden md:inline'>{linkText}</span>
          <span className='md:hidden'>All</span>

          <ArrowRight className='h-4 w-4 fill-gray-900 group-hover:fill-secondary-900 md:h-auto md:w-auto' />
        </Link>
      )}
    </div>
  );
};

export default SectionHeading;
