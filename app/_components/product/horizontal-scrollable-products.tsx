import { ProductType } from '@/app/_types/product.type';
import HorizontalScroll from '../ui/horizontal-scroll/horizontal-scroll';
import ProductCard from './product-card';

type HorizontalScrollableProductsType = {
  products: ProductType[];
};

const HorizontalScrollableProducts = ({ products }: HorizontalScrollableProductsType) => {
  return (
    <HorizontalScroll>
      <div className='flex gap-2 md:gap-7'>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} className='max-w-[calc(50%-8px)]' />
        ))}
      </div>
    </HorizontalScroll>
  );
};

export default HorizontalScrollableProducts;
