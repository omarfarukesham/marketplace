'use client';

import ProductCardQuantity from '@/app/_components/product/product-card-quantity';
import HorizontalScroll from '@/app/_components/ui/horizontal-scroll/horizontal-scroll';
import HorizontalScrollGrid from '@/app/_components/ui/horizontal-scroll/horizontal-scroll-grid';
import { CartItem } from '@/app/_types/cart.type';

const CheckoutProductsScrollable = ({ items }: { items: CartItem[] }) => {
  return (
    <HorizontalScroll progressBar={false}>
      <HorizontalScrollGrid>
        {items.map((cartItem) => (
          <ProductCardQuantity key={cartItem.product.id} cartItem={cartItem} />
        ))}
      </HorizontalScrollGrid>
    </HorizontalScroll>
  );
};

export default CheckoutProductsScrollable;
