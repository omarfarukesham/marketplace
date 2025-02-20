import { ENDPOINTS } from '@/app/_config/endpoints';
import { campaignApi } from '@/app/_lib/api-service';
import catchAsync from '@/app/_lib/catch-async';
import campaignModel from '@/app/_models/campaign.model';
import paginatedResponse from '@/app/_models/pageable.model';
import { APIFiltersType, PaginatedResponseType } from '@/app/_types/api.type';
import { CampaignCategoryType, CampaignType } from '@/app/_types/campaign.type';
import { QueryClient, dehydrate } from '@tanstack/react-query';

export class CampaignService {
  fetch = async ({ slug, filters }: { slug: string; filters?: APIFiltersType }) => {
    const data = await campaignApi.get(ENDPOINTS.campaign(slug), { filters });

    return campaignModel(data?.data?.content[0]);
  };

  get = catchAsync<CampaignType>(this.fetch);

  fetchAll = async ({ filters }: { filters?: APIFiltersType }) => {
    const data = await campaignApi.get(ENDPOINTS.campaigns, {
      filters,
      config: {
        cache: 'no-store',
      },
    });

    return paginatedResponse<CampaignType[]>(data.data, campaignModel);
  };

  getAll = catchAsync<PaginatedResponseType<CampaignType[]>, { filters?: APIFiltersType }>(this.fetchAll);

  prefetchAll = async ({ filters }: { filters?: APIFiltersType } = {}) => {
    const queryClient = new QueryClient();

    await queryClient.prefetchInfiniteQuery({
      queryKey: [ENDPOINTS.campaigns, JSON.stringify(filters)],
      queryFn: () => this.fetchAll({ filters }),
      initialPageParam: filters,
    });

    return dehydrate(queryClient);
  };

  fetchCategories = async ({ slug }: { slug: string }) => {
    const data = await campaignApi.get(ENDPOINTS.campaignCategories(slug), {
      config: {
        cache: 'no-store',
      },
    });

    return data?.data?.content as CampaignCategoryType[];
  };

  getCategories = catchAsync(this.fetchCategories);
}

const campaignService = new CampaignService();
export default campaignService;
