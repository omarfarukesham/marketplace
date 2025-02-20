import STATIC_PAGE_BG from '@/app/_assets/bg-static-page.jpg';
import Box from '@/icons/box';
import PriceTag from '@/icons/price-tag';
import ShildCheck from '@/icons/shild-check';
import TickCircle from '@/icons/tick-circle';
import Truck from '@/icons/truck';
import Image from 'next/image';

function AboutUs() {
  return (
    // <main className='mx-2.5 md:mx-10 mb-16 grid gap-10 bg-success'>
    <main className='relative border-t-[1px] border-secondary-500 bg-[#fffaee] bg-cover bg-center bg-no-repeat pb-10'>
      <div className='absolute left-0 top-0 h-[180px] w-[100%] md:h-[220px] lg:h-[610px] lg:w-full'>
        <Image src={STATIC_PAGE_BG} alt='About Us' fill quality={100} className='h-full w-full object-cover' />
      </div>
      <div className='relative z-1'>
        <h1 className='pt-10 text-center text-3xl font-extrabold uppercase text-black'>About Us</h1>
        <div className='grid justify-center pb-10 pt-5'>
          <p className='max-w-5xl px-2 text-center text-black'>
            Alipo believes in fostering a culture of trust, inclusion, and support. This empowers our team to be
            creative, recognized, and bring their best selves to build the future of e-commerce.
          </p>
        </div>
        <div className='mx-4 grid gap-4 rounded bg-white p-3 sm:mx-8 md:mx-8 md:p-4 lg:mx-40 lg:p-12'>
          <div className='mx-auto mb-4'>
            <h2 className='mb-2 pt-2 text-2xl font-bold md:pt-0'>What is Alipo?</h2>
            <div className='mx-auto h-1 w-16 bg-secondary-900'></div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 md:gap-5'>
            <p className='mb-5 md:mb-0'>
              Alipo is the largest one-stop shopping destination in Bangladesh. Launched in 2024, the online store
              offers the widest range of products in categories. On Alipo, seller dashboard is easy for order
              management, competitive pricing tools for strategic advantage, marketing and promotion support to reach
              your target audience, secure payment processing for peace of mind. So stay with Alipo.com
            </p>
            <p>
              Alipo believes in &quot;Delivering Happiness&quot; with an excellent customer experience thus providing
              the most efficient delivery service through best logistic services so that customers get a hassle-free
              product delivery at their doorstep. We help our local and international vendors serving thousands of
              consumers from all over Bangladesh. We also offer various payment methods including Cash on delivery,
              Online Payments etc.
            </p>
          </div>
        </div>

        <div className='mx-4 mt-10 grid gap-4 rounded bg-white p-3 sm:mx-8 md:mx-8 md:p-4 lg:mx-40 lg:p-12'>
          <div className='mx-auto mb-4'>
            <h2 className='mb-2 pt-2 text-2xl font-bold md:pt-0'>Our Values</h2>
            <div className='mx-auto h-1 w-16 bg-secondary-900'></div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-4 md:gap-5'>
            <div>
              <h3 className='mb-2 flex items-center gap-2 text-xl font-bold'>
                <TickCircle className='fill-secondary-900' />
                Continuously Innovate
              </h3>
              <p className='mb-5 md:mb-0'>
                Alipo is an e-commerce company that connects consumers with millions of merchandise partners,
                manufacturers and brands with the mission to empower them to live their best lives.
              </p>
            </div>
            <div>
              <h3 className='mb-2 flex items-center gap-2 text-xl font-bold'>
                <TickCircle className='fill-secondary-900' />
                Make it Personal
              </h3>
              <p className='mb-5 md:mb-0'>
                At Alipo, we understand that everyone has unique needs. That&apos;s why we strive to personalize your
                shopping journey. Whether it&apos;s through curated product recommendations or tailored deals, we want
                to connect you with the technology that perfectly complements your lifestyle.
              </p>
            </div>
            <div>
              <h3 className='mb-2 flex items-center gap-2 text-xl font-bold'>
                <TickCircle className='fill-secondary-900' />
                Generosity of Spirit
              </h3>
              <p className='mb-5 md:mb-0'>
                We believe in building a community around technology, not just selling products. Alipo is committed to
                giving back. We actively support initiatives that promote digital literacy and bridge the technological
                divide. By investing in the future, we hope to empower everyone to experience the transformative power
                of technology.
              </p>
            </div>
            <div>
              <h3 className='mb-2 flex items-center gap-2 text-xl font-bold'>
                <TickCircle className='fill-secondary-900' />
                Deliver on Our Promise
              </h3>
              <p className='mb-5 md:mb-0'>
                Trust is paramount at Alipo. We&apos;re committed to delivering on our promises, from offering
                competitive prices and a wide range of products to ensuring a smooth and secure shopping experience. Our
                customer service team is dedicated to resolving any concerns you may have promptly and professionally.
              </p>
            </div>
          </div>
        </div>

        <div className='mx-4 mt-10 grid gap-4 rounded bg-white p-3 sm:mx-8 md:mx-8 md:p-4 lg:mx-40 lg:p-12'>
          <div className='mx-auto mb-4'>
            <h2 className='mb-2 pt-2 text-2xl font-bold md:pt-0'>Our Promise</h2>
            <div className='mx-auto h-1 w-16 bg-secondary-900'></div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 md:gap-5'>
            <div>
              <h3 className='mb-2 flex items-center gap-2 text-xl font-bold'>
                <span className='rounded-full bg-secondary-100 p-2'>
                  <Box className='fill-secondary-900' />
                </span>
                Biggest Variety
              </h3>
              <p className='mb-5 md:mb-0'>
                We hope that you will enjoy the affordable, quality products we offer on our website from millions of
                merchandise partners, manufacturers and brands.
              </p>
            </div>
            <div>
              <h3 className='mb-2 flex items-center gap-2 text-xl font-bold'>
                <span className='rounded-full bg-secondary-100 p-2'>
                  <PriceTag className='fill-secondary-900' />
                </span>
                Best Prices
              </h3>
              <p className='mb-5 md:mb-0'>
                We provide great value by offering competitive prices on all our products. Alipo is committed to
                offering the most affordable quality products.
              </p>
            </div>
            <div>
              <h3 className='mb-2 flex items-center gap-2 text-xl font-bold'>
                <span className='rounded-full bg-secondary-100 p-2'>
                  <Truck className='fill-secondary-900' />
                </span>
                Fast Delivery
              </h3>
              <p className='mb-5 md:mb-0'>
                We aim to please our customers with fast delivery and an easy tracking system. Easily track your
                courier, Get delivery with our express delivery. Efficient & safe delivery.
              </p>
            </div>
            <div>
              <h3 className='mb-2 flex items-center gap-2 text-xl font-bold'>
                <span className='rounded-full bg-secondary-100 p-2'>
                  <ShildCheck className='fill-secondary-900' />
                </span>
                100% Protected
              </h3>
              <p className='mb-5 md:mb-0'>
                Alipo is committed to protecting your payment information. We use strong encryption, and perform regular
                reviews of its system to protect your privacy.
              </p>
            </div>
          </div>
        </div>

        <div className='mx-4 mt-10 grid gap-4 rounded bg-white p-3 sm:mx-8 md:mx-8 md:p-4 lg:mx-40 lg:p-12'>
          <div className='mx-auto mb-4'>
            <h2 className='mb-2 pt-2 text-2xl font-bold md:pt-0'>Empowering Sellers on Alipo</h2>
            <div className='mx-auto h-1 w-16 bg-secondary-900'></div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 md:gap-5'>
            <p className='mb-5 md:mb-0'>
              Alipo isn&apos;t just another e-commerce platform; it&apos;s your gateway to a world of opportunity. We
              connect you, the consumer, with millions of sellers, manufacturers, and brands. Our mission? To empower
              you to chase your dreams by providing the most affordable, high-quality products you need. At Alipo,
              everyone is welcome. We foster an inclusive environment where both consumers and sellers can thrive.
            </p>
            <p>
              We empower sellers to thrive alongside our buyers. We go beyond just a platform, offering a suite of tools
              designed for your success. This includes a simplified seller dashboard for easy order management,
              competitive pricing tools for strategic advantage, marketing and promotion support to reach your target
              audience, secure payment processing for peace of mind.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AboutUs;
