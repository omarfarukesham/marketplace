import ArrowDown from '@/icons/arrows/arrow-down';
import ArrowRight from '@/icons/arrows/arrow-right';
import { useState } from 'react';

const Accordion = ({ title, answer }: { title: string; answer: string }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className='py-2'>
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className='flex w-full justify-between border-b border-gray-600 pb-6'
      >
        <span className='font-bold'>{title}</span>
        {accordionOpen ? (
          <span>
            <ArrowDown className='h-6 w-6' />
          </span>
        ) : (
          <span>
            <ArrowRight className='h-6 w-6' />
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

export default Accordion;
