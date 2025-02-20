'use client';

import DropdownSort from '@/app/_components/ui/dropdown/dropdown-sort';
import { SortOptionType } from '@/app/_components/ui/dropdown/dropdown.type';
import { DEFAULT_SORT } from '@/app/_config/filters';
import Filter from '@/icons/filter';

const CART_SORT_OPTIONS: SortOptionType[] = [
  DEFAULT_SORT,
  { label: 'Trending', slug: 'trending-desc', sortKey: 'BEST_SELLING', reverse: false }, // asc
  { label: 'Latest arrivals', slug: 'latest-desc', sortKey: 'CREATED_AT', reverse: true },
  { label: 'Price: Low to high', slug: 'price-asc', sortKey: 'PRICE', reverse: false }, // asc
  { label: 'Price: High to low', slug: 'price-desc', sortKey: 'PRICE', reverse: true },
];

const CartItemsFilter = () => {
  return (
    <DropdownSort
      options={CART_SORT_OPTIONS}
      optionsClassName='w-fit'
      customButton={({ setOptionsOpen, optionsOpen, activeOption }) => {
        return (
          <button
            type='button'
            onClick={() => {
              setOptionsOpen(!optionsOpen);
            }}
            className='flex items-center justify-between gap-1'
          >
            <Filter />
            {activeOption?.label || 'Filter'}
          </button>
        );
      }}
    />
  );
};

export default CartItemsFilter;
