import { ROUTES } from '@/app/_config/routes';
import { CampaignType } from '@/app/_types/campaign.type';
import Image from 'next/image';
import Link from 'next/link';

const CampaignCard = ({ campaign }: { campaign: CampaignType }) => {
  return (
    <Link
      href={ROUTES.campaign(campaign.slug)}
      className='relative h-[160px] w-full overflow-hidden rounded-lg border shadow md:h-[260px] xl:h-[300px]'
    >
      <Image
        src={campaign.bannerImage.url || ''}
        alt={campaign.name || ''}
        layout='fill'
        objectFit='fill'
        sizes='(max-width: 768px) 100vw, 50vw'
      />
    </Link>
  );
};

export default CampaignCard;
