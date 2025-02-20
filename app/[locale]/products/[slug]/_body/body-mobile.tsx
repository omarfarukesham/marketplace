import { DOM_IDS } from '@/app/_config/dom-ids';
import GTM_EVENTS from '@/app/_lib/gtm/events';
import { DataLayerOnLoad } from '@/app/_lib/gtm/send-data';
import productService from '@/app/_services/product/product.service';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import RecommendedProducts from './bottom-section/recommended-products';
import RelatedProducts from './bottom-section/related-products';
import ProductDetails from './left-section/product-details/product-details';
import ProductImages from './left-section/product-images/product-images';
import BuyMore from './right-section/buy-more/buy-more';
import ProductHeading from './right-section/product-heading';
import ShippingInformation from './right-section/shipping-information/shipping-information';
import ShoppingSecurity from './right-section/shipping-information/shopping-security';
import VariantsNActions from './right-section/variants-and-actions';

type BodyType = {
  slug: string;
};

const BodyMobile = async ({ slug }: BodyType) => {
  const { data: product } = await productService.get({ slug });

  if (!product) return notFound();

  return (
    <main className='mx-3 mt-6 md:mx-10'>
      <DataLayerOnLoad eventName={GTM_EVENTS.VIEW_PRODUCT} data={product} />

      <section>
        <div className='mb-10'>
          <ProductImages product={product} isDesktop={false} />
          <ProductHeading product={product} />

          <VariantsNActions product={product} isDesktop={false} />

          <ShippingInformation product={product} />
          <ShoppingSecurity />
        </div>
        <Suspense>
          <BuyMore productId={product.id} />
        </Suspense>
        <Suspense>
          <ProductDetails product={product} />
        </Suspense>
      </section>

      <section className='mt-8 overflow-hidden md:mt-20' id={DOM_IDS.PRODUCT_RECOMMENDATION}>
        <Suspense>
          <RecommendedProducts productId={product.id} />
        </Suspense>
        <Suspense>
          <RelatedProducts productId={product.id} />
        </Suspense>
      </section>

      {/* <AddToCartMobile product={product} slug={slug} /> */}
    </main>
  );
};

export default BodyMobile;
