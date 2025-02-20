'use client';

import { ProductType } from '@/app/_types/product.type';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import ImageBadgeMobile from './image-badge-mobile';
import ProductSlider from './product-slider';
import ThumbnailImages from './thumbnail-images';

const ProductImageFullScreenPreview = dynamic(() => import('./full-screen-preview/full-screen-preview'), {
  ssr: false,
});

type ProductImagesType = {
  product: ProductType;
  isDesktop: boolean;
};

const ProductImages = ({ product, isDesktop }: ProductImagesType) => {
  const [isFullScreenPreviewOpen, setIsFullScreenPreviewOpen] = useState(false);
  const closePreview = () => setIsFullScreenPreviewOpen(false);

  const [activeThumbIndex, setActiveThumbIndex] = useState(0);

  return (
    <div className='relative flex max-h-[70vh] gap-4 overflow-hidden md:aspect-[905/794] xl:ml-14 3xl:ml-20'>
      {isDesktop && (
        <ThumbnailImages
          images={product.images || []}
          activeThumbIndex={activeThumbIndex}
          onClick={(index) => setActiveThumbIndex(index)}
        />
      )}

      <ProductSlider
        images={product.images || []}
        onClick={() => setIsFullScreenPreviewOpen(true)}
        className='grow'
        activeThumbIndex={activeThumbIndex}
        setActiveThumbIndex={setActiveThumbIndex}
      />

      <ImageBadgeMobile activeIndex={activeThumbIndex} images={product.images || []} />

      {isDesktop && isFullScreenPreviewOpen && (
        <ProductImageFullScreenPreview
          images={product.images || []}
          activeThumbIndex={activeThumbIndex}
          setActiveThumbIndex={setActiveThumbIndex}
          closePreview={closePreview}
        />
      )}
    </div>
  );
};

export default ProductImages;
