import { CategoryFiltersType } from '@/app/_config/filters';
import campaignService from '@/app/_services/campaign/campaign.service';
import { CampaignType } from '@/app/_types/campaign.type';
import CampaignCategoryItems from './category-items';
import CampaignCategoryProducts from './category-products';

const CampaignCategories = async ({
  slug,
  filters,
  campaign,
}: {
  slug: string;
  filters: CategoryFiltersType;
  campaign: CampaignType;
}) => {
  const { data: categories } = await campaignService.getCategories({ slug });

  if (!categories?.length) return null;

  return (
    <div className='my-5 md:my-16'>
      {/* <h2 className='mb-4 text-base font-extrabold md:text-2xl'>DISCOUNTED PRODUCTS</h2> */}
      <div className='-mx-5 grid gap-6 overflow-x-hidden px-5 pb-1'>
        <CampaignCategoryItems categories={categories} />
        <CampaignCategoryProducts filters={filters} campaign={campaign} />
      </div>
    </div>
  );
};

export default CampaignCategories;
