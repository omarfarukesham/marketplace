import { ROUTES } from '@/app/_config/routes';
import { ProductType } from '@/app/_types/product.type';
import Image from 'next/image';
import Link from 'next/link';

const StoreFeaturedProducts = ({ recommendedProducts }: { recommendedProducts: ProductType[] }) => {
  return (
    <div className='grid w-full gap-4'>
      {recommendedProducts.map((product) => (
        <StoreFeaturedProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

const StoreFeaturedProductCard = ({ product }: { product: ProductType }) => {
  return (
    <Link
      href={ROUTES.product(product.slug)}
      className='flex items-center gap-2.5 rounded py-1 pl-2.5 shadow transition-transform hover:scale-105 md:px-2.5 md:py-2'
    >
      <Image
        src={product.thumbnail?.url || ''}
        alt={product.thumbnail?.altText || ''}
        height={56}
        width={56}
        className='h-14 w-14 rounded-full object-cover'
      />

      <div className='grid gap-1'>
        <h2 className='line-clamp-2 text-label font-regular'>{product.title}</h2>
        <span className='text-label font-bold'>{product.appliedPrice?.priceText}</span>
      </div>
    </Link>
  );
};

export default StoreFeaturedProducts;
