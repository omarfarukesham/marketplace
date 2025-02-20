import { merge } from '@/app/_lib/merge';

type CountAtomType = {
  value: number;
  type?: 'Day' | 'Hrs' | 'Min' | 'Sec';
  isDanger?: boolean;
  suffix?: string;
  className?: string;
};

const CountAtom = ({ value, type, isDanger, suffix, className }: CountAtomType) => {
  return (
    <>
      <div
        className={merge(
          'flex flex-col items-center justify-center rounded-md bg-white p-1 md:rounded-lg md:p-2',
          'h-7 w-7 md:h-10 md:w-10',
          isDanger && 'text-danger',
          className,
        )}
      >
        <p suppressHydrationWarning className='text-sm font-bold md:text-base'>
          {value}
        </p>
        {type && <span className='text-[8px] font-regular'>{type}</span>}
      </div>
      {suffix && <span>{suffix}</span>}
    </>
  );
};

export default CountAtom;
