import Link from 'next/link';
import { ReactNode } from 'react';

const CategoryBarItemWrapper = ({ link, children }: { link: string; children: ReactNode }) => {
  return (
    <li className='shrink-0'>
      <Link
        href={link}
        className='relative flex items-center gap-1 rounded-lg px-2 text-label hover:bg-secondary-300 md:px-3 md:py-2'
      >
        {children}
      </Link>
    </li>
  );
};

export default CategoryBarItemWrapper;
