import loadingLogo from '@/app/_assets/loading-spinner.svg';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

type LoadingSpinnerType = {
  className?: string;
  text?: string;
};

const LoadingSpinner = ({ className, text }: LoadingSpinnerType) => {
  return (
    <div className={twMerge('flex h-full w-full flex-col items-center justify-center', className)}>
      <Image
        src={loadingLogo}
        alt='Loading'
        className='max-h-full w-10 max-w-full animate-spin'
        height={40}
        width={40}
      />
      {text}
    </div>
  );
};

export default LoadingSpinner;
