import ProductsGrid from '@/app/_components/product/products-grid';
import { PaginatedResponseType } from '@/app/_types/api.type';
import { ProductType } from '@/app/_types/product.type';
import StarRounded from '@/icons/star-rounded';

async function StoreFeaturedItems({ featuredProducts }: { featuredProducts?: PaginatedResponseType<ProductType[]> }) {
  if (!featuredProducts?.items?.length) return;

  return (
    <div className='my-3 md:my-12'>
      <h2 className='mb-3 flex items-center gap-2 text-base font-extrabold leading-0 md:mb-7 md:text-2xl'>
        <StarRounded className='h-5 w-5 -translate-y-0.5 md:h-auto md:w-auto' /> FEATURED ITEMS
      </h2>
      <ProductsGrid products={featuredProducts.items} />
    </div>
  );
}

export default StoreFeaturedItems;
