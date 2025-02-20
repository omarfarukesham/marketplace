import { ROUTES } from '@/app/_config/routes';
import Cross from '@/icons/cross';
import Search from '@/icons/search';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

function StoreSearchDesktop({ slug }: { slug: string }) {
  const [query, setQuery] = useState('');

  const router = useRouter();

  const goToSearch = () => {
    if (query.length) {
      router.push(`${ROUTES.storeProducts(slug)}?q=${query.trim()}`);
    }
  };

  return (
    <>
      <div className='relative mr-10 hidden md:flex'>
        <input
          type='text'
          className='h-[2.5rem] rounded-l-md border border-r-0 border-gray-400 bg-white pl-[1.125rem] outline-none placeholder:text-gray-900'
          placeholder='Search'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              goToSearch();
            }
          }}
        />
        {query.length ? (
          <button
            onClick={() => setQuery('')}
            className='animate-fade-in absolute right-14 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-gray-400 p-0.5'
          >
            <Cross className='h-full w-full fill-white' />
          </button>
        ) : null}
        <button
          onClick={goToSearch}
          className='h-[2.5rem] rounded-r-md border border-l-0 border-gray-400 bg-gray-300 px-3'
        >
          <Search className='fill-dark-3' />
        </button>
      </div>
    </>
  );
}

export default StoreSearchDesktop;
