import { merge } from '@/app/_lib/merge';
import ArrowDown from '@/icons/arrows/arrow-down';
import { Dispatch, SetStateAction } from 'react';

type ViewAllButtonType = {
  viewAll: boolean;
  setViewAll: Dispatch<SetStateAction<boolean>>;
};

const ViewAllButton = ({ viewAll, setViewAll }: ViewAllButtonType) => {
  return (
    <div className={merge('absolute bottom-0 flex h-20 w-full items-end justify-center', !viewAll && 'fade-up')}>
      <button
        onClick={() => setViewAll(!viewAll)}
        className='flex items-center gap-2 rounded-full bg-white py-1.5 pl-5 pr-4 shadow'
      >
        View {viewAll ? 'Less' : 'More'}{' '}
        <ArrowDown className={merge('fill-gray-700 transition-transform', viewAll ? 'rotate-180' : '')} />
      </button>
    </div>
  );
};

export default ViewAllButton;
