'use client';
import Button from '@/app/_components/ui/button';
import LoadingSpinner from '@/app/_components/ui/loading-spinner';
import { BaseFiltersType } from '@/app/_config/filters';
import { useInfiniteCampaigns } from '@/app/_services/campaign/use-campaign';
import ArrowDown from '@/icons/arrows/arrow-down';
import CampaignsGrid from './campaigns-grid';

const CampaignsListBody = ({ filters }: { filters: BaseFiltersType }) => {
  const {
    data: campaigns,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isFetching,
  } = useInfiniteCampaigns({ filters });

  const allCampaigns = campaigns?.pages?.map((page) => page?.items || []).flat();

  return (
    <div className='w-full'>
      {!allCampaigns?.length ? <p>No Brand Found!</p> : <CampaignsGrid campaigns={allCampaigns} />}
      {(isFetching || isFetchingNextPage) && <LoadingSpinner />}

      {allCampaigns?.length ? (
        <Button
          onClick={() => fetchNextPage()}
          rounded
          outlined
          color='primary'
          size='lg'
          className='mx-auto mt-11 border-none shadow'
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {hasNextPage ? (
            <>
              View More <ArrowDown />
            </>
          ) : (
            'Nothing more to load'
          )}
        </Button>
      ) : null}
    </div>
  );
};

export default CampaignsListBody;
