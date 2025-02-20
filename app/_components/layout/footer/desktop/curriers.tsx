import { CURRIERS_DATA } from '@/app/_lib/static-data/curriers';
import Image, { ImageProps } from 'next/image';

const Curriers = () => {
  return (
    <div className='grid gap-3'>
      <h3 className='text-base font-bold'>Currier Services</h3>
      <div className='flex flex-wrap gap-3'>
        {CURRIERS_DATA.map((currier) => (
          <CurrierItem key={currier.label} src={currier.logo} alt={currier.label} />
        ))}
      </div>
    </div>
  );
};

const CurrierItem = (props: ImageProps) => {
  return (
    <div className='flex h-9 w-14 items-center justify-center rounded-lg p-3 shadow md:h-12 md:w-20'>
      <Image src={props.src} alt={props.alt} />
    </div>
  );
};

export default Curriers;
