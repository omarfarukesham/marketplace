import { ENDPOINTS } from '@/app/_config/endpoints';
import { APIFiltersType, PaginatedResponseType, QueryConfig } from '@/app/_types/api.type';
import { CampaignType } from '@/app/_types/campaign.type';
import { InfiniteData, QueryKey, useInfiniteQuery, useQuery } from '@tanstack/react-query';
import campaignService from './campaign.service';

export const useCampaigns = ({
  filters,
  queryConfig,
}: {
  filters?: APIFiltersType;
  queryConfig?: QueryConfig<PaginatedResponseType<CampaignType[]>>;
}) => {
  return useQuery<PaginatedResponseType<CampaignType[]>>({
    queryKey: [ENDPOINTS.campaigns, JSON.stringify(filters)],
    queryFn: () => campaignService.fetchAll({ filters }),
    ...queryConfig,
  });
};

export const useInfiniteCampaigns = ({
  filters,
  initialData,
}: {
  filters: APIFiltersType;
  initialData?: InfiniteData<PaginatedResponseType<CampaignType[]>, APIFiltersType>;
}) => {
  return useInfiniteQuery<
    PaginatedResponseType<CampaignType[]>,
    unknown,
    InfiniteData<PaginatedResponseType<CampaignType[]>>,
    QueryKey,
    APIFiltersType
  >({
    queryKey: [ENDPOINTS.campaigns, JSON.stringify(filters)],
    queryFn: ({ pageParam }) => campaignService.fetchAll({ filters: pageParam }),
    initialPageParam: filters,
    initialData,
    placeholderData: (previousData) => previousData,
    getNextPageParam: (lastPage) =>
      lastPage.paginate.last
        ? undefined
        : {
            ...filters,
            page: lastPage.paginate.currentPage + 1,
          },
  });
};

export const useInfiniteCampaignProducts = ({
  slug,
  filters,
  initialData,
}: {
  slug: string;
  filters: APIFiltersType;
  initialData?: InfiniteData<CampaignType, APIFiltersType>;
}) => {
  return useInfiniteQuery<CampaignType, unknown, InfiniteData<CampaignType>, QueryKey, APIFiltersType>({
    queryKey: [ENDPOINTS.campaign(slug), JSON.stringify(filters)],
    queryFn: ({ pageParam }) => campaignService.fetch({ slug, filters: pageParam }),
    initialPageParam: filters,
    initialData,
    placeholderData: (previousData) => previousData,
    getNextPageParam: (lastPage) =>
      lastPage.products!.paginate.last
        ? undefined
        : {
            ...filters,
            page: lastPage.products!.paginate.currentPage + 1,
          },
  });
};
