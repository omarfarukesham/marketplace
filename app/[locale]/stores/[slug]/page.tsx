import productService from '@/app/_services/product/product.service';
import storeService from '@/app/_services/store/store.service';
import { notFound } from 'next/navigation';
import StoreAllItems from './_body/all-items';
import StoreFeaturedItems from './_body/featured-items';

async function Store({ params: { slug } }: { params: { slug: string } }) {
  const getStore = storeService.get({ slug });
  const getFeaturedProducts = productService.getAll({
    filters: { size: 6, sellerSlug: slug, isFeatured: true },
  });

  const [{ data: store }, { data: featuredProducts }] = await Promise.all([getStore, getFeaturedProducts]);

  if (!store) return notFound();

  return (
    <main className='mx-2.5 mb-16 grid gap-10 md:mx-10'>
      <StoreFeaturedItems featuredProducts={featuredProducts} />
      <StoreAllItems sellerId={store.id} />
    </main>
  );
}

export default Store;
