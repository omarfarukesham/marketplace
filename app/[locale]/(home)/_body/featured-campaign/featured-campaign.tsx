import { FEATURED_CAMPAIGN_SLUG } from '@/app/_config/constants';
import campaignService from '@/app/_services/campaign/campaign.service';
import FeaturedCampaignBar from './featured-campaign-bar';
import FeaturedCampaignProducts from './featured-campaign-products';

const FeaturedCampaign = async () => {
  const { data: campaign, error } = await campaignService.get({ slug: FEATURED_CAMPAIGN_SLUG });

  if (error || !campaign) return null;

  const products = campaign.products?.items;

  return (
    <section className='grid gap-4 md:gap-11'>
      <FeaturedCampaignBar campaign={campaign} />
      {products?.length ? <FeaturedCampaignProducts products={products} /> : <p>No Product Found</p>}
    </section>
  );
};

export default FeaturedCampaign;
