'use client';

import ProductCardSmall from '@/app/_components/product/product-card-small';
import HorizontalScroll from '@/app/_components/ui/horizontal-scroll/horizontal-scroll';
import HorizontalScrollGrid from '@/app/_components/ui/horizontal-scroll/horizontal-scroll-grid';
import { useRelevantProducts } from '@/app/_services/product/use-product';

const CrossSellProducts = ({ productId }: { productId: string }) => {
  const { data: products } = useRelevantProducts({ id: productId, type: 'CROSS_SELL' });

  // if (isLoading) return <LoadingSpinner />;
  if (!products?.items) return null;

  return (
    <div className='-mx-10 h-fit overflow-hidden px-10'>
      <p className='mb-4 text-label font-bold md:text-lg'>You may find the following products interesting</p>

      <HorizontalScroll>
        <HorizontalScrollGrid>
          {products.items.map((product) => (
            <ProductCardSmall key={product.id} product={product} />
          ))}
        </HorizontalScrollGrid>
      </HorizontalScroll>
    </div>
  );
};

export default CrossSellProducts;
