import { merge } from '@/app/_lib/merge';
import { MouseEventHandler, ReactNode } from 'react';

type RecommendationTagType = {
  children: ReactNode;
  active?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const RecommendationTag = ({ children, active, onClick }: RecommendationTagType) => {
  return (
    <button
      className={merge(
        'relative whitespace-nowrap rounded-full py-1.5 text-label transition-all md:px-8 md:py-4 md:text-base md:shadow-sm',
        !active && 'hover:bg-secondary-500 hover:md:shadow-none',
        active && 'font-bold md:bg-secondary-900 md:font-regular',
      )}
      onClick={onClick}
    >
      {children}
      {active && (
        <div className='absolute bottom-0 left-1/2 z-10 h-0.5 w-9 -translate-x-1/2 bg-secondary-900 md:hidden'></div>
      )}
    </button>
  );
};

export default RecommendationTag;
