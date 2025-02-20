import { getViewport } from '@/app/_lib/get-viewport';
import storeService from '@/app/_services/store/store.service';
import RecommendedStoresGrid from './recommended-stores-grid';
import RecommendedStoresHorizontal from './recommended-stores-horizontal';

const StoresList = async () => {
  const { isDesktop } = getViewport();

  const { data: stores } = await storeService.getRecommended({});

  if (!stores) return null;

  return isDesktop ? <RecommendedStoresGrid stores={stores} /> : <RecommendedStoresHorizontal stores={stores} />;
};

export default StoresList;
