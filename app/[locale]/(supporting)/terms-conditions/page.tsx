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
        <h1 className='pt-10 text-center text-3xl font-extrabold uppercase text-black'>Terms & Conditions</h1>
        <div className='grid justify-center pb-10 pt-5'>
          <p className='max-w-6xl px-2 text-center text-black'>
            Welcome to Alipo.com also hereby known as &quot;we&quot;, &quot;us&quot; or &quot;Alipo&quot;. We are an
            online marketplace and these are the terms and conditions governing your access and use of Alipo along with
            its related sub-domains, sites, mobile app, services and tools (the &quot;Site&quot;).
          </p>
        </div>
        <div className='mx-0 grid gap-4 rounded bg-white p-3 sm:mx-8 md:mx-8 md:p-4 lg:mx-40 lg:p-8'>
          <p>
            By using the Site, you hereby accept these terms and conditions (including the linked information herein)
            and represent that you agree to comply with these terms and conditions (the &quot;User Agreement&quot;).
            This User Agreement is deemed effective upon your use of the Site which signifies your acceptance of these
            terms. If you do not agree to be bound by this User Agreement please do not access, register with or use
            this Site.
          </p>
          <p>
            This Site is owned and operated by Alipo.com, a company incorporated under the Companies Act, 1994,
            (Registration Number:..............).
          </p>
          <p>
            The Site reserves the right to change, modify, add, or remove portions of these Terms and Conditions at any
            time without any prior notification. Changes will be effective when posted on the Site with no other notice
            provided. Please check these Terms and Conditions regularly for updates. Your continued use of the Site
            following the posting of changes to Terms and Conditions of use constitutes your acceptance of those
            changes.
          </p>

          <h3 className='pt-3 font-bold text-black'>Terms of Use</h3>
          <p>You must be at least 15 years old to use the Site.</p>
          <p className='pt-3'>
            You are responsible for maintaining the confidentiality of your account and password and for restricting
            access to your computer. You agree to accept responsibility for all activities that occur under your account
            or password.
          </p>
          <p>
            Alipo reserves the right to refuse service, terminate accounts, and remove or edit content in its sole
            discretion.
          </p>

          <h3 className='pt-2 font-bold text-black'>Information Accuracy</h3>
          <p>
            We strive to ensure the accuracy of the information on the Site, including product descriptions and pricing.
            However, we do not guarantee that such information is always accurate, complete, reliable, current, or
            error-free.
          </p>

          <h3 className='pt-2 font-bold text-black'>Terms of Sale</h3>
          <p>
            By placing an order on Alipo.com, you are offering to purchase a product or service subject to the following
            terms and conditions.
          </p>
          <p>All orders are subject to availability and confirmation of the order price.</p>
          <p>Shipping costs will be added to the total amount due as displayed at checkout.</p>
          <p>We reserve the right to refuse any order for any reason.</p>

          <h3 className='pt-2 font-bold text-black'>Payment Terms</h3>
          <p>Payment can be made by credit card, debit card or other approved payment methods.</p>
          <p>Payment will be processed at the time you place your order.</p>

          <h3 className='pt-2 font-bold text-black'>Shipping & Delivery</h3>
          <p>
            We will use reasonable efforts to deliver your order within the estimated timeframe provided at checkout.
            However, delays may occur which are beyond our control.
          </p>
          <p>Title and risk of loss for your ordered items pass to you upon our delivery to the carrier.</p>

          <h3 className='pt-2 font-bold text-black'>Intellectual Property</h3>
          <p>
            The content of the Site, including text, graphics, logos, images, and software, is the property of Alipo or
            its licensors and is protected by copyright, trademark, and other intellectual property laws.
          </p>

          <h3 className='pt-2 font-bold text-black'>Disclaimer of Liability</h3>
          <p>
            Alipo is not liable for any damages arising out of your use of the Site or the products or services offered
            on the Site.
          </p>
          <p>
            To the fullest extent permissible by applicable law, we disclaim all warranties, express or implied,
            including, but not limited to, implied warranties of merchantability and fitness for a particular purpose.
          </p>

          <h3 className='pt-2 font-bold text-black'>Dispute Resolution</h3>
          <p>These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction].</p>
          <p>You agree to submit any dispute arising out of or relating to these Terms.</p>

          <h3 className='pt-2 font-bold text-black'>Changes to Terms</h3>
          <p>We reserve the right to modify these Terms at any time.</p>
          <p>
            You are responsible for regularly reviewing the Terms. Your continued use of the Site following the posting
            of changes to the Terms constitutes your acceptance of those changes.
          </p>
        </div>
      </div>
    </main>
  );
}

export default TermsConditions;
