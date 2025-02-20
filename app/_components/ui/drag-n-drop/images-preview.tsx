import Cross from '@/icons/cross';
import Image from 'next/image';

const ImagesPreview = ({ images, handleRemove }: { images: string[]; handleRemove: (index: number) => void }) => {
  return (
    <div className='mt-3 flex items-center gap-3'>
      {images.map((image, index) => (
        <div key={index} className='relative h-40 w-40 overflow-hidden rounded border'>
          <Image src={image} fill alt={image} className='object-scale-down transition-transform hover:scale-105' />
          <button
            type='button'
            onClick={() => handleRemove(index)}
            className='absolute right-1 top-1 rounded-full p-1 transition-colors hover:bg-gray-500'
          >
            <Cross className='h-4 w-4' />
          </button>
        </div>
      ))}
    </div>
  );
};

export default ImagesPreview;
