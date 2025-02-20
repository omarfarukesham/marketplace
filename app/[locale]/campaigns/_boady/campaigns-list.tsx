import { BaseFiltersType } from '@/app/_config/filters';
import campaignService from '@/app/_services/campaign/campaign.service';
import { HydrationBoundary } from '@tanstack/react-query';
import CampaignsListBody from './campaigns-list-body';

const CampaignsList = async ({ filters }: { filters: BaseFiltersType }) => {
  const state = await campaignService.prefetchAll({ filters });

  return (
    <HydrationBoundary state={state}>
      <CampaignsListBody filters={filters} />
    </HydrationBoundary>
  );
};

export default CampaignsList;
