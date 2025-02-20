import { getViewport } from '@/app/_lib/get-viewport';
import { DataLayerOnLoad } from '@/app/_lib/gtm/send-data';
import { getHomeComponents } from '../home.service';
import Banner from './banner/banner';
import Bestsellers from './bestsellers/bestsellers';
import Categories from './categories/categories';
import FeaturedBrands from './featured-brands/featured-brands';
import FeaturedCampaign from './featured-campaign/featured-campaign';
import FeaturedCategory from './featured-category/featured-category';
import FeaturedProductsBanners from './featured-products-banners/featured-products-banners';

import GTM_EVENTS from '@/app/_lib/gtm/events';
import { Suspense } from 'react';
import Newsletter from './newsletter/newsletter';
import Recommendation from './recommendation/recommendation';
import RecommendedStores from './recommended-stores/recommended-stores';

const Body = async () => {
  const bodyComponents = await getHomeComponents<'Body'>('Body');
  const { isDesktop } = getViewport();

  return (
    <main className='grid w-full max-w-[100vw] gap-4 overflow-x-hidden px-2.5 md:gap-8 md:p-10 md:pb-0'>
      <DataLayerOnLoad eventName={GTM_EVENTS.VIEW_HOME} />

      {bodyComponents.Banner && <Banner />}
      {bodyComponents.Categories && isDesktop && <Categories />}

      <Suspense>{bodyComponents.BestDeals && <FeaturedCampaign />}</Suspense>
      <Suspense>{bodyComponents.Categories && !isDesktop && <Categories />}</Suspense>
      <Suspense>{bodyComponents.Recommendation && <Recommendation />}</Suspense>
      <Suspense>{bodyComponents.Bestsellers && <Bestsellers />}</Suspense>
      <Suspense>{bodyComponents.FeaturedCategory && <FeaturedCategory code='TD' />}</Suspense>
      <Suspense>{bodyComponents.FeaturedProductsBanners && <FeaturedProductsBanners code='FP2' />}</Suspense>
      <Suspense>{bodyComponents.FeaturedCategory && <FeaturedCategory code='LF' />}</Suspense>
      <Suspense>{bodyComponents.FeaturedBrands && <FeaturedBrands />}</Suspense>
      <Suspense>
        {bodyComponents.FeaturedProductsBanners && <FeaturedProductsBanners code='FP3' numberOfColumns={3} />}
      </Suspense>
      <Suspense>{bodyComponents.RecommendedStores && <RecommendedStores />}</Suspense>
      <Suspense>{bodyComponents.Newsletter && <Newsletter />}</Suspense>
    </main>
  );
};

export default Body;
