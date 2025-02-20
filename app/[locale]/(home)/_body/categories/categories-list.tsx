'use client';

import HorizontalScroll from '@/app/_components/ui/horizontal-scroll/horizontal-scroll';
import { CustomizedCategoryType } from '@/app/_types/category.type';
import 'swiper/css/grid';
import CategoryCard from './category-card';

const CategoriesList = ({ categories }: { categories: CustomizedCategoryType[] }) => {
  return (
    // <HScroll
    //   modules={[Grid]}
    //   grid={{ rows: 2, fill: 'row' }}
    //   // slidesPerView={9}
    //   breakpoints={{
    //     0: {
    //       slidesPerView: 3.5,
    //       spaceBetween: 16,
    //     },
    //     768: {
    //       slidesPerView: 5,
    //       spaceBetween: 30,
    //     },
    //     1536: {
    //       slidesPerView: 7,
    //       spaceBetween: 30,
    //     },
    //     1920: {
    //       slidesPerView: 9,
    //       spaceBetween: 30,
    //     },
    //   }}
    //   className='!grid !px-1 !py-3'
    //   speed={50}
    // >
    //   {categories?.map((category) => (
    //     <SwiperSlide key={category.id} className=''>
    //       <CategoryCard category={category} />
    //     </SwiperSlide>
    //   ))}
    // </HScroll>

    <HorizontalScroll>
      <ul className='grid grid-flow-col grid-rows-2 gap-5 px-1 py-3'>
        {categories?.map((category) => <CategoryCard key={category.id} category={category} />)}
      </ul>
    </HorizontalScroll>
  );
};

export default CategoriesList;
