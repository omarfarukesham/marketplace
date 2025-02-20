import { getViewport } from '@/app/_lib/get-viewport';
import { BrandType } from '@/app/_types/brand.type';
import FeaturedBrandsGrid from './featured-brands-grid';
import FeaturedBrandsHorizontal from './featured-brands-horizontal';

const FeaturedBrandsList = ({ brands }: { brands: BrandType[] }) => {
  const { isDesktop } = getViewport();

  return isDesktop ? <FeaturedBrandsGrid brands={brands} twoRowOnly /> : <FeaturedBrandsHorizontal brands={brands} />;
};

export default FeaturedBrandsList;
