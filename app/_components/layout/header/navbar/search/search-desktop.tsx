'use client';

import Breadcrumb from '@/app/_components/ui/breadcrumb';
import Rating from '@/app/_components/ui/rating/rating';
import { ROUTES } from '@/app/_config/routes';
import { merge } from '@/app/_lib/merge';
import { ProductType } from '@/app/_types/product.type';
import { default as SearchIcon } from '@/icons/search';
import Image from 'next/image';
import Link from 'next/link';

import Cross from '@/icons/cross';
import { Dispatch, MutableRefObject, SetStateAction, useEffect } from 'react';
import useSearch from './use-search';

const SearchDesktop = () => {
  const {
    products,
    isLoading,
    isFetched,
    query,
    setQuery,
    handleSubmit,
    selectedIndex,
    selectNextProduct,
    selectPrevProduct,
    resetProductSelect,
    showResult,
    openResult,
    closeResult,
    inputRef,
    ref,
  } = useSearch();

  return (
    <div className='relative grow' ref={ref}>
      <SearchInputDesktop
        productsLength={products?.items?.length || 0}
        query={query}
        setQuery={setQuery}
        openResult={openResult}
        handleSubmit={handleSubmit}
        selectedIndex={selectedIndex}
        selectNextProduct={selectNextProduct}
        selectPrevProduct={selectPrevProduct}
        resetProductSelect={resetProductSelect}
        inputRef={inputRef}
        showResult={showResult}
      />

      <SearchResults
        query={query}
        isLoading={isLoading}
        isFetched={isFetched}
        closeResult={closeResult}
        showResult={showResult}
        products={products?.items}
        selectedIndex={selectedIndex}
      />
    </div>
  );
};

type SearchInputType = {
  query: string;
  productsLength: number;
  openResult: () => void;
  setQuery: Dispatch<SetStateAction<string>>;
  handleSubmit: () => void;
  selectedIndex: number;
  inputRef: MutableRefObject<HTMLInputElement | null>;
  selectNextProduct: () => void;
  selectPrevProduct: () => void;
  resetProductSelect: () => void;
  showResult: boolean;
};
const SearchInputDesktop = ({
  productsLength,
  openResult,
  query,
  setQuery,
  selectedIndex,
  handleSubmit,
  inputRef,
  selectNextProduct,
  selectPrevProduct,
  resetProductSelect,
  showResult,
}: SearchInputType) => {
  useEffect(() => {
    resetProductSelect(); // Reset the selected index when the query changes
  }, [query, resetProductSelect]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && selectedIndex === -1) {
      handleSubmit();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      selectNextProduct();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      selectPrevProduct();
    }
  };

  return (
    <div className='hidden md:flex'>
      <input
        type='text'
        className='h-[2.625rem] grow rounded-l-md border border-r-0 border-gray-400 bg-white pl-[1.125rem] outline-none placeholder:text-gray-900'
        placeholder='What are your looking for?'
        onFocus={() => {
          if (productsLength) openResult();
        }}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        ref={inputRef}
      />

      {!showResult && (
        <div className='animate-fade-in pointer-events-none absolute right-14 top-1/2 z-1 flex w-fit -translate-y-1/2 items-center gap-1'>
          <p className='rounded bg-gray-300 px-2 py-1 text-xs text-gray-900'>Ctrl</p>
          <p className='rounded bg-gray-300 px-2 py-1 text-xs text-gray-900'>K</p>
        </div>
      )}
      {!!query?.length && (
        <button onClick={() => setQuery('')} className='animate-fade-in absolute right-14 top-1/2 z-0 -translate-y-1/2'>
          <Cross className='h-5 w-5 fill-gray-700' />
        </button>
      )}
      <button
        onClick={handleSubmit}
        className='h-[2.625rem] rounded-r-md border border-l-0 border-gray-400 bg-secondary-900 px-3'
      >
        <SearchIcon className='fill-dark-3' />
      </button>
    </div>
  );
};

type SearchResultsType = {
  query: string;
  showResult: boolean;
  isLoading: boolean;
  isFetched: boolean;
  products?: ProductType[];
  closeResult: () => void;
  selectedIndex: number;
};
const SearchResults = ({
  query,
  showResult,
  isLoading,
  products,
  closeResult,
  selectedIndex,
  isFetched,
}: SearchResultsType) => {
  return (
    <div
      className={merge(
        'fixed left-0 top-12 z-10 w-full rounded-md bg-white px-2 py-2 shadow-[0_4px_8px_-2px_lightgray] md:absolute md:shadow',
        showResult ? '' : 'hidden',
      )}
    >
      <div className='thin-scrollbar max-h-[500px] overflow-y-auto pl-2 pr-4 pt-2'>
        {isLoading ? (
          <h3>Loading...</h3>
        ) : products?.length ? (
          products.map((product, index) => {
            return (
              <Link
                href={ROUTES.product(product.slug)}
                onClick={closeResult}
                key={product.id}
                className={merge(
                  'flex w-full items-center gap-3 border-b border-gray-200 py-3 hover:bg-gray-100',
                  index === selectedIndex && 'mx-auto w-[95%] scale-105 rounded-md border border-gray-400 px-1.5',
                )}
              >
                <Image
                  src={product.thumbnail?.url || ''}
                  alt={product.thumbnail?.altText || ''}
                  className='h-14 w-14 shrink-0 '
                  height={56}
                  width={56}
                />

                <div className='grid w-full gap-1'>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-end text-sm font-medium'>
                      <Rating rating={product.averageRating} size='sm' />
                      {product.averageRating}/5 ({product.totalRatingCount})
                    </div>
                    {/* <p>
                      <span className='text-success'>Stock </span>
                      <span>(375)</span>
                    </p> */}
                  </div>
                  <div className='relative flex items-center justify-between gap-2'>
                    <h2 className='line-clamp-2 text-base font-regular'>{product.title}</h2>
                    <p className='flex flex-col'>
                      {product.hasDiscount && (
                        <span className='absolute -top-4 mr-1 w-fit rounded bg-danger px-1 py-0.5 text-sm leading-none text-white'>
                          -{product.discountedAmount}
                        </span>
                      )}
                      <span className='mr-1 font-bold text-danger'>{product.appliedPrice?.priceText}</span>
                      {product.hasDiscount && <del className='text-label'>{product.price?.priceText}</del>}
                    </p>
                  </div>
                  <div className='flex items-center justify-between'>
                    <Breadcrumb
                      items={product.categories.map((category) => ({
                        label: category.name,
                        link: `/categories/${category.slug}`,
                      }))}
                      className='md:my-0'
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
      {products?.length ? (
        <Link
          href={`${ROUTES.search}?q=${query}`}
          onClick={closeResult}
          className='mx-auto block w-fit pb-2 pt-4 text-info'
        >
          View More Result
        </Link>
      ) : null}
    </div>
  );
};

export default SearchDesktop;
