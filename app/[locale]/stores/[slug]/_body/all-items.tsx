import ProductsGridPaginated from '@/app/_components/product/products-grid-paginated';
import productService from '@/app/_services/product/product.service';
import { HydrationBoundary } from '@tanstack/react-query';

async function StoreAllItems({ sellerId }: { sellerId: string }) {
  const filters = {
    size: 12,
    sellerId,
  };

  const state = await productService.prefetchAll({ filters });

  return (
    <div className='md:mt-5'>
      <h2 className='mb-3 text-base font-extrabold md:mb-7 md:text-2xl'>ALL ITEMS</h2>
      <HydrationBoundary state={state}>
        <ProductsGridPaginated filters={filters} grid={6} />
      </HydrationBoundary>
    </div>
  );
}

export default StoreAllItems;
