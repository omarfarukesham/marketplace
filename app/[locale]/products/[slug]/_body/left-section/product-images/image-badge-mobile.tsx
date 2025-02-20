import { ImageType } from '@/app/_types/product.type';

type ImageBadgeMobileProps = {
  activeIndex: number;
  images: ImageType[];
};

const ImageBadgeMobile = ({ activeIndex, images }: ImageBadgeMobileProps) => {
  return (
    <div className='absolute bottom-4 left-1/2 z-1 flex -translate-x-1/2 items-center justify-center rounded-full bg-secondary-900 px-4 py-0.5 md:hidden'>
      {activeIndex + 1}/{images?.length}
    </div>
  );
};

export default ImageBadgeMobile;
