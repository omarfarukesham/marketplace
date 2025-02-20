'use client';

import AccordionV2 from '@/app/_components/ui/accordion-v2';

const SellerFAQ = () => {
  return (
    <section className='px-3 md:px-10 lg:px-20 xl:px-32 2xl:px-80'>
      <h2 className='mb-5 text-center font-bold md:text-2xl xl:mb-10 xl:text-4xl'>Frequently Asked Questions</h2>
      <div>
        <AccordionV2
          title=' What categories am I allowed to sell on Alipo?'
          answer='You can sell in various categories.'
          serial='01'
        />
        <AccordionV2
          title='What is the Alipo Commission?'
          answer='The Alipo Commission ranges from 10% to 20%.'
          serial='02'
        />
        <AccordionV2
          title='What documents do I need to provide during signup?'
          answer='You"ll need to provide your TIN Certificate, BIN/VAT Certificate, Trade License, and RJSC/MOA (if available.)'
          serial='03'
        />
        <AccordionV2
          title='What if incorrect information is submitted during signup?'
          answer='⁠Incorrect information during signup can be corrected later.'
          serial='04'
        />
        <AccordionV2
          title=' How long will it take to sell my item?'
          answer='Selling time depends on market demand and your pricing strategy.'
          serial='05'
        />
        <AccordionV2
          title='How do I handle shipping?'
          answer='We handle shipping through our delivery partners at present.'
          serial='06'
        />
        <AccordionV2
          title='What happens if a customer/buyer wants to return the item?'
          answer='⁠Refunds follow specific criteria; merchants must meet them for customers to avail.'
          serial='07'
        />
        <AccordionV2
          title='How should I respond to buyer inquiries?'
          answer='You&quote;ll have the option to respond to buyer inquiries.'
          serial='07'
        />
        <AccordionV2
          title='Who will upload my products on the Alipo marketplace?'
          answer='You upload your products, but we offer assistance if needed.'
          serial='07'
        />
      </div>
    </section>
  );
};

export default SellerFAQ;
