import HERO_BG from '@/app/_assets/seller/seller-hero-bg.jpg';
import HERO_IMG from '@/app/_assets/seller/seller-hero-img.png';
import { ROUTES } from '@/app/_config/routes';
import Image from 'next/image';
import Link from 'next/link';

const SellerHero = () => {
  return (
    <section className='relative px-5 py-5 pb-10 md:px-20 lg:py-32 xl:px-36 3xl:px-44'>
      <Image src={HERO_BG} alt='Hero Background Image' className='absolute left-0 top-0' fill />
      <div className='relative z-1 grid grid-cols-1 justify-items-end gap-10 lg:grid-cols-2'>
        <div className='order-2 flex h-full flex-col justify-around gap-5 place-self-center lg:order-1 lg:place-self-start'>
          <h1 className='text-3xl text-white md:text-5xl 3xl:text-6xl'>
            Scale up your Business. <br /> <span className='text-secondary-900'>Start Selling</span> with Alipo.
          </h1>
          <p className='text-lg text-white md:text-xl 3xl:text-2xl'>
            The fastest-growing online marketplace in Bangladesh. <br /> Create an Alipo seller account and reach
            millions of <br className='hidden lg:inline' /> customers today!
          </p>

          <div className='flex gap-5 lg:gap-10'>
            <Link
              href={ROUTES.sellerRegistration}
              className='grow rounded-full bg-secondary-900 py-3 text-center transition-colors hover:bg-primary-900 hover:text-white'
            >
              Apply Now
            </Link>
            <Link
              href='https://www.youtube.com/@alipolimited'
              className='grow rounded-full border border-white py-3 text-center text-white transition-colors hover:border-primary-900 hover:bg-primary-900'
            >
              Watch Video
            </Link>
          </div>
        </div>

        <div className='order-1 place-self-center lg:order-2'>
          <Image src={HERO_IMG} alt='Hero Image' height={600} width={500} />
        </div>
      </div>
    </section>
  );
};

export default SellerHero;
