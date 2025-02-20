import STORE_BANNER_PLACEHOLDER from '@/app/_assets/store-default-banner-blue.jpg';
import { StoreType } from '@/app/_types/store.type';
import Image from 'next/image';
import StoreHeaderActions from './store-header-actions';

function StoreHeader({ store }: { store: StoreType }) {
  return (
    <div className='relative flex w-full items-end justify-between p-3 md:aspect-[192/27] md:p-12'>
      <div className='absolute left-0 top-0 z-0 h-full w-full'>
        <Image
          src={store.bannerImage?.url || STORE_BANNER_PLACEHOLDER}
          alt={store.bannerImage?.altText}
          fill
          quality={100}
          className='h-full w-full object-cover'
        />
      </div>
      <div className='relative z-1 flex items-center gap-3'>
        <Image
          src={store.logo?.url}
          alt={store.logo?.altText}
          height={100}
          width={100}
          className='h-10 w-10 rounded-full md:h-24 md:w-24'
        />
        <div>
          <h1 className='rounded bg-white px-2 pb-1 text-base font-bold md:text-3xl'>{store.storeDisplayName}</h1>
          {/* <div className='flex items-center gap-2 text-sm text-white md:text-base'>
            <Users className='fill-white' /> <span className='font-bold'>{375}</span> Followers
          </div>
          <div className='flex items-center gap-2 leading-0 text-white'>
            <Rating rating={4.5} itemClassName='fill-white' className='-translate-y-0.5' /> (4.5)
          </div> */}
        </div>
      </div>
      <StoreHeaderActions />
    </div>
  );
}

export default StoreHeader;
