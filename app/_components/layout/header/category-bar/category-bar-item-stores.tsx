import { ROUTES } from '@/app/_config/routes';
import Store from '@/icons/store';
import CategoryBarItemWrapper from './category-bar-item-wrapper';

const CategoryBarItemStores = () => {
  return (
    <CategoryBarItemWrapper link={ROUTES.stores}>
      <Store className='h-4 w-4 fill-black/90 md:h-6 md:w-6' /> Stores
    </CategoryBarItemWrapper>
  );
};

export default CategoryBarItemStores;
