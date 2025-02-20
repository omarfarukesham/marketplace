import Breadcrumb from '@/app/_components/ui/breadcrumb';
import { CategoryFiltersType } from '@/app/_config/filters';
import { CampaignType } from '@/app/_types/campaign.type';
import Banner from './banner';
import CampaignCategories from './categories/categories';
import Details from './details/details';

const CampaignBody = ({
  campaign,
  slug,
  filters,
}: {
  campaign: CampaignType;
  slug: string;
  filters: CategoryFiltersType;
}) => {
  const breadcrumbItems = [
    { label: 'Home', link: '/' },
    { label: 'Campaigns', link: '/campaigns' },
    { label: campaign?.name },
  ];

  return (
    <main className='mx-3 md:mx-11'>
      <Breadcrumb items={breadcrumbItems} />
      <Banner banner={campaign.headerImage} />
      <Details campaign={campaign} />
      {/* <TopDeals campaign={campaign} />
      <PriceCards /> */}
      <CampaignCategories filters={filters} slug={slug} campaign={campaign} />
    </main>
  );
};

export default CampaignBody;
