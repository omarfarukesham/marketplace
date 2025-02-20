'use client';

import ProductCardSmall from '@/app/_components/product/product-card-small';
import HScroll from '@/app/_components/ui/h-scroll/h-scroll';
import { ProductType } from '@/app/_types/product.type';
import { SwiperSlide } from 'swiper/react';

const ProductsScrollable = ({ products }: { products: ProductType[] }) => {
  return (
    <HScroll slidesPerView={2} spaceBetween={10}>
      {products.slice(0, 6).map((product) => (
        <SwiperSlide key={product.id}>
          <ProductCardSmall product={product} />
        </SwiperSlide>
      ))}
    </HScroll>
  );
};

export default ProductsScrollable;
