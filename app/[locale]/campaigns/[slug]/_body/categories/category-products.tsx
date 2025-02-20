'use client';

import ProductsGrid from '@/app/_components/product/products-grid';
import Button from '@/app/_components/ui/button';
import LoadingSpinner from '@/app/_components/ui/loading-spinner';
import { CategoryFiltersType } from '@/app/_config/filters';
import { useInfiniteCampaignProducts } from '@/app/_services/campaign/use-campaign';
import { CampaignType } from '@/app/_types/campaign.type';
import ArrowDown from '@/icons/arrows/arrow-down';

const CampaignProducts = ({ filters, campaign }: { filters: CategoryFiltersType; campaign: CampaignType }) => {
  const {
    data: campaignWithProducts,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isFetching,
  } = useInfiniteCampaignProducts({
    slug: campaign.slug,
    filters,
    initialData: { pages: [campaign], pageParams: [filters] },
  });

  const allProducts = campaignWithProducts?.pages?.map((page) => page.products?.items || []).flat();

  return (
    <div>
      {!allProducts?.length ? <p>No Product Found!</p> : <ProductsGrid products={allProducts} />}
      {(isFetching || isFetchingNextPage) && <LoadingSpinner />}

      {allProducts?.length ? (
        <Button
          onClick={() => fetchNextPage()}
          rounded
          outlined
          color='primary'
          size='lg'
          className='mx-auto mt-11 border-none shadow'
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {hasNextPage ? (
            <>
              View More <ArrowDown />
            </>
          ) : (
            'Nothing more to load'
          )}
        </Button>
      ) : null}
    </div>
  );
};

export default CampaignProducts;
