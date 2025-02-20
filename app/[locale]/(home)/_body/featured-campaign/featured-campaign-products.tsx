'use client';

import ProductCard from '@/app/_components/product/product-card';
import HorizontalScroll from '@/app/_components/ui/horizontal-scroll/horizontal-scroll';
import HorizontalScrollGrid from '@/app/_components/ui/horizontal-scroll/horizontal-scroll-grid';
import { ProductType } from '@/app/_types/product.type';

const FeaturedCampaignProducts = ({ products }: { products: ProductType[] }) => {
  return (
    <HorizontalScroll>
      <HorizontalScrollGrid>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </HorizontalScrollGrid>
    </HorizontalScroll>
  );
};

export default FeaturedCampaignProducts;
