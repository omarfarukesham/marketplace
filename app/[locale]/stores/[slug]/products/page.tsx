import ProductsGridPaginated from '@/app/_components/product/products-grid-paginated';
import productService from '@/app/_services/product/product.service';
import { APIFiltersType } from '@/app/_types/api.type';
import { HydrationBoundary } from '@tanstack/react-query';

async function StoreProducts({
  params: { slug },
  searchParams,
}: {
  params: { slug: string };
  searchParams: { q?: string; categoryId?: string };
}) {
  const filters = {
    sellerSlug: slug,
  } as APIFiltersType;

  if (searchParams.q) filters.titleEn = searchParams.q;

  if (searchParams.categoryId) filters.categoryId = searchParams.categoryId;

  const state = await productService.prefetchAll({ filters });

  return (
    <div className='mx-2.5 my-3 md:mx-10 md:my-10'>
      {searchParams.q && <p className='mb-2 text-gray-700 md:mb-5'>Showing result for &quot;{searchParams.q}&quot;</p>}
      <HydrationBoundary state={state}>
        <ProductsGridPaginated filters={filters} grid={6} />
      </HydrationBoundary>
    </div>
  );
}

export default StoreProducts;
