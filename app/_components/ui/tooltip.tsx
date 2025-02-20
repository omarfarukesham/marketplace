'use client';

import { merge } from '@/app/_lib/merge';
import { ReactNode, useState } from 'react';

type TooltipType = {
  text: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  children?: ReactNode;
  className?: string;
  containerClassName?: string;
};
const Tooltip = ({ text, position = 'top', children, className, containerClassName }: TooltipType) => {
  const [show, setShow] = useState(false);

  const handleMouseEnter = () => {
    setShow(true);
  };

  const handleMouseLeave = () => {
    setShow(false);
  };

  const positionClasses = {
    top: 'bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2',
    bottom: 'top-full left-1/2 transform -translate-x-1/2 translate-y-2',
    left: 'top-1/2 -left-3 transform -translate-x-full -translate-y-1/2',
    right: 'top-1/2 left-full transform translate-x-2 -translate-y-1/2',
  };

  return (
    <div
      className={merge('relative inline-block', containerClassName)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {show && (
        <div
          className={merge(
            'absolute z-10 min-w-[20rem] rounded bg-white p-4 text-label font-regular text-black shadow',
            'animate-fade-in',
            positionClasses[position],
            className,
          )}
        >
          <span>{text}</span>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
