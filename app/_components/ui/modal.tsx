'use client';

import { merge } from '@/app/_lib/merge';
import ArrowLeft from '@/icons/arrows/arrow-left';
import Cross from '@/icons/cross';
import { MouseEventHandler, ReactNode, useEffect } from 'react';
import ReactDOM from 'react-dom';

type ModalType = {
  title?: string;
  children: ReactNode;
  onClose: () => void;
  className?: string;
  overlayClassName?: string;
  size?: 'lg' | 'md' | 'sm' | { custom?: string };
  onBack?: () => void;
  showCross?: boolean;
};

const Modal = ({
  onClose,
  children,
  title,
  className,
  size = 'md',
  onBack,
  overlayClassName,
  showCross = true,
}: ModalType) => {
  const handleCloseClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    onClose();
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const sizes = {
    lg: 'max-h-[90%] w-3/5',
    md: 'max-h-[75%] w-1/2',
    sm: 'max-h-[60%] w-1/3',
  };

  const modalContent = (
    <div
      className={merge(
        'fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black/70',
        overlayClassName,
      )}
    >
      <div
        className={merge(
          'flex flex-col overflow-hidden rounded-lg bg-white',
          typeof size === 'object' ? size.custom : sizes[size],
        )}
      >
        <div className='flex items-center justify-between p-5'>
          {onBack ? (
            <button onClick={onBack} className='flex items-center gap-1'>
              <ArrowLeft /> <span className='hidden md:inline'>Back</span>
            </button>
          ) : (
            <span></span>
          )}

          {title ? <h2>{title}</h2> : <span></span>}
          {showCross ? (
            <button onClick={handleCloseClick}>
              <Cross className='fill-gray-900' />
            </button>
          ) : (
            <div></div>
          )}
        </div>
        <div className={merge('grow overflow-hidden', className)}>{children}</div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalContent, document.getElementById('modal')!);
};

export default Modal;
