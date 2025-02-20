import { merge } from '@/app/_lib/merge';
import ArrowRight from '@/icons/arrows/arrow-right';

type ScrollNavigationType = {
  handleClick: () => void;
  direction: 'left' | 'right';
};
const ScrollNavigation = ({ handleClick, direction }: ScrollNavigationType) => {
  const positions = { left: 'top-0 left-7 fade-left', right: 'top-0 right-7 fade-right' };
  const arrows = { left: 'rotate-180', right: '' };

  return (
    <div className={merge('pointer-events-none absolute z-1 flex h-full items-center', positions[direction])}>
      <button
        className={merge(
          'pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-xl md:h-[3.125rem] md:w-[3.125rem]',
        )}
        onClick={handleClick}
      >
        <ArrowRight className={arrows[direction]} />
      </button>
    </div>
  );
};

export default ScrollNavigation;
