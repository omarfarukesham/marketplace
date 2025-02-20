import { ROUTES } from '@/app/_config/routes';
import Mic from '@/icons/mic';
import CategoryBarItemWrapper from './category-bar-item-wrapper';

const CategoryBarItemCampaigns = () => {
  return (
    <CategoryBarItemWrapper link={ROUTES.campaigns}>
      <div className='text-gray-900'>
        <Mic className='w-4 animate-blink md:w-6' />
      </div>
      Campaigns
    </CategoryBarItemWrapper>
  );
};

export default CategoryBarItemCampaigns;
