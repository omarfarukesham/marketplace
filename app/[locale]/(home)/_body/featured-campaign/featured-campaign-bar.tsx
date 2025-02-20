import Countdown from '@/app/_components/ui/countdown/countdown';
import { ROUTES } from '@/app/_config/routes';
import { getViewport } from '@/app/_lib/get-viewport';
import { merge } from '@/app/_lib/merge';
import { CampaignType } from '@/app/_types/campaign.type';
import { ImageType } from '@/app/_types/product.type';
import ArrowRight from '@/icons/arrows/arrow-right';
import Image from 'next/image';
import Link from 'next/link';

const FeaturedCampaignBar = ({ campaign }: { campaign: CampaignType }) => {
  const { isDesktop } = getViewport();

  return isDesktop ? (
    <FeaturedCampaignBarDesktop campaign={campaign} />
  ) : (
    <FeaturedCampaignBarMobile campaign={campaign} />
  );
};

const FeaturedCampaignBarDesktop = ({ campaign }: { campaign: CampaignType }) => {
  return (
    <div className='relative'>
      <Image
        src={campaign.headerImage.url}
        alt={campaign.headerImage.altText}
        fill
        className='z-0 rounded-lg object-cover'
      />

      <div className='relative z-1 flex h-10 w-full items-center justify-between gap-3 rounded-lg px-3 text-white md:h-16 md:justify-center md:gap-9'>
        <CampaignTitle title={campaign.name} icon={campaign.icon} className='hidden md:flex' />
        <div className='flex items-center justify-center gap-3'>
          <span className='text-lg font-bold'>Ends In</span>
          <Countdown targetDate={campaign.effectiveEndDate.getTime()} className='text-black' />
        </div>
        <Link
          href={ROUTES.campaign(campaign.slug)}
          className='group flex items-center text-sm underline-offset-2 hover:underline md:text-base'
        >
          View More{' '}
          <ArrowRight className='h-5 w-5 translate-y-[0.5px] fill-white transition-transform group-hover:translate-x-1' />
        </Link>
      </div>
    </div>
  );
};

const FeaturedCampaignBarMobile = ({ campaign }: { campaign: CampaignType }) => {
  return (
    <div>
      <CampaignTitle title={campaign.name} icon={campaign.icon} className='mb-2 justify-center md:hidden' />

      <div className='relative h-10 w-full rounded-lg px-3 text-white'>
        <Image
          src={campaign.headerImage.url}
          alt={campaign.headerImage.altText}
          fill
          className='z-0 rounded-lg object-cover'
        />
        <div className='relative z-1 flex h-full items-center justify-between gap-3'>
          <div className='flex grow items-center justify-center gap-3 md:grow-0'>
            <span className='text-sm font-bold md:text-lg'>Ends In</span>
            <Countdown targetDate={campaign.effectiveEndDate.getTime()} className='text-black' />
          </div>
          <Link
            href={ROUTES.campaign(campaign.slug)}
            className='group flex items-center text-sm underline-offset-2 hover:underline md:text-base'
          >
            View More{' '}
            <ArrowRight className='h-4 w-4 translate-y-[0.5px] fill-white transition-transform group-hover:translate-x-1 md:h-5 md:w-5' />
          </Link>
        </div>
      </div>
    </div>
  );
};

const CampaignTitle = ({ title, icon, className }: { title: string; icon: ImageType; className: string }) => {
  return (
    <h1 className={merge('flex items-center gap-2 text-label font-bold uppercase md:gap-3 md:text-xl', className)}>
      <Image src={icon.url} alt={icon.altText} className='h-5 w-5' height={24} width={24} /> {title}
    </h1>
  );
};

export default FeaturedCampaignBar;
