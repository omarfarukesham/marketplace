import { ENDPOINTS } from '@/app/_config/endpoints';
import { APIFiltersType, QueryConfig } from '@/app/_types/api.type';
import { StoreCategoryType } from '@/app/_types/store.type';
import { useQuery } from '@tanstack/react-query';
import storeService from './store.service';

export const useStoreCategories = ({
  sellerId,
  queryConfig = {},
}: {
  sellerId: string;
  filters?: APIFiltersType;
  queryConfig?: QueryConfig<StoreCategoryType[]>;
}) => {
  return useQuery<StoreCategoryType[]>({
    queryKey: [ENDPOINTS.sellerCategories(sellerId)],
    queryFn: () => storeService.fetchCategories({ sellerId }),
    ...queryConfig,
  });
};
