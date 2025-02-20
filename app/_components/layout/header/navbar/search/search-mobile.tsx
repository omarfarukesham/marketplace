'use client';

import { ROUTES } from '@/app/_config/routes';
import { merge } from '@/app/_lib/merge';
import { default as SearchIcon } from '@/icons/search';
import { useRouter } from 'next/navigation';

import { useRef, useState } from 'react';
import SearchMobileFullScreen from './search-mobile-full-screen';

const SearchMobile = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const filters = { size: 5 };

  const router = useRouter();

  const onSearchSubmit = (query: string) => router.push(`${ROUTES.search}?q=${query}`);

  const closeSearch = () => setSearchOpen(false);

  return (
    <div className={merge('relative flex h-[1.7rem] w-[9rem] grow md:hidden')}>
      <input
        type='text'
        className={merge(
          'rounded-full border border-gray-300 bg-gray-200 pl-[0.7rem] text-label font-light outline-none placeholder:text-label placeholder:font-light placeholder:text-gray-900',
          'h-full w-full',
          'md:hidden',
        )}
        placeholder='Search'
        onClick={() => setSearchOpen(true)}
        ref={inputRef}
      />
      <SearchIcon className='absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 fill-dark-3' />
      {searchOpen && (
        <SearchMobileFullScreen
          filters={filters}
          onSubmit={onSearchSubmit}
          closeSearch={closeSearch}
          buttonRef={inputRef}
        />
      )}
    </div>
  );
};

export default SearchMobile;
