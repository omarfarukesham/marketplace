import SearchMobileFullScreen from '@/app/_components/layout/header/navbar/search/search-mobile-full-screen';
import { ROUTES } from '@/app/_config/routes';
import Search from '@/icons/search';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';

function StoreSearchMobile({ slug }: { slug: string }) {
  const [searchOpen, setSearchOpen] = useState(false);

  const buttonRef = useRef<HTMLButtonElement>(null);

  const filters = { sellerSlug: slug, size: 5 };

  const router = useRouter();

  const onSearchSubmit = (query: string) => router.push(`${ROUTES.storeProducts(slug)}?q=${query.trim()}`);

  const closeSearch = () => setSearchOpen(false);

  return (
    <div className='mr-2.5 md:hidden'>
      <button
        onClick={() => setSearchOpen(true)}
        className='flex h-7 w-7 items-center justify-center rounded-full border border-gray-400 bg-gray-300'
        ref={buttonRef}
      >
        <Search className='pointer-events-none h-4 w-4 fill-dark-3' />
      </button>
      {searchOpen && (
        <SearchMobileFullScreen
          filters={filters}
          onSubmit={onSearchSubmit}
          closeSearch={closeSearch}
          buttonRef={buttonRef}
        />
      )}
    </div>
  );
}

export default StoreSearchMobile;
