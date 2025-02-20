import SectionHeading from '@/app/_components/ui/section-heading';
import Flash from '@/icons/flash';
import BestsellersGrid from './bestsellers-grid';

const Bestsellers = () => {
  return (
    <section className='-mx-2.5 overflow-x-hidden bg-gray-100 px-2.5 py-4 pb-20 md:-mx-10 md:px-10 md:pt-16'>
      <SectionHeading
        title={
          <>
            <Flash /> Best Selling Products
          </>
        }
      />
      <BestsellersGrid />
    </section>
  );
};

export default Bestsellers;
