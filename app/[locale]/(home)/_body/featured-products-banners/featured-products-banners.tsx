import { ROUTES } from '@/app/_config/routes';
import { merge } from '@/app/_lib/merge';
import featuredProductService from '@/app/_services/product/featured-product.service';
import Image from 'next/image';
import Link from 'next/link';

type FeaturedProductsBannersType = {
  code: string;
  numberOfColumns?: 2 | 3 | 4;
};

const FeaturedProductsBanners = async ({ numberOfColumns = 2, code }: FeaturedProductsBannersType) => {
  const { data: featuredProduct } = await featuredProductService.get({ code });

  const products = featuredProduct?.products?.items;

  if (!products?.length) return null;

  const gridStyles = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-3',
    4: 'grid-cols-4 md:grid-cols-3',
  };

  const aspectRatios = {
    2: 'aspect-[35/10]',
    3: 'aspect-[58/23]',
    4: 'aspect-[58/23]',
  };

  return (
    <section
      className={merge(
        'my-12 grid w-[calc(100%+16px)] gap-3 md:w-auto md:gap-7',
        // 'h-[100px] md:h-[150px] lg:h-[180px] 2xl:h-[200px] 3xl:h-[230px]',
        '-mx-2 md:mx-0',
        gridStyles[numberOfColumns],
      )}
    >
      {products.map((product) => (
        <div className={merge('relative w-full overflow-hidden', aspectRatios[numberOfColumns])} key={product.id}>
          <Image
            src={product?.bannerImage?.url || ''}
            alt={product?.bannerImage?.url || ''}
            // height={640}
            // width={205}
            fill
            sizes='(max-width: 768px) 100vw, 50vw'
            className='w-full rounded-lg'
          />
          <Link
            href={ROUTES.product(product.slug)}
            className='absolute bottom-[16%] left-[5%] rounded-full bg-white px-[6%] py-[1%] text-[80%] shadow transition-colors duration-300 hover:bg-secondary-900 xl:font-bold'
          >
            Buy Now
          </Link>
        </div>
      ))}
    </section>
  );
};

export default FeaturedProductsBanners;
