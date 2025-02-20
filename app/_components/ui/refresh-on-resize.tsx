'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

const RefreshOnResize = () => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const refresh = () => {
      router.refresh();
      router.push(pathname);
    };
    window.addEventListener('resize', refresh);
    refresh();

    return () => {
      window.removeEventListener('resize', refresh);
    };
  }, [pathname, router]);

  return null;
};

export default RefreshOnResize;
