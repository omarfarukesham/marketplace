import { ImageType } from '@/app/_types/product.type';
import Image from 'next/image';

const Banner = ({ banner }: { banner: ImageType }) => {
  return (
    <div className='relative -ml-3 aspect-[375/62] w-[calc(100%+24px)] md:-ml-11 md:aspect-[192/12] md:w-[calc(100%+88px)]'>
      <Image src={banner.url} alt={banner.altText} fill sizes='100vw' />
    </div>
  );
};

export default Banner;
