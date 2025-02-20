import Breadcrumb from '@/app/_components/ui/breadcrumb';
import { DOM_IDS } from '@/app/_config/dom-ids';
import { getProductPageBreadcrumb } from '@/app/_lib/breadcrumbs';
import GTM_EVENTS from '@/app/_lib/gtm/events';
import { DataLayerOnLoad } from '@/app/_lib/gtm/send-data';
import productService from '@/app/_services/product/product.service';
import { notFound } from 'next/navigation';
import RecommendedProducts from './bottom-section/recommended-products';
import RelatedProducts from './bottom-section/related-products';
import LeftSection from './left-section/left-section';
import RightSection from './right-section/right-section';

type BodyType = {
  slug: string;
};

const BodyDesktop = async ({ slug }: BodyType) => {
  const { data: product } = await productService.get({ slug });

  if (!product) return notFound();

  const breadcrumbItems = getProductPageBreadcrumb(product);

  return (
    <main className='mx-3 mt-6 md:mx-10'>
      <DataLayerOnLoad eventName={GTM_EVENTS.VIEW_PRODUCT} data={product} />

      <Breadcrumb items={breadcrumbItems} />

      <section className='grid-cols-2 gap-7 md:grid'>
        <LeftSection product={product} />
        <RightSection product={product} />
      </section>

      <section className='mt-20' id={DOM_IDS.PRODUCT_RECOMMENDATION}>
        <RecommendedProducts productId={product.id} />
        <RelatedProducts productId={product.id} />
      </section>
    </main>
  );
};

export default BodyDesktop;
