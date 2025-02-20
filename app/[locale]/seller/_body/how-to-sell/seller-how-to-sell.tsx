import HOW_TO_SELL from '@/app/_assets/seller/seller-how-to-sell.jpg';
import ArrowRightSlim from '@/icons/arrows/arrow-right-slim';
import Image from 'next/image';
import Link from 'next/link';

const SellerHowToSell = () => {
  return (
    <section className='mx-3 grid overflow-hidden rounded-[16px] md:mx-10 md:flex xl:mx-44'>
      <Image src={HOW_TO_SELL} className='aspect-auto w-full md:w-[400px] xl:w-[600px]' alt='How to sell' />

      <div className='flex flex-col gap-5 bg-gray-200 p-6 md:p-8 xl:p-10'>
        <h2 className='text-3xl'>How to sell with Alipo</h2>
        <p className='flex-1'>
          Out newly revised beginner&rsquo;s guide provides an overview of how to create a selling account, list
          products, fulfill customer order, and more. Learn how to success with Alipo - whether you&rsquo;re new to
          online retail or just new to the Alipo store.
        </p>
        <Link
          href='https://forms.gle/AGCny4PqbRezUrTV8'
          target='_blank'
          className='mt-5 flex items-center gap-3 transition-all hover:gap-5 hover:text-secondary-900'
        >
          Apply Now <ArrowRightSlim />{' '}
        </Link>
      </div>
    </section>
  );
};

export default SellerHowToSell;
