import ALL_PRODUCTS from '@/app/_assets/all-products.svg';
import { merge } from '@/app/_lib/merge';
import { useCategories } from '@/app/_services/category/use-category';
import { CategoryType } from '@/app/_types/category.type';
import Image from 'next/image';
import Link from 'next/link';
import { useSidebar } from './sidebar.context';
import { subcategoryFilters } from './subcategory-filters';

const SidebarSubCategories = () => {
  const { activeCategory, isSubCategoryOpen, closeSidebar } = useSidebar();

  const { filters, options: queryOptions } = subcategoryFilters(activeCategory);

  const { data: subCategories, isLoading } = useCategories({ filters, queryOptions });

  if (!isSubCategoryOpen) return null;

  const subCategoryAll = {
    id: '1',
    slug: activeCategory?.slug ?? '',
    name: 'All',
    thumbnail: ALL_PRODUCTS,
  } as CategoryType;

  return (
    <div
      className={merge(
        'thin-scrollbar overflow-y-auto border-l bg-white px-3 pb-3 pt-3 md:px-8 md:pt-5',
        'h-full md:mt-12 md:h-[calc(100%-48px)]', // -48px for md:mt-12
        'duration-300 animate-in fade-in',
      )}
    >
      <h2 className='mb-5 text-label font-medium md:text-lg md:font-bold'>{activeCategory?.name}</h2>

      <div className='grid grid-cols-3 gap-3 md:grid-cols-5 md:gap-14'>
        {isLoading ? (
          <h3>Loading...</h3>
        ) : subCategories?.length ? (
          <>
            {activeCategory?.id !== '1' && (
              <SubCategoryItem category={subCategoryAll} onClick={closeSidebar} className='bg-[#f6f4fe] p-5' />
            )}
            {subCategories.map((category) => (
              <SubCategoryItem key={'sub' + category.id} category={category} onClick={closeSidebar} />
            ))}
          </>
        ) : (
          <p className='text-gray-600'>No subcategories here!</p>
        )}
      </div>
    </div>
  );
};

const SubCategoryItem = ({
  category,
  onClick,
  className,
}: {
  category: CategoryType;
  onClick: () => void;
  className?: string;
}) => {
  return (
    <Link href={`/categories/${category.slug}`} onClick={onClick}>
      <div className='grid w-20 justify-items-center gap-3 md:w-36'>
        <Image
          src={category.thumbnail || ''}
          alt={category.name}
          height={100}
          width={100}
          className={merge('h-16 w-16 rounded-full object-cover md:h-24 md:w-24', className)}
        />
        <h3 className='whitespace-break-spaces text-center text-sm font-regular md:text-lg md:font-medium'>
          {category.name}
        </h3>
      </div>
    </Link>
  );
};

export default SidebarSubCategories;
