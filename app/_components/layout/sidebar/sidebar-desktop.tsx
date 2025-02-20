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

const SidebarDesktop = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebar();

  const { data: categories } = useCategories({ filters: { isRootCategory: true, size: 100 } });

  return (
    <>
      <DarkBackground />

      <div
        className={merge(
          'fixed left-0 top-0 z-10 flex h-full w-fit items-start transition-transform duration-500',

          isSidebarOpen ? 'translate-x-0' : '-translate-x-[110%]',
        )}
      >
        <div className='h-full w-96 bg-white'>
          <div className='h-12 bg-primary-900 px-4 py-3 text-white'>Categories</div>
          <div className='thin-scrollbar flex h-[calc(100vh-48px)] flex-col gap-1.5 overflow-y-auto py-5'>
            {categories?.length &&
              [featuredCategory, ...categories].map((category) => (
                <SidebarCategoryItem key={category.id} category={category} />
              ))}
          </div>
        </div>

        <button onClick={toggleSidebar} className='absolute left-96 ml-2 mt-2'>
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
          'flex w-full items-center justify-between px-4 py-3 hover:bg-gray-200',
          category.id === activeCategory?.id && 'bg-gray-200',
        )}
        onClick={() => onCategoryClick(category)}
      >
        <div className='flex gap-2.5'>
          <Image src={category.icon || ''} alt={category.name} height={24} width={24} /> {category.name}
        </div>
        <ArrowRight className='fill-gray-800' />
      </button>
    </>
  );
};

const DarkBackground = () => {
  const { isSidebarOpen } = useSidebar();

  return (
    <div
      className={merge(
        'fixed left-0 top-0 z-10 h-full w-full bg-black/80 duration-500',
        isSidebarOpen ? 'animate-in fade-in' : 'hidden animate-out fade-out',
        'pointer-events-none', // for closing on outside click
      )}
    ></div>
  );
};

export default SidebarDesktop;
