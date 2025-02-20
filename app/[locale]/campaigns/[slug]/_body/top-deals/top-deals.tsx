import ProductsGrid from '@/app/_components/product/products-grid';
import { CampaignType } from '@/app/_types/campaign.type';
import StarRounded from '@/icons/star-rounded';

const TopDeals = ({ campaign }: { campaign: CampaignType }) => {
  const products = campaign.products?.items;

  return (
    <div className='mt-9'>
      <h1 className='mb-5 flex items-center gap-2 text-2xl font-extrabold'>
        <StarRounded /> TOP DEALS
      </h1>

      {products?.length ? <ProductsGrid products={products.slice(0, 5)} grid={5} /> : null}
    </div>
  );
};

export default TopDeals;
