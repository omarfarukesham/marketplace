import { ROUTES } from '@/app/_config/routes';
import { CategoryType } from '@/app/_types/category.type';
import { ProductType } from '@/app/_types/product.type';
import Image from 'next/image';
import Link from 'next/link';

type BestsellersCardType = {
  category: CategoryType;
};

const BestSellersCard = ({ category }: BestsellersCardType) => {
  return (
    <div className='flex h-[21rem] min-w-[20.75rem] shrink-0 flex-col rounded-lg bg-white p-7 md:h-[30rem]'>
      <Link href={ROUTES.bestSellingProducts(category.slug)}>
        <h2 className='mb-5 text-base font-bold'>{category.name}</h2>
      </Link>
      <div className='grid grow grid-cols-2 grid-rows-2 gap-7'>
        {category.products?.slice(0, 4).map((product: ProductType) => (
          <div className='relative h-full rounded-lg bg-gray-200' key={product.id}>
            <Link href={ROUTES.product(product.slug)}>
              <Image
                src={product?.images?.length ? product?.images[0].url : ''}
                alt={product.title}
                fill
                className='rounded-lg border border-gray-200 object-cover'
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellersCard;
