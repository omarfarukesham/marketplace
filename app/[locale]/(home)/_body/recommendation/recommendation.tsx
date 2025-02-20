import SectionHeading from '@/app/_components/ui/section-heading';
import customizedCategoryService from '@/app/_services/customized-category/customized-categories.service';

import { HydrationBoundary } from '@tanstack/react-query';
import RecommendationBody from './recommendation-body';

const Recommendation = async () => {
  const state = await customizedCategoryService.prefetchAll();

  // await queryClient.prefetchQuery({
  //   queryKey: ['customized-category', categories[0].slug],
  //   queryFn: () => fetchCustomizedCategory(categories[0].slug),
  // });

  return (
    <section className='my-3 md:my-8'>
      <SectionHeading title='EXPLORE YOUR INTERESTS' />
      <HydrationBoundary state={state}>
        <RecommendationBody />
      </HydrationBoundary>
    </section>
  );
};

export default Recommendation;
