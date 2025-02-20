'use client';

import { merge } from '@/app/_lib/merge';
import ArrowLeft from '@/icons/arrows/arrow-left';
import Cross from '@/icons/cross';
import { MouseEventHandler, ReactNode } from 'react';
import ReactDOM from 'react-dom';

type DrawerType = {
  title?: string;
  children: ReactNode;
  onClose: () => void;
  className?: string;
  overlayClassName?: string;
  size?: 'lg' | 'md' | 'sm' | { custom?: string };
  onBack?: () => void;
};

const Drawer = ({ onClose, children, title, className, size = 'md', onBack, overlayClassName }: DrawerType) => {
  const handleCloseClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    onClose();
  };

  const sizes = {
    lg: 'max-h-[80%]',
    md: 'max-h-[60%]',
    sm: 'max-h-[40%]',
  };

  const drawerContent = (
    <div
      className={merge(
        'animate-fade-in fixed left-0 top-0 z-50 flex h-full w-full items-end justify-center bg-black/70',
        overlayClassName,
      )}
    >
      <div
        className={merge(
          'animate-slide-up flex w-full flex-col overflow-hidden rounded-t-lg bg-white',
          typeof size === 'object' ? size.custom : sizes[size],
        )}
      >
        <div className='flex items-center justify-between p-2.5'>
          {onBack ? (
            <button onClick={onBack} className='flex items-center gap-1'>
              <ArrowLeft /> <span className='hidden md:inline'>Back</span>
            </button>
          ) : (
            <span></span>
          )}
          {title ? <h2 className='text-base font-medium'>{title}</h2> : <span></span>}
          <button onClick={handleCloseClick}>
            <Cross className='fill-gray-900' />
          </button>
        </div>
        <div className={merge('grow overflow-hidden', className)}>{children}</div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(drawerContent, document.getElementById('modal')!);
};

export default Drawer;
