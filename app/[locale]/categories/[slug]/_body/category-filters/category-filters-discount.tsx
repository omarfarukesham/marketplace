import { Radio } from '@/app/_components/ui/inputs/radio';
import { CategoryFiltersType } from '@/app/_types/category.type';
import { useRouter, useSearchParams } from 'next/navigation';

const CategoryFiltersDiscount = ({ options }: { options: CategoryFiltersType['filterOptions'][0]['options'] }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const queryParamMin = 'discountPercentageMin';
  const queryParamMax = 'discountPercentageMax';

  const updateUrlParams = (min: number | undefined, max: number | undefined) => {
    const url = new URL(window.location.href);
    if (min) {
      url.searchParams.set(queryParamMin, min.toString());
    } else {
      url.searchParams.delete(queryParamMin);
    }
    if (max) {
      url.searchParams.set(queryParamMax, max.toString());
    } else {
      url.searchParams.delete(queryParamMax);
    }
    router.push(url.toString(), { scroll: false });
  };

  return (
    <div className='grid gap-3'>
      <h4 className='mb-3 border-b border-gray-300 pb-2.5 text-base font-medium'>Discount</h4>
      <ul className='grid gap-4 transition-all'>
        {options?.map((option) => (
          <li key={option.value}>
            <Radio
              label={option.label}
              id={option.value}
              name='price'
              defaultChecked={
                searchParams.get(queryParamMin)?.toString() === option.min?.toString() &&
                searchParams.get(queryParamMax)?.toString() === option.max?.toString()
              }
              onChange={(e) => {
                if (e.target.checked) {
                  updateUrlParams(option.min, option.max);
                } else {
                  updateUrlParams(undefined, undefined);
                }
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryFiltersDiscount;
