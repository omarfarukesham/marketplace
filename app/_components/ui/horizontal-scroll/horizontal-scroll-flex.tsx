import { merge } from '@/app/_lib/merge';
import { ReactNode } from 'react';

const HorizontalScrollFlex = ({ children, className }: { children: ReactNode; className?: string }) => {
  return <div className={merge('flex gap-3 [&>*]:snap-end', className)}>{children}</div>;
};

export default HorizontalScrollFlex;
