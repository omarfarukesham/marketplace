import STATIC_PAGE_BG from '@/app/_assets/bg-static-page.jpg';
import Tab from '@/app/_components/ui/tab';
import Image from 'next/image';

function TermsConditions() {
  return (
    // <main className='mx-2.5 md:mx-10 mb-16 grid gap-10 bg-success'>
    <main className='relative border-t-[1px] border-secondary-500 bg-[#fffaee] bg-cover bg-center bg-no-repeat pb-10'>
      <div className='absolute left-0 top-0 h-[610px] w-full'>
        <Image
          src={STATIC_PAGE_BG}
          alt='Return and Refund Policy'
          fill
          quality={100}
          className='h-full w-full object-cover'
        />
      </div>
      <div className='relative z-1'>
        <h1 className='pt-10 text-center text-3xl font-extrabold uppercase text-black'>Hi, how can We help you?</h1>
        <div className='grid justify-center pb-10 pt-5'>
          <p className='max-w-5xl px-2 text-center text-black'>Thank you for using Alipo!</p>
        </div>
        <div className='mx-0 grid gap-4 rounded bg-white p-2 sm:mx-8 md:mx-8 lg:mx-40 lg:p-8'>
          <Tab items={items} />
        </div>
      </div>
    </main>
  );
}

export default TermsConditions;

const items = [
  {
    title: '1. Overview',
    content: (
      <div>
        <p>
          These Terms form a binding agreement between you and us. By completing the registration process and/or
          browsing the Services, you represent that (1) you have read, understand and agree to be bound by the Terms;
          (2) you are of legal age to form a binding contract with us; (3) you have the authority to enter into the
          Terms personally; and (4) if you are using the Services on behalf of a company or other entity, (a) you agree
          that “you” includes you and that entity, (b) you are an authorized representative of the entity with the
          authority to bind the entity to these Terms, and (c) you agree to these Terms on the entity’s behalf. You
          should not access or use the Services unless you agree to be bound by all of these Terms.
        </p>
        <h3 className='pb-2 pt-4 font-bold text-black'>1. Overview</h3>
        <p className='pt-3'>1.1 Your residence determines the party with which you enter these Terms:</p>
        <div className='ml-5'>
          <ul className='list-outside list-disc'>
            <li>
              If you reside in the United States, these Terms are between you and Whaleco Inc., a Delaware company.
            </li>
            <li>
              If you reside in the United Kingdom, these terms are between you and Whaleco UK Limited, a UK company.
            </li>
            <li>If you reside in Canada, you contract with Whaleco Canada Inc. and the applicable terms are here.</li>
            <li>
              If you reside anywhere other than the United States, Canada, or the United Kingdom, these Terms are
              between you and Whaleco Technology Limited, an Ireland company.
            </li>
          </ul>
        </div>
        <p className='pt-3'>
          1.2 Whaleco Inc., Whaleco UK Limited, and Whaleco Technology Limited, as applicable, are referred to in these
          Terms and Policies (as defined below) as we&quot; or &quot;us,&quot;. For purposes of these Terms and
          Policies, we also refer to: Our website and mobile apps, which may offer features, products, services or
          content, including exchanges of information, as &quot;Alipo&quot; or &quot;our app&quot;; End users, including
          visitors to Alipo and those who use Alipo to purchase products as &quot;you.&quot;
        </p>
        <p className='pt-3'>
          1.3 We and our affiliates provide technical and operational support for our app. You may pay for multiple
          orders in one transaction on Alipo. Multiple orders may be delivered together in one package.
        </p>
        <p className='pt-3'>
          1.4 Your use of, and participation in, certain Services are also subject to additional policies we may publish
          from time to time (&quot;Policies&quot;), including our Privacy Policy and our Cookie and Similar Technologies
          Policy. If the Terms are inconsistent with the Policies, the Policies shall control with respect to the
          relevant subject matter.
        </p>
      </div>
    ),
  },
  {
    title: '2. User Requirements and Registration',
    content: (
      <div>
        <h3 className='pb-2 font-bold text-black'>2. User Requirements and Registration</h3>
        <p>Content 02 paragraph goes here.</p>
      </div>
    ),
  },
  {
    title: '3. Rules and Restrictions',
    content: (
      <div>
        <h3 className='pb-2 font-bold text-black'>3. Rules and Restrictions</h3>
        <p>Content 03 paragraph goes here.</p>
      </div>
    ),
  },
  {
    title: '4. Privacy',
    content: (
      <div>
        <h3 className='pb-2 font-bold text-black'>4. Privacy</h3>
        <p>Content 04 paragraph goes here.</p>
      </div>
    ),
  },
  {
    title: '5. Communications',
    content: (
      <div>
        <h3 className='pb-2 font-bold text-black'>5. Communications</h3>
        <p>Content 05 paragraph goes here.</p>
      </div>
    ),
  },
  {
    title: '6. User Submissions',
    content: (
      <div>
        <h3 className='pb-2 font-bold text-black'>6. User Submissions</h3>
        <p>Content 05 paragraph goes here.</p>
      </div>
    ),
  },
  {
    title: '7. Ownership',
    content: (
      <div>
        <h3 className='pb-2 font-bold text-black'>7. Ownership</h3>
        <p>Content 05 paragraph goes here.</p>
      </div>
    ),
  },
  {
    title: '8. Responsibilities; Third Party Risks',
    content: (
      <div>
        <h3 className='pb-2 font-bold text-black'>8. Responsibilities; Third Party Risks</h3>
        <p>Content 05 paragraph goes here.</p>
      </div>
    ),
  },
  {
    title: '9. Release',
    content: (
      <div>
        <h3 className='pb-2 font-bold text-black'>9. Release</h3>
        <p>Content 05 paragraph goes here.</p>
      </div>
    ),
  },
];
