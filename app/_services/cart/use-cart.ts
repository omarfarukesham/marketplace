import { ENDPOINTS } from '@/app/_config/endpoints';
import { useUser } from '@/app/_store/user/user.context';
import { APIFiltersType, QueryConfig } from '@/app/_types/api.type';
import { CartState } from '@/app/_types/cart.type';
import { useQuery } from '@tanstack/react-query';
import cartService from './cart.service';

export const useCartQuery = ({
  filters,
  queryOptions,
}: {
  userId?: string;
  filters?: APIFiltersType & {
    productId?: string;
    pageReqType?: 'checkout' | 'cart';
  };
  queryOptions?: QueryConfig<Omit<CartState, 'isLoading' | 'isFetching'>>;
}) => {
  const { user } = useUser();

  return useQuery<Omit<CartState, 'isLoading' | 'isFetching'>>({
    queryKey: [ENDPOINTS.cart, JSON.stringify(filters), user?.id], // user?.id for fresh data after login and logout
    queryFn: () => cartService.fetch({ filters }),
    // staleTime: 0,
    // For showing fresh data in checkout page:
    // Option 1. disable cache,
    // Option 2. invalidate cache after each cart operation and order submit. (CURRENT_OPTION)
    ...queryOptions,
  });
};
