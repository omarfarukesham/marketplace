import { RefObject, forwardRef, useEffect, useState } from 'react';

const ProgressBar = forwardRef<HTMLDivElement>((_, ref) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScrollProgress: EventListener = (e) => {
      const element = e.target as HTMLDivElement;

      const scrollWidth = element.scrollWidth;
      const clientWidth = element.clientWidth;
      const toScroll = scrollWidth - clientWidth;

      const totalScrolled = element.scrollLeft;

      const currentProgress = Math.ceil((totalScrolled / toScroll) * 100);

      setProgress(currentProgress);
    };

    const refElement = (ref as RefObject<HTMLDivElement>).current;

    refElement?.addEventListener('scroll', handleScrollProgress);

    return () => refElement?.removeEventListener('scroll', handleScrollProgress);
  }, [ref]);

  return (
    <div className='mx-auto mt-2 h-1 w-40 bg-gray-300 md:hidden'>
      <div className='h-full bg-secondary-900' style={{ width: `${progress}%` }}></div>
    </div>
  );
});

ProgressBar.displayName = 'ProgressBar';

export default ProgressBar;
