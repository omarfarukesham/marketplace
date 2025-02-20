import { StoreType } from '@/app/_types/store.type';
import StoreFeaturedProducts from './store-featured-products';
import StoreOverview from './store-overview';

const RecommendedStoreCard = ({ store }: { store: StoreType }) => {
  return (
    <div className='flex h-full gap-2.5 rounded-lg p-6 md:gap-7 md:shadow'>
      <StoreOverview store={store} />
      {store.recommendedProducts?.length ? (
        <StoreFeaturedProducts recommendedProducts={store.recommendedProducts.slice(0, 3)} />
      ) : null}
    </div>
  );
};

export default RecommendedStoreCard;
