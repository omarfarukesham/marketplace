import { ProductType } from '@/app/_types/product.type';
import ClockLoader from '@/icons/product/clock-loader';

const QuantityInformation = ({ product }: { product: ProductType }) => {
  return product.shouldShowStockWarning ? (
    <span className='mt-2 flex items-center gap-1.5 text-accent-4 md:mt-4'>
      <ClockLoader className='fill-accent-4' />
      Only {product.stockCount} left in stock
    </span>
  ) : null;
};

export default QuantityInformation;
