import { StoreType } from '@/app/_types/store.type';
import RecommendedStoreCard from './recommended-store-card';

const RecommendedStoresGrid = ({ stores }: { stores: StoreType[] }) => {
  return (
    <div className='grid gap-7 md:grid-cols-2 3xl:grid-cols-4'>
      {stores.map((store) => (
        <RecommendedStoreCard key={store.id} store={store} />
      ))}
    </div>
  );
};

export default RecommendedStoresGrid;
