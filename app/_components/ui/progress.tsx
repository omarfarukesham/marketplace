import { merge } from '@/app/_lib/merge';

const Progress = ({ value, className }: { value: number; className?: string }) => {
  return (
    <div role='progressbar' className={merge('h-2 w-full rounded-full bg-gray-300', className)}>
      <div className='h-full rounded-full bg-primary-900' style={{ width: `${value}%` }} />
    </div>
  );
};

export default Progress;
