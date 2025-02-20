import { SearchParamsType } from '../_types/utility.type';

export const getFilters = (props: string[], searchParams?: SearchParamsType) => {
  if (!searchParams) return {};

  const filters = props.map((prop) => searchParams[prop]);

  // const activeSort = options.find((item) => item.slug === sort) || DEFAULT_SORT;

  return filters;
};
