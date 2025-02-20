'use client';

import HorizontalScroll from '@/app/_components/ui/horizontal-scroll/horizontal-scroll';
import HorizontalScrollGrid from '@/app/_components/ui/horizontal-scroll/horizontal-scroll-grid';
import ProductsGridLoading from '@/app/_components/ui/loading/products-grid-loading';
import { useRelevantProducts } from '@/app/_services/product/use-product';
import BuyMoreCard from './buy-more-card';

const BuyMore = ({ productId }: { productId: string }) => {
  const { data: products, isLoading } = useRelevantProducts({ id: productId, type: 'CROSS_SELL' });

  if (isLoading)
    return (
      <div>
        <h2 className='mb-6 mt-6 text-2xl font-bold'>Don&apos;t forget to buy more</h2>
        <ProductsGridLoading grid={4} />
      </div>
    );
  if (!products?.items?.length) return null;

  return (
    <div className='overflow-x-hidden'>
      <h2 className='mb-6 text-xl font-bold md:text-2xl'>Don&apos;t forget to buy more</h2>
      <HorizontalScroll>
        <HorizontalScrollGrid grid={4}>
          {products.items.map((product) => (
            <BuyMoreCard key={product.id} product={product} />
          ))}
        </HorizontalScrollGrid>
      </HorizontalScroll>
    </div>
  );
};

export default BuyMore;
