import { merge } from '@/app/_lib/merge';
import ProductCardLoading from './proudct-card-loading';
type ProductsGridType = {
  className?: string;
  grid?: 4 | 5 | 6;
};

const ProductsGridLoading = ({ grid = 6, className }: ProductsGridType) => {
  const grids = {
    4: 'grid-cols-2 gap-2.5 md:grid-cols-2 md:gap-7 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4',
    5: 'grid-cols-2 gap-2.5 md:grid-cols-2 md:gap-7 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5',
    6: 'grid-cols-2 gap-2.5 md:grid-cols-3 md:gap-7 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6',
  };

  return (
    <div className={merge('grid', grids[grid], className)}>
      {Array.from({ length: grid }).map((_, index) => (
        <ProductCardLoading key={index} />
      ))}
    </div>
  );
};

export default ProductsGridLoading;
