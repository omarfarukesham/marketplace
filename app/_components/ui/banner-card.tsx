import Image from 'next/image';
import Link from 'next/link';

type BannerCardType = {
  src: string;
  alt: string;
  link: string;
  className?: string;
};

const BannerCard = ({ className, src, alt, link }: BannerCardType) => {
  return (
    <div className='relative h-full w-full'>
      <Image
        src={src}
        alt={alt}
        // height={640}
        // width={205}
        fill
        sizes='(max-width: 768px) 100vw, 50vw'
        className={className}
      />
      <Link
        href={link}
        className='absolute bottom-[16%] left-[4%] rounded-full bg-white px-[6%] py-[1%] text-[80%] shadow transition-colors duration-300 hover:bg-secondary-900 xl:font-bold'
      >
        Buy Now
      </Link>
    </div>
  );
};

// const BannerCard = ({ className, src, alt }: BannerCardType) => {
//   return (
//     <div className={merge('relative h-full w-full rounded-lg', className)}>
//       <Image src={src} alt={alt} fill className='rounded-lg' />
//     </div>
//   );
// };

export default BannerCard;
