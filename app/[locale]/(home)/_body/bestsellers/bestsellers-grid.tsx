import HorizontalScroll from '@/app/_components/ui/horizontal-scroll/horizontal-scroll';
import HorizontalScrollFlex from '@/app/_components/ui/horizontal-scroll/horizontal-scroll-flex';
import { getViewport } from '@/app/_lib/get-viewport';
import bestSellingProductService from '@/app/_services/product/best-selling-products.service';
import { CategoryType } from '@/app/_types/category.type';
import BestSellersCard from './bestsellers-card';

const BestsellersGrid = async () => {
  const { data: categories } = await bestSellingProductService.getCategories({ filters: { size: 4 } });

  if (!categories?.length) return null;

  const { isDesktop } = getViewport();
  return isDesktop ? (
    <BestsellersGridDesktop categories={categories} />
  ) : (
    <BestsellersGridMobile categories={categories} />
  );
};

const BestsellersGridDesktop = ({ categories }: { categories: CategoryType[] }) => {
  return (
    <div className='grid grid-cols-2 gap-7 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {categories.map((category: CategoryType) => (
        <BestSellersCard key={category.id} category={category} />
      ))}
    </div>
  );
};

const BestsellersGridMobile = ({ categories }: { categories: CategoryType[] }) => {
  return (
    <HorizontalScroll>
      <HorizontalScrollFlex>
        {categories.map((category: CategoryType) => (
          <BestSellersCard key={category.id} category={category} />
        ))}
      </HorizontalScrollFlex>
    </HorizontalScroll>
  );
};

export default BestsellersGrid;
