import { merge } from '@/app/_lib/merge';
import { ReactNode } from 'react';

const HorizontalScrollGrid = ({
  grid = 6,
  children,
  className,
}: {
  grid?: 4 | 5 | 6;
  children: ReactNode;
  className?: string;
}) => {
  const grids = {
    4: 'grid-cols-[repeat(1000,minmax(calc(100%/2),1fr))] gap-2.5 md:gap-7 xl:grid-cols-[repeat(1000,minmax(calc(100%/3),1fr))] 2xl:grid-cols-[repeat(1000,minmax(calc(100%/4),1fr))]',
    5: 'grid-cols-[repeat(1000,minmax(calc(100%/2),1fr))] gap-2.5 md:gap-7 lg:grid-cols-[repeat(1000,minmax(calc(100%/3),1fr))] xl:grid-cols-[repeat(1000,minmax(calc(100%/4),1fr))] 2xl:grid-cols-[repeat(1000,minmax(calc(100%/5),1fr))]',
    6: 'grid-cols-[repeat(1000,minmax(calc(100%/2),1fr))] gap-2.5 md:grid-cols-[repeat(1000,minmax(calc(100%/3),1fr))] md:gap-7 lg:grid-cols-[repeat(1000,minmax(calc(100%/4),1fr))] xl:grid-cols-[repeat(1000,minmax(calc(100%/5),1fr))] 2xl:grid-cols-[repeat(1000,minmax(calc(100%/6),1fr))]',
  };

  return (
    <div className={merge('grid grid-flow-col gap-2 md:gap-5 [&>*]:snap-end', grids[grid], className)}>{children}</div>
  );
};

export default HorizontalScrollGrid;
