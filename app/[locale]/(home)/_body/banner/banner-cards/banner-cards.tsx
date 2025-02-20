import BannerCard from '@/app/_components/ui/banner-card';
import { ROUTES } from '@/app/_config/routes';
import featuredProductService from '@/app/_services/product/featured-product.service';

const BannerCards = async () => {
  const { data: featuredProduct } = await featuredProductService.get({ code: 'SE' });

  const products = featuredProduct?.products?.items;

  if (!products?.length) return null;

  return (
    <div className='hidden w-[35%] gap-7 md:grid'>
      <BannerCard
        src={products[0].bannerImage?.url || ''}
        alt={products[0].bannerImage?.altText || ''}
        link={ROUTES.product(products[0].slug)}
        className='aspect-[640/205] w-full rounded-md'
      />

      <BannerCard
        src={products[1]?.bannerImage?.url || ''}
        alt={products[1]?.bannerImage?.altText || ''}
        link={ROUTES.product(products[1]?.slug)}
        className='aspect-[640/205] w-full rounded-md'
      />
    </div>
  );
};

export default BannerCards;
