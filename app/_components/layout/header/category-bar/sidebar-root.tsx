'use client';

import useOutsideClick from '@/app/_lib/hooks/use-outside-click';
import Cross from '@/icons/cross';
import Hamburger from '@/icons/hamburger';
import { ReactNode } from 'react';
import { useSidebar } from '../../sidebar/sidebar.context';

const SidebarRoot = ({ children }: { children: ReactNode }) => {
  const { toggleSidebar, closeSidebar, isSidebarOpen } = useSidebar();

  const sidebarRef = useOutsideClick(closeSidebar);

  return (
    <div ref={sidebarRef}>
      <button className='flex items-center gap-5' onClick={toggleSidebar}>
        {isSidebarOpen ? (
          <Cross className='animate-fade-in pointer-events-none h-5 w-5 transition-transform duration-500 hover:rotate-180' />
        ) : (
          <Hamburger className='animate-fade-in pointer-events-none -translate-x-1 fill-dark-2 duration-500' />
        )}
        <span className='hidden md:inline'>All Categories</span>
      </button>

      {children}
    </div>
  );
};

export default SidebarRoot;
