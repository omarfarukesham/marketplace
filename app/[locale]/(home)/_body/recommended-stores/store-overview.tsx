import { ROUTES } from '@/app/_config/routes';
import { StoreType } from '@/app/_types/store.type';
import Image from 'next/image';
import Link from 'next/link';

const StoreOverview = ({ store }: { store: StoreType }) => {
  const { logo, storeName, slug } = store;

  // const TEMP_RATING = 4.5;
  // const TEMP_TOTAL_SOLD = 100;

  return (
    <div className='grid h-full min-h-[16.7rem] content-between'>
      <div className='grid gap-2.5'>
        <Link href={ROUTES.store(slug)} className='flex h-24 w-24 rounded-full bg-gray-100 p-3'>
          <span className='relative h-full w-full'>
            <Image
              src={logo?.url || ''}
              alt={logo?.altText || ''}
              fill
              sizes='(max-width: 768px) 100vw'
              // loading='eager'
              className='rounded-full transition-transform hover:scale-105'
            />
          </span>
        </Link>

        <div className='grid gap-2 text-label'>
          <h2 className='text-base font-bold'>{storeName}</h2>
          {/* <div className='flex items-center gap-1.5'>
            <Rating rating={TEMP_RATING} />({TEMP_RATING})
          </div>
          <span>{TEMP_TOTAL_SOLD}K+ Sold</span> */}
        </div>
      </div>
      <Link
        href={ROUTES.store(slug)}
        className='w-fit whitespace-nowrap rounded-md bg-secondary-900 px-5 py-2 hover:bg-primary-900 hover:text-white'
      >
        Visit Now
      </Link>
    </div>
  );
};

export default StoreOverview;
