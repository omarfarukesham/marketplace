import DropdownAction from '@/app/_components/ui/dropdown/dropdown-action';
import { ActionOptionType } from '@/app/_components/ui/dropdown/dropdown.type';
import { ROUTES } from '@/app/_config/routes';
import { useStoreCategories } from '@/app/_services/store/use-store';
import ArrowDown from '@/icons/arrows/arrow-down';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const StoreCategories = ({ sellerId, storeSlug }: { sellerId: string; storeSlug: string }) => {
  const { data: categories, isLoading } = useStoreCategories({
    sellerId,
  });

  const searchParams = useSearchParams();

  if (isLoading)
    return (
      <button className='flex items-center gap-2'>
        Category <ArrowDown className='h-3 w-3 md:h-auto md:w-auto' />
      </button>
    );

  if (!categories) return null;

  const categoryOptions: ActionOptionType[] = categories.map((category) => ({
    label: category.name,
    value: category.categoryId?.toString(),
    content: ({ item, setActiveOption }) => (
      <li className='mt-2 flex text-sm'>
        <Link
          href={ROUTES.storeProducts(storeSlug) + '?categoryId=' + item.value}
          className='hover:underline hover:underline-offset-4'
          onClick={() => setActiveOption(item)}
        >
          {item.label}
        </Link>
      </li>
    ),
  }));

  return (
    <DropdownAction
      options={categoryOptions}
      //   buttonClassName='border-none p-0 w-28 [&>input]:placeholder:text-black'
      customButton={({ activeOption, optionsOpen, setOptionsOpen }) => (
        <button className='flex items-center gap-1 md:gap-2' onClick={() => setOptionsOpen(!optionsOpen)}>
          {activeOption?.label || 'Category'} <ArrowDown className='h-3 w-3 md:h-auto md:w-auto' />
        </button>
      )}
      optionsClassName='min-w-[200px] top-8 -left-2 max-h-[400px]'
      placeholder='Category'
      defaultValue={searchParams.get('categoryId') || undefined}
    />
  );
};

export default StoreCategories;
