import { merge } from '@/app/_lib/merge';
import { ImageType } from '@/app/_types/product.type';
import Image from 'next/image';

type ThumbnailImagesType = {
  images: ImageType[];
  activeThumbIndex: number;
  onClick: (index: number) => void;
  className?: string;
};

const ThumbnailImages = ({ images, activeThumbIndex, onClick, className }: ThumbnailImagesType) => {
  return (
    <div className={merge('no-scrollbar flex w-[10%] shrink-0 flex-col gap-2 overflow-auto', className)}>
      {images.map((img, index) => (
        <Image
          key={index}
          src={img.url}
          alt={img.altText}
          height={96}
          width={96}
          className={merge(
            'aspect-square w-full bg-gray-200 object-scale-down',
            activeThumbIndex === index && 'border-4 border-secondary-900',
          )}
          onClick={() => onClick(index)}
        />
      ))}
    </div>
  );
};

export default ThumbnailImages;
