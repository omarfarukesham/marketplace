import Breadcrumb from '@/app/_components/ui/breadcrumb';
import { BaseFiltersType } from '@/app/_config/filters';
import { getViewport } from '@/app/_lib/get-viewport';
import BrandsFilters from './_body/brands-filters';
import BrandsList from './_body/brands-list/brands-list';

const Brands = () => {
  const filters: BaseFiltersType = {
    size: 10,
    page: 0,
  };

  const BREADCRUMB_ITEMS = [
    { label: 'Home', link: '/' },
    {
      label: 'Brands',
      link: 'brands',
    },
  ];

  const { isDesktop } = getViewport();

  return (
    <main className='mx-3 mb-14 md:mx-11'>
      <Breadcrumb items={BREADCRUMB_ITEMS} />

      <div className='flex flex-col gap-[3%] md:flex-row'>
        <BrandsFilters isDesktop={isDesktop} />
        <BrandsList filters={filters} />
      </div>
    </main>
  );
};
export default Brands;
