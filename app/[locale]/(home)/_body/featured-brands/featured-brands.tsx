import SectionHeading from '@/app/_components/ui/section-heading';
import brandService from '@/app/_services/brand/brand.service';
import FeaturedBrandsList from './featured-brands-list';

const FeaturedBrands = async () => {
  const { data: brands } = await brandService.getAll({ filters: { isFeatured: true, size: 30 } });

  return (
    <section className='mt-3 overflow-x-hidden md:mt-0 md:overflow-x-visible'>
      <SectionHeading title='Featured Brands' linkText='Explore More' link='/brands' />
      {brands && <FeaturedBrandsList brands={brands.items} />}
    </section>
  );
};

export default FeaturedBrands;
