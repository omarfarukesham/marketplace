import { getViewport } from '@/app/_lib/get-viewport';

import dynamic from 'next/dynamic';

const SidebarDesktop = dynamic(() => import('./sidebar-desktop'), { ssr: false });
const SidebarMobile = dynamic(() => import('./sidebar-mobile'), { ssr: false });

const Sidebar = () => {
  const { isDesktop } = getViewport();

  return isDesktop ? <SidebarDesktop /> : <SidebarMobile />;
};

export default Sidebar;
