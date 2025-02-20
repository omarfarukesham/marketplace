import { merge } from '@/app/_lib/merge';
import { CustomizedCategoryType } from '@/app/_types/category.type';
import Image from 'next/image';
import Link from 'next/link';

type CategoryCardType = {
  category: CustomizedCategoryType;
};

const CategoryCard = ({ category }: CategoryCardType) => {
  return (
    <li
      className={merge(
        'h-full w-24 shrink-0 rounded-lg px-2.5 py-3 shadow md:w-44 md:p-5',
        'transition-all hover:scale-105 hover:shadow-xl',
      )}
    >
      <Link
        href={`/customized-categories/${category.slug}`}
        className='grid items-center justify-center justify-items-center gap-1.5 md:gap-3'
      >
        <Image
          src={category.thumbnail || ''}
          alt={category.name}
          height='120'
          width='120'
          className='h-[3.75rem] w-[3.75rem] rounded-full md:h-32 md:w-32'
          priority
        />
        <h2 className='text-center text-sm md:text-base md:font-bold'>{category.name}</h2>
      </Link>
    </li>
  );
};

export default CategoryCard;
