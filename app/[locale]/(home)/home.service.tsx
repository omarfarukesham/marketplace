import { getComponents } from '@/app/_lib/get-components';
import { NestedProps } from '@/app/_types/utility.type';

const homeComponents = {
  Body: {
    Banner: {
      BannerCarousel: true,
      BannerCards: true,
    },
    Categories: true,
    BestDeals: true,
    Recommendation: true,
    Bestsellers: true,
    FeaturedCategory: true,
    FeaturedProductsBanners: true,
    FeaturedBrands: true,
    RecommendedStores: true,
    Newsletter: true,
  },
};

export type HomeComponentsType = typeof homeComponents;

export const getHomeComponents = <T extends NestedProps<HomeComponentsType> | undefined = undefined>(props?: T) =>
  getComponents(homeComponents, props);
