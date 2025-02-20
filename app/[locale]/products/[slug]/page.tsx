import { getViewport } from '@/app/_lib/get-viewport';
import productService from '@/app/_services/product/product.service';
import BodyDesktop from './_body/body-desktop';
import BodyMobile from './_body/body-mobile';

export async function generateMetadata({ params }: { params: { slug: string; locale: string } }) {
  const { data: product } = await productService.get({ slug: params.slug });

  return {
    title: product?.title,
    description: product?.description,
  };
}

const Product = ({ params: { slug } }: { params: { slug: string } }) => {
  const { isDesktop } = getViewport();
  return isDesktop ? <BodyDesktop slug={slug} /> : <BodyMobile slug={slug} />;
};

export default Product;
