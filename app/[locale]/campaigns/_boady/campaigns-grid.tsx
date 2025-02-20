import { CampaignType } from '@/app/_types/campaign.type';
import CampaignCard from './campaign-card';

const CampaignsGrid = ({ campaigns }: { campaigns: CampaignType[] }) => {
  return (
    <div className='grid w-full gap-4 md:grid-cols-1 md:gap-9 xl:grid-cols-2'>
      {campaigns.map((campaign) => (
        <CampaignCard key={campaign.id} campaign={campaign} />
      ))}
    </div>
  );
};

export default CampaignsGrid;
