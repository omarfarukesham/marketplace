import { InputField } from '@/app/_components/ui/inputs/input';
import { CategoryFiltersType } from '@/app/_types/category.type';
import { useRouter, useSearchParams } from 'next/navigation';
import RadioFilter from './radio-filter';

const CategoryFiltersPrice = ({ options }: { options: CategoryFiltersType['filterOptions'][0]['options'] }) => {
  return (
    <div className='grid gap-3'>
      <RadioFilter options={options} label='Price' queryParamMin='priceMin' queryParamMax='priceMax' />

      <hr className='w-1/2' />

      <CustomPriceInput />
    </div>
  );
};

const CustomPriceInput = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const queryParamMin = 'priceMin';
  const queryParamMax = 'priceMax';

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

    url.searchParams.delete('page');
    router.push(url.toString(), { scroll: false });
  };

  return (
    <div className='flex items-center gap-2.5'>
      <InputField
        placeholder='Min.'
        type='number'
        min={0}
        className='h-8 w-20 border-gray-400 p-2 text-sm font-medium'
        defaultValue={searchParams.get(queryParamMin) || ''}
        onBlur={(e) => {
          updateUrlParams(parseInt(e.target.value), parseInt(searchParams.get(queryParamMax) || ''));
        }}
      />
      <InputField
        placeholder='Max.'
        type='number'
        min={0}
        className='h-8 w-20 border-gray-400 p-2 text-sm font-medium'
        defaultValue={searchParams.get(queryParamMax) || ''}
        onBlur={(e) => {
          updateUrlParams(parseInt(searchParams.get(queryParamMin) || ''), parseInt(e.target.value));
        }}
      />
    </div>
  );
};

export default CategoryFiltersPrice;
