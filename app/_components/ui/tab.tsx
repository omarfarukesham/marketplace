'use client';
import { merge } from '@/app/_lib/merge';
import { useState } from 'react';

const Tab = ({
  items,
}: {
  items: {
    title: string;
    content: JSX.Element;
  }[];
}) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className='flex flex-col items-start justify-start lg:flex-row lg:justify-start'>
      {/* {JSON.stringify(items)} */}
      <aside className='ml-2 flex w-60 flex-col items-start justify-start border-l border-gray-400 pr-4'>
        {items.map((item, index) => (
          <button
            onClick={() => setSelectedTab(index)}
            key={item.title}
            className={merge(
              'w-full py-2 pl-4 text-left hover:text-secondary-900 lg:pl-6',
              index === selectedTab && 'border-l-4 border-secondary-900',
            )}
          >
            {item.title}
          </button>
        ))}
      </aside>
      <main className='flex-1 p-3'>
        <div>
          {items.map((item, index) => (
            <div className={`${selectedTab === index ? '' : 'hidden'}`} key={item.title}>
              {item.content}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};
export default Tab;
