import { ROUTES } from '@/app/_config/routes';
import { BrandType } from '@/app/_types/brand.type';
import Image from 'next/image';
import Link from 'next/link';

type BrandCardType = {
  brand: BrandType;
  className?: string;
};

const BrandCard = ({ brand, className }: BrandCardType) => {
  return (
    <Link href={ROUTES.brand(brand.slug)} className={className}>
      <div className='flex h-[4.4rem] flex-col items-center justify-center gap-1.5 rounded-lg border p-5 shadow md:h-[185px] md:gap-5'>
        <Image
          src={brand.logo || ''}
          alt={brand.name || ''}
          height={60}
          width={120}
          className='h-[2rem] object-contain md:h-24'
        />
        <h2 className='text-center text-label md:text-lg md:font-medium'>{brand.name}</h2>
      </div>
    </Link>
  );
};

export default BrandCard;
