import { getViewport } from '@/app/_lib/get-viewport';
import { merge } from '@/app/_lib/merge';
import campaignService from '@/app/_services/campaign/campaign.service';
import { getHomeComponents } from '../../home.service';
import BannerCards from './banner-cards/banner-cards';
import BannerCarousel from './banner-carousel/banner-carousel';

const Banner = async () => {
  const bannerComponents = await getHomeComponents<'Body.Banner'>('Body.Banner');
  const { isDesktop } = getViewport();

  const { data: campaigns, error } = await campaignService.getAll({ filters: { status: 'ACTIVE' } });

  if (error || !campaigns?.items?.length) return null;

  return (
    <section className={merge('flex min-w-0 justify-center gap-7', '-mx-2.5 md:mx-0')}>
      {bannerComponents.BannerCarousel && <BannerCarousel campaigns={campaigns.items} />}
      {bannerComponents.BannerCards && isDesktop && <BannerCards />}
    </section>
  );
};

export default Banner;
// 1170 + 27 + 640 = 1837
// 63.69% 1.47% 34.84%
