export const formatQueries = (filters?: Record<string, number | string | boolean>): string => {
  if (!filters) return '';

  let queries = '?';

  for (const filter in filters) {
    queries += filter + '=' + filters[filter] + '&';
  }

  return queries.slice(0, queries.length - 1);
};
