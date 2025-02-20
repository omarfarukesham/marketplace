import { getViewport } from '@/app/_lib/get-viewport';
import storeService from '@/app/_services/store/store.service';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';
import StoreHeader from './_body/store-header/store-header';
import StoreNavigation from './_body/store-navigation/store-navigation';

async function StoreLayout({ params: { slug }, children }: { params: { slug: string }; children: ReactNode }) {
  const { data: store } = await storeService.get({ slug });

  if (!store) return notFound();

  const { isDesktop } = getViewport();

  return (
    <div>
      <StoreHeader store={store} />
      <StoreNavigation store={store} isDesktop={isDesktop} />
      {children}
    </div>
  );
}

export default StoreLayout;
