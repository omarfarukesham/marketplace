import SellerFAQ from './_body/faq/faq';
import SellerHero from './_body/hero/seller-hero';
import SellerHowToSell from './_body/how-to-sell/seller-how-to-sell';
import SellerSetupECommerce from './_body/setup-e-commerce/seller-setup-e-commerce';
import WhySellOnAlipo from './_body/why-sell-on-alipo/why-sell-on-alipo';

const Seller = () => {
  return (
    <main className='grid gap-10 pb-10 md:gap-20 md:pb-20'>
      <SellerHero />
      <WhySellOnAlipo />
      <SellerHowToSell />
      <SellerSetupECommerce />
      <SellerFAQ />
    </main>
  );
};

export default Seller;
