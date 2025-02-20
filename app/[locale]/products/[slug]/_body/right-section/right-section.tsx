import { ProductType } from '@/app/_types/product.type';
import { Suspense } from 'react';
import BuyMore from './buy-more/buy-more';
import ProductHeading from './product-heading';
import ShippingInformation from './shipping-information/shipping-information';
import ShoppingSecurity from './shipping-information/shopping-security';
import VariantsNActions from './variants-and-actions';

type RightSectionType = {
  product: ProductType;
};

const RightSection = ({ product }: RightSectionType) => {
  return (
    <div>
      <div className='xl:mb-24 xl:mr-14 3xl:mr-20'>
        <ProductHeading product={product} />

        <VariantsNActions product={product} isDesktop />

        <ShippingInformation product={product} />

        <ShoppingSecurity />
      </div>

      {/* <BuyTogether product={product} /> */}
      <Suspense>
        <BuyMore productId={product.id} />
      </Suspense>
    </div>
  );
};

export default RightSection;
