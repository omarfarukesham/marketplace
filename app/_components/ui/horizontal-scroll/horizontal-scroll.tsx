'use client';

import useHorizontalScroll from '@/app/_lib/hooks/useHorizontalScroll';
import { merge } from '@/app/_lib/merge';
import { ReactNode } from 'react';
import ArrowButton from './arrow-button';
import ProgressBar from './progress-bar';

type SliderType = {
  children: ReactNode;
  step?: number;
  speed?: number;
  distance?: number;
  arrow?: boolean;
  progressBar?: boolean;
  className?: string;
  containerClassName?: string;
  grid?: 4 | 5 | 6;
  flex?: boolean;
};

const HorizontalScroll = ({
  children,
  distance = 500,
  arrow = true,
  progressBar = true,
  className,
  containerClassName, // grid,
  // flex = true,
}: SliderType) => {
  const {
    containerRef,
    handleHorizontalScroll,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    arrowLeftDisabled,
    arrowRightDisabled,
    isDragging,
  } = useHorizontalScroll();

  return (
    <div className={merge('relative -mx-10 overflow-x-hidden px-10', containerClassName)}>
      {arrow && !arrowLeftDisabled && (
        <ArrowButton
          handleHorizontalScroll={handleHorizontalScroll}
          ref={containerRef}
          direction='left'
          distance={distance}
        />
      )}

      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        className={merge(
          'no-scrollbar relative w-full snap-x snap-mandatory scroll-px-2 overflow-x-auto md:scroll-px-5',
          className,
        )}
        role='listbox'
        tabIndex={0}
      >
        {isDragging && <div className='absolute left-0 top-0 z-1 h-full w-full bg-transparent'></div>}
        {children}
      </div>
      {arrow && !arrowRightDisabled && (
        <ArrowButton
          handleHorizontalScroll={handleHorizontalScroll}
          ref={containerRef}
          direction='right'
          distance={distance}
        />
      )}

      {progressBar && <ProgressBar ref={containerRef} />}
    </div>
  );
};

export default HorizontalScroll;
