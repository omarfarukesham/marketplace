const Newsletter = () => {
  return (
    <section className='-mx-2.5 flex flex-col items-center justify-between gap-5 bg-primary-900 px-3 pb-8 pt-5 text-white md:-mx-10 md:flex-row md:gap-20 md:px-14 md:py-16'>
      <div className='grid gap-6 text-center md:text-left'>
        <h1 className='whitespace-nowrap text-xl font-bold md:text-4xl'>Subscribe to Newsletter</h1>
        <p className='text-label md:text-lg'>Get updates about new arrivals, offers and invites!</p>
      </div>
      <div className='flex w-full justify-center gap-3 md:gap-5'>
        <input
          type='email'
          name='email'
          id='email'
          placeholder='Enter your email'
          className='h-9 w-56 grow rounded-md px-4 py-2.5 text-label text-black placeholder:text-gray-900 md:h-auto md:w-auto md:px-6 md:py-5 md:text-base'
        />
        <button className='h-9 rounded-md bg-secondary-900 px-5 text-label text-black md:h-auto md:px-12 md:py-5 md:text-lg'>
          Subscribe
        </button>
      </div>
    </section>
  );
};

export default Newsletter;
