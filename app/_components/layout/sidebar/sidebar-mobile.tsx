'use client';

import StarFill from '@/app/_assets/star.svg';
import { merge } from '@/app/_lib/merge';
import { useCategories } from '@/app/_services/category/use-category';
import { CategoryType } from '@/app/_types/category.type';
import ArrowRight from '@/icons/arrows/arrow-right';
import Cross from '@/icons/cross';
import Image from 'next/image';
import SidebarSubCategories from './sidebar-subcategories';
import { useSidebar } from './sidebar.context';

export const featuredCategory = {
  slug: 'featured',
  name: 'Featured',
  icon: StarFill,
  id: '1',
} as CategoryType;

const SidebarMobile = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebar();

  const { data: categories } = useCategories({ filters: { isRootCategory: true, size: 100 } });

  return (
    <>
      <div
        className={merge(
          'fixed left-0 top-[85px] z-20 flex h-[calc(100dvh-85px)] w-fit items-start transition-transform duration-500',

          isSidebarOpen ? 'translate-x-0' : '-translate-x-[115%]',
        )}
      >
        <div className='thin-scrollbar flex h-full w-32 shrink-0 flex-col gap-1.5 overflow-y-auto bg-white pb-3 pt-3'>
          {categories?.length ? (
            [featuredCategory, ...categories].map((category) => (
              <SidebarCategoryItem key={category.id} category={category} />
            ))
          ) : (
            <p>No Categories</p>
          )}
        </div>

        <button onClick={toggleSidebar} className='absolute left-96 ml-2 mt-2 hidden md:inline'>
          <Cross className='fill-white' />
        </button>

        <SidebarSubCategories />
      </div>
    </>
  );
};

const SidebarCategoryItem = ({ category }: { category: CategoryType }) => {
  const { activeCategory, onCategoryClick } = useSidebar();

  return (
    <>
      <button
        className={merge(
          'flex w-full items-center justify-between px-2 py-3 text-sm hover:bg-gray-200',
          category.id === activeCategory?.id && 'bg-gray-200',
        )}
        onClick={() => onCategoryClick(category)}
      >
        <div className='flex items-center gap-1 whitespace-break-spaces text-left'>
          <Image src={category.icon || ''} alt={category.name} height={20} width={20} className='h-5 w-5' />
          {category.name}
        </div>
        <ArrowRight className='h-3 w-3 fill-gray-800' />
      </button>
    </>
  );
};

export default SidebarMobile;
