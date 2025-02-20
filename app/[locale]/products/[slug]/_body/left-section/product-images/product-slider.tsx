import { merge } from '@/app/_lib/merge';
import { ImageType } from '@/app/_types/product.type';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { useZoom } from './full-screen-preview/use-zoom';

type ProductSliderType = {
  images: ImageType[];
  activeThumbIndex: number;
  setActiveThumbIndex: (index: number) => void;
  shouldZoom?: boolean;
  onClick?: () => void;
  className?: string;
};

const ProductSlider = ({
  images,
  activeThumbIndex,
  setActiveThumbIndex,
  className,
  onClick,
  shouldZoom,
}: ProductSliderType) => {
  const { zoom, handleZoom, position, handleMouseMove } = useZoom();

  const [swiperInstance, setSwiperInstance] = useState<SwiperClass>();

  // slide to active thumb index on active index change
  useEffect(() => {
    if (swiperInstance?.params?.enabled) {
      swiperInstance.slideTo(activeThumbIndex);
    }
  }, [activeThumbIndex, swiperInstance]);

  // set active thumb index on slide change
  const onSwiper = (swiper: SwiperClass) => {
    if (swiper) {
      swiper.on('slideChange', () => setActiveThumbIndex(swiper.activeIndex));
      setSwiperInstance(swiper);
    }
  };

  return (
    <Swiper
      className={merge('aspect-square', className)}
      // style={{ transform: `scale(${zoom > 1 ? '1.1 ' : '1'})` }}
      onSwiper={onSwiper}
      navigation
      modules={[Navigation]}
    >
      {images.map((img, index) => (
        <SwiperSlide key={img.url} className='h-full w-full overflow-hidden'>
          <div className='relative h-full w-full'>
            <Image
              priority={index === 0}
              src={img.url}
              alt={img.altText}
              fill
              sizes='(min-width: 768px) 50vw, 100vw'
              className={merge(
                'h-full w-full object-cover',
                zoom > 1 ? 'hover:cursor-zoom-out' : 'hover:cursor-zoom-in',
              )}
              onClick={shouldZoom ? handleZoom : onClick}
              onMouseMove={shouldZoom ? handleMouseMove : () => {}}
              style={{ transform: `translate(${position.x}%, ${position.y}%) scale(${zoom})` }}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductSlider;
