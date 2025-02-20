import HorizontalScroll from '@/app/_components/ui/horizontal-scroll/horizontal-scroll';
import { BrandType } from '@/app/_types/brand.type';
import BrandCard from './brand-card';

const FeaturedBrandsHorizontal = ({ brands }: { brands: BrandType[] }) => {
  return (
    <HorizontalScroll>
      <div className='flex h-60 flex-col flex-wrap justify-center gap-3'>
        {brands?.map((brand) => <BrandCard key={brand.id} brand={brand} />)}
      </div>
    </HorizontalScroll>
  );
};

export default FeaturedBrandsHorizontal;
