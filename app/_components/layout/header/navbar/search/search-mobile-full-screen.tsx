'use client';

import { ROUTES } from '@/app/_config/routes';
import useDebounce from '@/app/_lib/hooks/use-debounce';
import useOutsideClick from '@/app/_lib/hooks/use-outside-click';
import { merge } from '@/app/_lib/merge';
import { useProducts } from '@/app/_services/product/use-product';
import { APIFiltersType } from '@/app/_types/api.type';
import { ProductType } from '@/app/_types/product.type';
import Search from '@/icons/search';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Dispatch, RefObject, SetStateAction, useEffect, useRef, useState } from 'react';

import Breadcrumb from '@/app/_components/ui/breadcrumb';
import Rating from '@/app/_components/ui/rating/rating';
import ArrowLeft from '@/icons/arrows/arrow-left';

function SearchMobileFullScreen({
  filters,
  onSubmit,
  closeSearch,
  buttonRef,
}: {
  filters?: APIFiltersType;
  onSubmit: (query: string) => void;
  closeSearch: () => void;
  buttonRef?: RefObject<HTMLElement>;
}) {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 300);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const router = useRouter();

  const {
    data: products,
    isLoading,
    isFetched,
  } = useProducts({
    filters: { titleEn: debouncedQuery, ...filters },
    queryConfig: { enabled: !!debouncedQuery },
  });

  const handleSubmit = () => {
    if (query.length) {
      onSubmit(query);
      closeSearch();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (selectedIndex !== -1) {
          setSelectedIndex(-1);
        } else {
          closeSearch();
        }
      } else if (e.key === 'Enter' && selectedIndex !== -1) {
        e.preventDefault();
        const selectedProduct = products?.items[selectedIndex];
        if (selectedProduct) {
          router.push(ROUTES.product(selectedProduct.slug));
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [closeSearch, products?.items, router, selectedIndex]);

  const searchRef = useOutsideClick(closeSearch, buttonRef?.current);

  return (
    <div className='animate-fade-in fixed left-0 top-0 z-20 h-full w-full bg-black/50'>
      <div className='min-h-[50vh] w-full rounded-md bg-white p-3 shadow' ref={searchRef}>
        <div className='flex'>
          <button className='-translate-x-1' onClick={closeSearch}>
            <ArrowLeft />
          </button>
          <SearchInput
            productLength={products?.items.length || 0}
            query={query}
            setQuery={setQuery}
            handleSubmit={handleSubmit}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
          />
        </div>
        <SearchResults
          products={products?.items}
          isLoading={isLoading}
          isFetched={isFetched}
          selectedIndex={selectedIndex}
          closeSearch={closeSearch}
        />
      </div>
    </div>
  );
}

const SearchInput = ({
  query,
  productLength,
  setQuery,
  handleSubmit,
  selectedIndex,
  setSelectedIndex,
}: {
  productLength: number;
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
  handleSubmit: () => void;
  selectedIndex: number;
  setSelectedIndex: Dispatch<SetStateAction<number>>;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    setSelectedIndex(-1); // Reset the selected index when the query changes
  }, [query, setSelectedIndex]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && selectedIndex === -1) {
      handleSubmit();
    } else if (e.key === 'ArrowDown') {
      setSelectedIndex((prevIndex) => Math.min(prevIndex + 1, productLength - 1));
      e.preventDefault();
    } else if (e.key === 'ArrowUp') {
      setSelectedIndex((prevIndex) => Math.max(prevIndex - 1, 0));
      e.preventDefault();
    }
  };

  return (
    <div className='flex w-full'>
      <input
        type='text'
        className='h-[2.5rem] grow rounded-l-md border border-r-0 border-gray-400 bg-white pl-[1.125rem] outline-none placeholder:text-gray-900'
        placeholder='Search'
        value={query}
        ref={inputRef}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button className='rounded-r-md bg-secondary-900 px-3 py-1' onClick={handleSubmit}>
        <Search />
      </button>
    </div>
  );
};

const SearchResults = ({
  products,
  isLoading,
  isFetched,
  selectedIndex,
  closeSearch,
}: {
  products?: ProductType[];
  isLoading: boolean;
  isFetched: boolean;
  selectedIndex: number;
  closeSearch: () => void;
}) => {
  return (
    <div className='thin-scrollbar max-h-[550px] overflow-y-auto px-2 pt-2'>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : products?.length ? (
        products.map((product, index) => {
          return (
            <Link
              href={ROUTES.product(product.slug)}
              onClick={closeSearch}
              key={product.id}
              className={merge(
                'flex w-full items-center gap-3 border-b border-gray-200 py-3 hover:bg-gray-100',
                index === selectedIndex && 'mx-auto w-[99%] scale-105 rounded-md border border-gray-400 p-1.5',
              )}
            >
              <Image
                src={product.thumbnail?.url || ''}
                alt={product.thumbnail?.altText || ''}
                className='h-14 w-14 shrink-0'
                height={56}
                width={56}
              />

              <div className='grid w-full gap-1'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-end text-sm font-medium'>
                    <Rating rating={product.averageRating} size='sm' />({product.totalRatingCount})
                  </div>
                  {/* <p className='text-sm md:text-base'>
                    <span className='text-success'>Stock </span>
                    <span>(375)</span>
                  </p> */}
                </div>
                <div className='flex items-center justify-between'>
                  <h2 className='line-clamp-2 text-base font-regular'>{product.title}</h2>
                  <p className='flex flex-col'>
                    {product.hasDiscount && (
                      <span className='w-fit rounded bg-danger px-1 py-0.5 text-sm leading-none text-white'>
                        -{product.discountedAmount}
                      </span>
                    )}
                    <span className='mr-1 text-label font-bold text-danger md:text-base'>
                      {product.appliedPrice?.priceText}
                    </span>
                    {product.hasDiscount && <del className='text-sm md:text-label'>{product.price?.priceText}</del>}
                  </p>
                </div>
                <div className='flex items-center justify-between'>
                  <Breadcrumb
                    items={product.categories.map((category) => ({
                      label: category.name,
                      link: `/categories/${category.slug}`,
                    }))}
                    className='my-0 block max-w-[55%] truncate'
                  />
                  {/* <Button color='secondary' size='sm' className='text-sm font-regular'>
                    Add to Cart
                  </Button> */}
                </div>
              </div>
            </Link>
          );
        })
      ) : isFetched ? (
        <p className='py-5 text-gray-500'>No products found</p>
      ) : (
        <p className='py-5 text-gray-500'>Please search something</p>
      )}
    </div>
  );
};

export default SearchMobileFullScreen;
