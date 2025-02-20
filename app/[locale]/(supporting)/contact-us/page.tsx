'use client';
import STATIC_PAGE_BG from '@/app/_assets/bg-static-page.jpg';
import Form from '@/app/_components/ui/form/form';
import FormInput from '@/app/_components/ui/form/form-input';
import GTM_EVENTS from '@/app/_lib/gtm/events';
import { DataLayerOnLoad } from '@/app/_lib/gtm/send-data';
import SocialLgFacebook from '@/icons/social/social-lg-facebook';
import SocialLgInstagram from '@/icons/social/social-lg-instagram';
import SocialLgLinkedin from '@/icons/social/social-lg-linkedin';
import SocialLgYoutube from '@/icons/social/social-lg-youtube';
import Image from 'next/image';
import { SubmitHandler } from 'react-hook-form';
import Faq from './faq';

function ContactUs() {
  const handleQuestionSubmit: SubmitHandler<{ firstName: string }> = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };
  return (
    <main className='relative border-t-[1px] border-secondary-500 bg-[#fffaee] bg-cover bg-center bg-no-repeat pb-10'>
      <DataLayerOnLoad eventName={GTM_EVENTS.VIEW_CONTACT} />
      <div className='absolute left-0 top-0 h-[180px] w-[100%] md:h-[220px] lg:h-[610px] lg:w-full'>
        <Image src={STATIC_PAGE_BG} alt='Contact Us' fill quality={100} className='h-full w-full object-cover' />
      </div>
      <div className='relative z-1'>
        <h1 className='pt-10 text-center text-3xl font-extrabold uppercase text-black'>Contact Us</h1>
        <div className='grid justify-center pb-10 pt-5'>
          <p className='max-w-5xl px-2 text-center text-black'>
            Looking for technical support and/or financial help? Check out our FAQ and get help. If you need other
            information, please fill out the quick form and we&apos;ll get back to you shortly.
          </p>
        </div>

        <div className='mx-4 grid grid-cols-1 sm:mx-8 md:mx-8 md:grid-cols-2 md:gap-8 lg:mx-20 xl:mx-40'>
          <div className='rounded bg-white p-3 md:p-4 lg:p-12'>
            <h2 className='mb-2 pt-2 text-2xl font-bold md:pt-0'>
              For Specific Questions
              <br />
              We have got some answers...
            </h2>
            <div className='mt-10'>
              <Faq />
            </div>
            <div className='mt-10 flex justify-center'>
              <button className='rounded-full border border-black px-24 py-4 hover:border-white hover:bg-primary-900 hover:text-white'>
                View More
              </button>
            </div>
          </div>
          <div className='mt-6 rounded bg-white p-3 md:mt-0 md:p-4 lg:p-12'>
            <h2 className='mb-2 pt-2 text-2xl font-bold md:pt-0'>
              Got a Question?
              <br />
              Let us know how we can help...
            </h2>
            <Form onSubmit={handleQuestionSubmit}>
              <div className='mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2'>
                <FormInput name='firstName' label='First Name' />
                <FormInput name='lastName' label='Last Name' />
              </div>
              <div className='mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2'>
                <FormInput name='email' label='Email' />
                <FormInput name='phoneNumber' label='Phone Number' />
              </div>
              <div className='mt-10 grid grid-cols-1'>
                <FormInput name='company' label='Company' />
              </div>
              <div className='mt-10 grid grid-cols-1'>
                <FormInput name='jobFunction' label='Job Function' />
              </div>
              <div className='mt-10 grid grid-cols-1'>
                <FormInput name='message' label='How can we help?' />
              </div>
              <div className='mt-10 flex justify-center'>
                <button className='rounded-full bg-secondary-900 px-28 py-4 hover:bg-primary-900 hover:text-white'>
                  Submit
                </button>
              </div>
            </Form>
          </div>
        </div>

        <div className='mx-4 mt-6 grid rounded bg-white px-3 py-3 sm:mx-8 md:mx-8 md:mt-10 md:px-4 md:py-8 lg:mx-20 lg:p-12 xl:mx-40'>
          <div className='mx-auto mb-4'>
            <h2 className='mb-2 pt-2 text-2xl font-bold md:pt-0'>We are available on social media</h2>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 md:gap-8 lg:grid-cols-2 xl:grid-cols-4'>
            <a href='https://www.instagram.com/alipo.com.bd/' rel='noreferrer' target='_blank'>
              <div className='hover:shadow-md mx-auto mt-6 flex max-w-sm items-center space-x-6 space-y-2 rounded-xl bg-white px-8 py-8 shadow-sm hover:scale-105 sm:flex sm:items-center sm:space-x-6 sm:space-y-0 sm:py-4 md:mt-2'>
                <SocialLgInstagram />
                <div className='space-y-2 text-center sm:text-left'>
                  <div className='space-y-0.5'>
                    <p className='text-lg font-bold text-black'>Alipo</p>
                    <p className='text-slate-500 font-medium text-gray-800'>@alipo.com.bd</p>
                  </div>
                </div>
              </div>
            </a>
            <a href='https://www.facebook.com/alipo.com.bd/' rel='noreferrer' target='_blank'>
              <div className='hover:shadow-md mx-auto mt-6 flex max-w-sm items-center space-x-6 space-y-2 rounded-xl bg-white px-8 py-8 shadow-sm hover:scale-105 sm:flex sm:items-center sm:space-x-6 sm:space-y-0 sm:py-4 md:mt-2'>
                <SocialLgFacebook />
                <div className='space-y-2 text-center sm:text-left'>
                  <div className='space-y-0.5'>
                    <p className='text-lg font-bold text-black'>Alipo</p>
                    <p className='text-slate-500 font-medium text-gray-800'>@alipo.com.bd</p>
                  </div>
                </div>
              </div>
            </a>
            <a href='https://www.linkedin.com/company/alipo/' rel='noreferrer' target='_blank'>
              <div className='hover:shadow-md mx-auto mt-6 flex max-w-sm items-center space-x-6 space-y-2 rounded-xl bg-white px-8 py-8 shadow-sm hover:scale-105 sm:flex sm:items-center sm:space-x-6 sm:space-y-0 sm:py-4 md:mt-2'>
                <SocialLgLinkedin />
                <div className='space-y-2 text-center sm:text-left'>
                  <div className='space-y-0.5'>
                    <p className='text-lg font-bold text-black'>Alipo</p>
                    <p className='text-slate-500 font-medium text-gray-800'>@alipocombd</p>
                  </div>
                </div>
              </div>
            </a>
            <a href='https://www.youtube.com/@alipolimited' rel='noreferrer' target='_blank'>
              <div className='hover:shadow-md mx-auto mt-6 flex max-w-sm items-center space-x-6 space-y-2 rounded-xl bg-white px-8 py-8 shadow-sm hover:scale-105 sm:flex sm:items-center sm:space-x-6 sm:space-y-0 sm:py-4 md:mt-2'>
                <SocialLgYoutube />
                <div className='space-y-2 text-center sm:text-left'>
                  <div className='space-y-0.5'>
                    <p className='text-lg font-bold text-black'>Alipo</p>
                    <p className='text-slate-500 font-medium text-gray-800'>@alipolimited</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className='mx-4 mt-6 grid grid-cols-1 sm:mx-8 md:mx-8 md:mt-10 md:grid-cols-2 md:gap-8 lg:mx-20 xl:mx-40'>
          <div className='rounded bg-white p-3 md:p-4 lg:p-12'>
            <h2 className='mb-2 pt-2 text-2xl font-bold md:pt-0'>Bangladesh Office</h2>
            <p className='mb-5 md:mb-0'>
              Plot-275/d, rangs nasim square, alpha commerz ltd. level 12, rd 27 (old), 1205.
            </p>
            <p className='mb-5 md:mb-0'>
              <strong>Phone</strong>: +8801550705102,{' '}
            </p>
            <p className='mb-5 md:mb-0'>
              <strong>Email</strong>: info@alphacommerz.com
            </p>
          </div>
          <div className='rounded bg-white p-3 md:p-4 lg:p-12'>
            <h2 className='mb-2 pt-2 text-2xl font-bold md:pt-0'>Sweden Office</h2>
            <p className='mb-5 md:mb-0'>Restoreit AB / Soldfy.se Box 12, 232 21 Arlöv, Sweden.</p>
            <p className='mb-5 md:mb-0'>
              <strong>Phone</strong>: +88-02-48811891
            </p>
            <p className='mb-5 md:mb-0'>
              <strong>Email</strong>: info@alphacommerz.com
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ContactUs;
