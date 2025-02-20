'use client';

import { ROUTES } from '@/app/_config/routes';
import { merge } from '@/app/_lib/merge';
import { StoreType } from '@/app/_types/store.type';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import StoreCategories from './store-categories';
import StoreSearchDesktop from './store-search-desktop';
import StoreSearchMobile from './store-search-mobile';

function StoreNavigation({ store, isDesktop }: { store: StoreType; isDesktop: boolean }) {
  const STORE_ROUTES = [
    {
      id: 1,
      path: ROUTES.store(store.slug),
      name: 'Home',
    },
    {
      id: 2,
      path: ROUTES.storeProfile(store.slug),
      name: 'Profile',
    },
    {
      id: 4,
      path: ROUTES.storeReviews(store.slug),
      name: 'Reviews',
    },
  ];

  const pathname = usePathname();

  return (
    <div className='flex items-center justify-between'>
      <div className='ml-2.5 flex gap-5 py-3 text-label md:ml-10 md:gap-14 md:py-7 md:text-lg'>
        {STORE_ROUTES.map((route) => (
          <Link
            key={route.id}
            href={route.path}
            className={merge(pathname === route.path && 'border-b-2 border-secondary-900')}
          >
            {route.name}
          </Link>
        ))}

        <StoreCategories sellerId={store.id} storeSlug={store.slug} />
      </div>
      {isDesktop ? <StoreSearchDesktop slug={store.slug} /> : <StoreSearchMobile slug={store.slug} />}
    </div>
  );
}

export default StoreNavigation;
