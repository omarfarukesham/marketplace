import { merge } from '@/app/_lib/merge';
import ArrowRight from '@/icons/arrows/arrow-right';
import Link from 'next/link';
import { useState } from 'react';

type FooterColumnType = {
  column: {
    name: string;
    items: { label: string; link: string }[];
  };
};

const FooterColumn = ({ column }: FooterColumnType) => {
  const [columnOpen, setColumnOpen] = useState(true);

  return (
    <div className='px-3'>
      <button
        onClick={() => setColumnOpen(!columnOpen)}
        type='button'
        className={merge('w-full py-3', !columnOpen && 'border-b border-gray-400')}
      >
        <h2 className='flex items-center justify-between gap-5 text-base font-bold'>
          <span>{column.name}</span>
          <ArrowRight className={columnOpen ? 'rotate-90' : ''} />
        </h2>
      </button>

      {columnOpen && (
        <div className='grid gap-4 text-label font-regular'>
          {column.items.map((item) => (
            <Link key={item.label} href={item.link}>
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default FooterColumn;
