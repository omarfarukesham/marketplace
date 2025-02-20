import Minus from '@/icons/product/minus';
import Plus from '@/icons/product/plus';
import { useState } from 'react';

const AccordionV2 = ({ title, answer, serial }: { title: string; answer: string; serial: number | string }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className='pb-7'>
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className='flex w-full justify-between border-b border-gray-600 pb-7'
      >
        <p className='flex items-center gap-5'>
          <span className='text-xl text-gray-700 lg:text-2xl'>{serial}</span>
          <span className='text-left font-bold lg:text-xl xl:text-2xl'>{title}</span>
        </p>
        {accordionOpen ? (
          <span>
            <Minus className='animate-fade-in h-6 w-6' />
          </span>
        ) : (
          <span>
            <Plus className='animate-fade-in h-6 w-6' />
          </span>
        )}
      </button>
      <div
        className={`grid overflow-hidden text-black transition-all duration-300 ease-in-out ${
          accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className='overflow-hidden pt-2'>{answer}</div>
      </div>
    </div>
  );
};

export default AccordionV2;
