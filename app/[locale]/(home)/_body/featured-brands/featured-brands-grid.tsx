import { merge } from '@/app/_lib/merge';
import { BrandType } from '@/app/_types/brand.type';
import BrandCard from './brand-card';

const FeaturedBrandsGrid = ({
  brands,
  grid = 5,
  twoRowOnly,
}: {
  brands: BrandType[];
  grid?: 4 | 5 | 6;
  twoRowOnly?: boolean;
}) => {
  const grids = {
    4: 'grid-cols-3 gap-2.5 md:grid-cols-2 md:gap-7 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4',
    5: 'grid-cols-3 gap-2.5 md:grid-cols-3 md:gap-7 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5',
    6: 'grid-cols-3 gap-2.5 md:grid-cols-3 md:gap-7 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6',
  };
  return (
    <div className={merge('grid w-full', grids[grid])}>
      {brands.map((brand) => (
        <BrandCard key={brand.id} brand={brand} className={twoRowOnly ? 'hide-after-two-rows' : ''} />
      ))}
    </div>
  );
};

export default FeaturedBrandsGrid;
