import STATIC_PAGE_BG from '@/app/_assets/bg-static-page.jpg';
import Image from 'next/image';

function TermsConditions() {
  return (
    // <main className='mx-2.5 md:mx-10 mb-16 grid gap-10 bg-success'>
    <main className='relative border-t-[1px] border-secondary-500 bg-[#fffaee] bg-cover bg-center bg-no-repeat pb-10'>
      <div className='absolute left-0 top-0 h-[180px] w-[100%] md:h-[220px] lg:h-[610px] lg:w-full'>
        <Image
          src={STATIC_PAGE_BG}
          alt='Terms and Conditions'
          fill
          quality={100}
          className='h-full w-full object-cover'
        />
      </div>
      <div className='relative z-1'>
        <h1 className='pt-10 text-center text-3xl font-extrabold uppercase text-black'>Start Selling with Alipo</h1>
        <div className='grid justify-center pb-10 pt-5'>
          <p className='max-w-6xl px-2 text-center text-black'>
            Alipo is Bangladesh&apos;s leading e-commerce platform, connecting you with a nation of eager online
            shoppers. As a seller, Alipo empowers you to showcase your products to a vast and diverse audience, reaching
            every corner of the country. Our user-friendly platform streamlines the selling process, allowing you to
            focus on what you do best – creating and delivering high-quality products.
          </p>
        </div>
        <div className='mx-0 grid gap-4 rounded bg-white p-3 sm:mx-8 md:mx-8 md:p-4 lg:mx-40 lg:p-8'>
          {/* <p>These Terms form a binding agreement between you and us. By completing the registration process and/or browsing the Services, you represent that (1) you have read, understand and agree to be bound by the Terms; (2) you are of legal age to form a binding contract with us; (3) you have the authority to enter into the Terms personally; and (4) if you are using the Services on behalf of a company or other entity, (a) you agree that “you” includes you and that entity, (b) you are an authorized representative of the entity with the authority to bind the entity to these Terms, and (c) you agree to these Terms on the entity’s behalf. You should not access or use the Services unless you agree to be bound by all of these Terms.</p> */}
          <h3 className='pt-3 font-bold text-black'>Why Sell on Alipo?</h3>
          <div className='pt-3'>
            Selling on Alipo offers numerous benefits for businesses and individuals looking to reach a wide audience
            and grow their sales.
            <br />
            <br />
            <div className='ml-5'>
              <ul className='grid list-outside list-disc gap-3'>
                <li>
                  <strong>Reach a Massive Audience</strong>: E-commerce platforms like Alipo have a huge built-in
                  customer base. Millions of people visit these sites every day to shop for a wide variety of products.
                  By listing your products on a reputable e-commerce platform, you can instantly expose your brand and
                  products to a vast audience that you could never reach on your own.
                </li>
                <li>
                  <strong>Free Registration</strong>: Alipo offers completely free seller registration, allowing you to
                  set up your online store anytime, anywhere with no hidden fees. Join our growing marketplace and start
                  reaching new customers today, opening new doors to a range of benefits.
                </li>
                <li>
                  <strong>Increased Sales</strong>: The easy accessibility of your products to a large audience
                  translates to increased sales and revenue. Reputable e-commerce like Alipo platforms are trusted by
                  shoppers, so there&apos;s a higher chance of people converting into buyers when they see your products
                  listed there.
                </li>
                <li>
                  <strong>Support & Training</strong>: We offer comprehensive support and training services to empower
                  our sellers, so that they can manage their store from their ends.
                </li>
                <li>
                  <strong>On-time Payment</strong>: We understand the importance of a reliable and effective payment
                  process.
                </li>
                <li>
                  <strong>Low Startup Costs</strong>: Opening an online store can be expensive, but listing your
                  products on a marketplace eliminates the need for a website, marketing, and other startup costs.
                </li>
                <li>
                  <strong>Fast and Easy Setup</strong>: Reputable e-commerce like Alipo platforms have streamlined
                  processes for listing products and getting started. You can be up and running quickly and start
                  selling almost immediately.
                </li>
                <li>
                  <strong>Reduced Fulfillment Hassles</strong>: Many e-commerce platforms offer fulfillment services,
                  where they take care of storing, packaging, and shipping your products to customers. This frees you up
                  to focus on other aspects of your business, such as product development and marketing.
                </li>
                <li>
                  <strong>Build Brand Credibility</strong>: Being listed on Alipo e-commerce platform can add
                  credibility to your brand. Customers are more likely to trust and buy from a brand they see on a
                  reputable platform.
                </li>
                <li>
                  <strong>Scalability</strong>: Alipo allows you to easily scale your business up or down as needed. You
                  can add or remove products, adjust your pricing, and run promotions to meet the demands of your
                  growing business.
                </li>
                <li>
                  <strong>Global Reach</strong>: In Future, Alipo e-commerce platforms allow you to sell your products
                  to customers all over the world. This opens up a whole new market for your business.
                </li>
              </ul>
            </div>
          </div>

          <h3 className='pb-1 pt-5 font-bold text-black'>Requirements to become a seller:</h3>
          <div className='ml-5'>
            <ol className='grid list-outside list-decimal gap-3'>
              <li>Photocopy of National Identification Card (NID)</li>
              <li>Scan copy of Trade License.</li>
              <li>Scan copy of Tax Identification Number (TIN)</li>
              <li>Scan copy of Business Identification Number (BIN)</li>
              <li>Passport size photography.</li>
              <li>Blank Cheque Scanned Copy</li>
              <li>Bank Account Details</li>
              {/* <li>Passport-size photograph. &#x28;3 copies&#x29;.</li> */}
            </ol>
          </div>
          <p>
            <strong>Note</strong>: Seller bank account’s name and cheque’s name should be the same.
          </p>

          <h3 className='pb-2 pt-5 font-bold text-black'>How to sell with Alipo?</h3>
          <p>
            Selling on a reputed e-commerce site like Alipo, is a marathon, not a sprint. By consistently providing
            high-quality products, exceptional customer service, and optimizing product lists, sellers can build a loyal
            customer base and achieve long-term success.
          </p>

          <h3 className='pb-2 pt-5 font-bold text-black'>Contact with us:</h3>
          <p className='text-highlight'>
            <strong>Phone:</strong> <a href='tel:+8801781 928 043'>+8801781 928 043</a>,{' '}
            <a href='tel:+8801550 705 102'>+8801550 705 102</a>
          </p>
          <p className='text-highlight'>
            <strong>Email:</strong> <a href='mailto:seller@alipo.com'>seller@alipo.com</a>
          </p>
        </div>
      </div>
    </main>
  );
}

export default TermsConditions;
