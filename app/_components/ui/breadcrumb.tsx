import { merge } from '@/app/_lib/merge';
import ArrowRight from '@/icons/arrows/arrow-right';
import Link from 'next/link';
import { SVGAttributes } from 'react';

type BreadcrumbType = {
  items: { label: string | ((props: SVGAttributes<SVGElement>) => JSX.Element); link?: string }[];
  className?: string;
};

const Breadcrumb = ({ items = [], className }: BreadcrumbType) => {
  const renderBreadcrumbItem = (item: BreadcrumbType['items'][0], index: number) => {
    const isLastItem = index === items.length - 1;
    const label =
      typeof item.label === 'function' ? (
        <item.label className='fill-gray-900 group-hover:fill-primary-500' />
      ) : (
        item.label
      );

    return (
      <li key={index} className='group flex max-w-lg items-center truncate text-sm md:gap-1 md:text-label'>
        <span className='truncate'>
          {item.link ? (
            <Link href={item.link} className='transition-colors group-hover:text-primary-500'>
              {label}
            </Link>
          ) : (
            label
          )}
        </span>
        {!isLastItem && (
          <ArrowRight className='h-3 w-3 fill-gray-800 group-hover:fill-primary-500 md:h-auto md:w-auto' />
        )}
      </li>
    );
  };

  return (
    <nav className={merge('hidden text-gray-900 md:my-6 md:flex', className)} aria-label='Breadcrumb'>
      <ol className='flex items-center gap-1'>{items.map(renderBreadcrumbItem)}</ol>
    </nav>
  );
};

export default Breadcrumb;
