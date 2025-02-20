import Breadcrumb from '@/app/_components/ui/breadcrumb';
import { BaseFiltersType } from '@/app/_config/filters';
import CampaignsList from './_boady/campaigns-list';

const Campaigns = () => {
  const filters: BaseFiltersType = {
    size: 10,
    page: 0,
  };

  const BREADCRUMB_ITEMS = [
    { label: 'Home', link: '/' },
    {
      label: 'Campaigns',
      link: 'campaigns',
    },
  ];
  return (
    <main className='mx-3 mb-14 md:mx-11'>
      <Breadcrumb items={BREADCRUMB_ITEMS} />

      <div className='flex flex-col gap-[3%] md:flex-row'>
        <CampaignsList filters={filters} />
      </div>
    </main>
  );
};

export default Campaigns;
