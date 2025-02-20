import { ImageProps, default as NextImage } from 'next/image';
import Link from 'next/link';

const Image = ({ className, src, alt }: ImageProps) => {
  return (
    <Link href='/' className='relative h-full w-full overflow-hidden'>
      <NextImage
        src={src}
        alt={alt}
        fill
        sizes='(max-width: 768px) 100vw'
        // loading='eager'
        className={className}
      />
    </Link>
  );
};

export default Image;
