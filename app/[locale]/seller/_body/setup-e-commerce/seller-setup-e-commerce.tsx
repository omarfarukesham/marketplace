import sellerSetupSteps from './seller-setup-steps';

const SellerSetupECommerce = () => {
  return (
    <section className='grid gap-5 px-3 md:gap-10 md:px-10 xl:px-44'>
      <h2 className='text-center font-bold md:mb-5 md:text-2xl xl:mb-10 xl:text-4xl'>
        Set up your e-commerce store <br /> with 5 simple steps and start selling
      </h2>
      <div className='grid gap-5 md:grid-cols-3 md:gap-10 lg:grid-cols-3 xl:grid-cols-5'>
        {sellerSetupSteps.map((step, key) => (
          <div key={key} className='flex flex-col gap-2 md:gap-5'>
            <div className='text-secondary-900'>
              <step.icon />
            </div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SellerSetupECommerce;
