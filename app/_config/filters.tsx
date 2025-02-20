import { SortOptionType } from '../_components/ui/dropdown/dropdown.type';
import Rating from '../_components/ui/rating/rating';
import { ClientContextType } from '../_lib/get-client-context';

export const DEFAULT_SORT: SortOptionType = {
  label: 'All',
  slug: null,
  sortKey: '',
  reverse: false,
};

export type BaseFiltersType = {
  sort?: string;
  q?: string;
  page?: number;
  size?: number;
};

export type CategoryFiltersType = { categoryId: number } & BaseFiltersType;
export type SearchFiltersType = { titleEn: string } & BaseFiltersType;

export type CustomizedCategoryFiltersType = { priceMin?: number; priceMax?: number } & BaseFiltersType;
export type BrandFiltersType = { brandId: string } & BaseFiltersType;

export const PAGINATION_SIZE = 5;

export const getCategoryProductsSortOptions = (context: ClientContextType): SortOptionType[] => {
  return [
    { label: 'Relevance', slug: '', sortKey: '', reverse: false },
    // { label: 'Trending', slug: 'trending-desc', sortKey: 'BEST_SELLING', reverse: false }, // asc
    { label: 'Latest arrivals', slug: 'created_at', sortKey: 'CREATED_AT', reverse: true },
    {
      label: 'Price: Low to high',
      slug: `prices.${context.currency}.price_value,ASC`,
      sortKey: 'PRICE',
      reverse: false,
    }, // asc
    {
      label: 'Price: High to low',
      slug: `prices.${context.currency}.price_value,DESC`,
      sortKey: 'PRICE',
      reverse: true,
    },
  ];
};

export const REVIEW_OPTIONS: {
  label: JSX.Element;
  min?: number;
  max?: number;
  value: string;
}[] = [
  {
    label: <Rating rating={5} className='gap-1'></Rating>,
    min: 5,
    max: undefined,
    value: '5',
  },
  {
    label: <Rating rating={4} className='gap-1'></Rating>,
    min: 4,
    max: undefined,
    value: '4',
  },
  {
    label: <Rating rating={3} className='gap-1'></Rating>,
    min: 3,
    max: undefined,
    value: '3',
  },
  {
    label: <Rating rating={2} className='gap-1'></Rating>,
    min: 2,
    max: undefined,
    value: '2',
  },
  {
    label: <Rating rating={1} className='gap-1'></Rating>,
    min: 1,
    max: undefined,
    value: '1',
  },
  {
    label: <Rating rating={0} className='gap-1'></Rating>,
    min: 0,
    max: undefined,
    value: '0',
  },
];
