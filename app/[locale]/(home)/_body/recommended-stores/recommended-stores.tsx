import SectionHeading from '@/app/_components/ui/section-heading';
import StoresList from './stores-list';

const RecommendedStores = () => {
  return (
    <section className='w-full'>
      <SectionHeading title='Recommended Stores' />
      <StoresList />
    </section>
  );
};

export default RecommendedStores;
