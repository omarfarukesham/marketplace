import { ImageType } from '@/app/_types/product.type';
import Cross from '@/icons/cross';
import ProductSlider from '../product-slider';
import ThumbnailImages from '../thumbnail-images';

type ProductImageFullScreenPreviewType = {
  images: ImageType[];
  activeThumbIndex: number;
  setActiveThumbIndex: (index: number) => void;
  closePreview: () => void;
};

const ProductImageFullScreenPreview = ({
  images,
  activeThumbIndex,
  setActiveThumbIndex,
  closePreview,
}: ProductImageFullScreenPreviewType) => {
  return (
    <div className='fixed left-0 top-0 z-10 flex h-screen w-full items-center justify-center overflow-y-auto bg-black/90'>
      <div className='relative flex h-[90%] w-11/12 gap-4 overflow-hidden'>
        <ThumbnailImages
          images={images || []}
          activeThumbIndex={activeThumbIndex}
          onClick={(index) => setActiveThumbIndex(index)}
          className='aspect-square w-[5%]'
        />
        <ProductSlider
          images={images || []}
          shouldZoom
          activeThumbIndex={activeThumbIndex}
          setActiveThumbIndex={setActiveThumbIndex}
        />
      </div>
      <button
        className='absolute right-5 top-5 rounded-full bg-gray-500 p-2 transition-transform hover:rotate-180 hover:scale-105 hover:bg-secondary-900'
        onClick={closePreview}
      >
        <Cross className='fill-white' />
      </button>
    </div>
  );
};

export default ProductImageFullScreenPreview;
