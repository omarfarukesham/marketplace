import 'server-only';

import { cookies } from 'next/headers';

export const getViewport = () => {
  const viewport = cookies().get('viewport')?.value;

  return {
    viewport,
    isMobile: viewport === 'mobile',
    isDesktop: viewport === 'desktop',
  };
};
