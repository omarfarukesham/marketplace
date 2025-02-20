import { ROUTES } from '@/app/_config/routes';
import { CustomizedCategoryType } from '@/app/_types/category.type';
import Image from 'next/image';
import CategoryBarItemWrapper from './category-bar-item-wrapper';

const CategoryBarItem = ({ category }: { category: CustomizedCategoryType }) => {
  return (
    <CategoryBarItemWrapper link={ROUTES.customizedCategory(category.slug)}>
      {category.icon && (
        <Image width={24} height={24} src={category.icon} alt={category.name} className='h-4 w-4 md:h-6 md:w-6' />
      )}
      {category.name}
    </CategoryBarItemWrapper>
  );
};

export default CategoryBarItem;
