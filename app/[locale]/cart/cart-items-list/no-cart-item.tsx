import CartEmpty from '@/icons/product/cart-empty';
import Link from 'next/link';

const NoCartItem = () => {
  return (
    <div className='mt-16 flex flex-col items-center'>
      <div className='flex h-32 w-32 items-center justify-center rounded-full shadow-lg'>
        <CartEmpty className='-translate-x-1.5 translate-y-1' />
      </div>
      <h1 className='mb-7 mt-10 text-3xl font-bold'>Your shopping cart is empty !</h1>
      <p>Add your favorite items in it.</p>
      <Link
        href='/'
        className='mx-auto mt-5 w-fit rounded-full border bg-secondary-900 px-16 py-3 text-base font-bold transition-all hover:bg-primary-900 hover:text-white'
      >
        See Trending Items
      </Link>
    </div>
  );
};

export default NoCartItem;
