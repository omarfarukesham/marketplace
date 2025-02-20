import Countdown from '@/app/_components/ui/countdown/countdown';
import { CampaignType } from '@/app/_types/campaign.type';
import Bolt from '@/icons/bolt';

const Details = ({ campaign }: { campaign: CampaignType }) => {
  return (
    <div className='flex flex-col text-center'>
      <div className='flex flex-col items-center justify-center gap-1 p-5 md:flex-row md:gap-5'>
        <div className='text-2xl md:text-4xl'>{campaign.name}</div>
        <div className='flex items-center gap-3'>
          <div className='flex items-center'>
            <span className='text-accent-4'>
              <Bolt className='animate-blink md:h-9 md:w-9' />
            </span>
            <div className='font-bold'>Ends In</div>
          </div>
          <Countdown targetDate={campaign.effectiveEndDate.getTime()} itemClassName='shadow' />
        </div>
      </div>

      <div>{campaign.description}</div>
    </div>
  );
};

export default Details;
