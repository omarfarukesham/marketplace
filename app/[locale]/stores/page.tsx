import { ROUTES } from '@/app/_config/routes';
import storeService from '@/app/_services/store/store.service';
import Image from 'next/image';
import Link from 'next/link';

const Stores = async () => {
  const { data } = await storeService.getAll({});

  return (
    <main className='mx-3 my-6 md:mx-10'>
      <h1 className='mb-3'>All Stores</h1>
      <div className='grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 xl:gap-5'>
        {data?.items?.map((store) => (
          <Link
            key={store.id}
            href={ROUTES.store(store.slug)}
            className='flex flex-col items-center justify-center gap-3 rounded p-5 shadow-sm'
          >
            <Image
              src={store.logo?.url}
              alt={store.logo?.altText || store.storeDisplayName}
              height={80}
              width={80}
              className='h-20 w-20 rounded-full'
            />
            <div>
              <h2 className='text-center'>{store.storeDisplayName}</h2>
              <p className='line-clamp-3 text-center'>{store.description}</p>
            </div>
            <button className='mt-auto rounded bg-secondary-900 px-3 py-1'>Visit Now</button>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Stores;
