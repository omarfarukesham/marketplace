import { Radio } from '@/app/_components/ui/inputs/radio';
import { CategoryFiltersType } from '@/app/_types/category.type';
import { useRouter, useSearchParams } from 'next/navigation';

const RadioFilter = ({
  options,
  queryParamMin,
  queryParamMax,
  label,
  onChange,
}: {
  options: CategoryFiltersType['filterOptions'][0]['options'];
  queryParamMin: string;
  queryParamMax: string;
  label: string;
  onChange?: (min: number | undefined, max: number | undefined) => void;
}) => {
  return (
    <div className='grid gap-3'>
      <h4 className='mb-3 border-b border-gray-300 pb-2.5 text-base font-medium'>{label}</h4>
      <ul className='grid gap-4 transition-all'>
        {options?.map((option) => (
          <RadioOption
            key={option.value}
            option={option}
            queryParamMin={queryParamMin}
            queryParamMax={queryParamMax}
            label={label}
            onChange={onChange}
          />
        ))}
      </ul>
    </div>
  );
};

const RadioOption = ({
  option,
  queryParamMin,
  queryParamMax,
  label,
  onChange,
}: {
  option: CategoryFiltersType['filterOptions'][0]['options'][0];
  queryParamMin: string;
  queryParamMax: string;
  label: string;
  onChange?: (min: number | undefined, max: number | undefined) => void;
}) => {
  const router = useRouter();

  const searchParams = useSearchParams();

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
    <li>
      <Radio
        label={option.label}
        id={label + option.value}
        // name={label}
        checked={
          searchParams.get(queryParamMin)?.toString() === option.min?.toString() &&
          searchParams.get(queryParamMax)?.toString() === option.max?.toString()
        }
        onChange={(e) => {
          if (e.target.checked) {
            updateUrlParams(option.min, option.max);
          } else {
            updateUrlParams(undefined, undefined);
          }
          if (onChange) {
            onChange(option.min, option.max);
          }
        }}
      />
    </li>
  );
};

export default RadioFilter;
