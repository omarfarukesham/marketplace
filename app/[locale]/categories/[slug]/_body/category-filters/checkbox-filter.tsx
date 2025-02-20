import { Checkbox } from '@/app/_components/ui/inputs/checkbox';
import Minus from '@/icons/product/minus';
import Plus from '@/icons/product/plus';
import { useRouter, useSearchParams } from 'next/navigation';
import { memo, useState } from 'react';

type CheckboxFilterType = {
  options: {
    label: string;
    value: string;
  }[];
  label: string;
  initialLength?: number;
  onChange?: (value: string, checked: boolean) => void;
  paramName: string;
};

const CheckboxFilter = memo(({ options, label, initialLength = 6, onChange, paramName }: CheckboxFilterType) => {
  const [viewAll, setViewAll] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const Icon = viewAll ? Minus : Plus;

  const updateUrlParams = (value: string, isChecked: boolean) => {
    const url = new URL(window.location.href);
    const previousValues = url.searchParams.get(paramName);

    if (isChecked) {
      url.searchParams.set(paramName, previousValues ? `${previousValues},${value}` : value);
    } else {
      const previousValuesArray = previousValues?.split(',') || [];
      const newValues = previousValuesArray.filter((id) => id !== value);
      if (newValues.length === 0) {
        url.searchParams.delete(paramName);
      } else {
        url.searchParams.set(paramName, newValues.join(','));
      }
    }

    url.searchParams.delete('page');
    router.push(url.toString(), { scroll: false });
  };

  return (
    <div className='grid gap-3'>
      <h4 className='border-b border-gray-300 pb-2.5 text-base font-medium'>{label}</h4>
      <ul className='grid gap-4 transition-all'>
        {options?.slice(0, viewAll ? options.length : initialLength).map((option) => (
          <li key={option.value}>
            <Checkbox
              label={option.label}
              id={option.value}
              name={label}
              className='h-4 w-4'
              defaultChecked={(searchParams.get(paramName)?.split(',') || [])?.includes(option.value)}
              onChange={(e) => {
                if (e.target.checked) {
                  updateUrlParams(option.value, true);
                } else {
                  updateUrlParams(option.value, false);
                }
                if (onChange) {
                  onChange(option.value, e.target.checked);
                }
              }}
            />
          </li>
        ))}
      </ul>
      {options.length > initialLength && (
        <button className='flex w-fit items-center text-sm font-bold leading-0' onClick={() => setViewAll(!viewAll)}>
          <Icon className='h-4 w-4 fill-gray-900' /> View {viewAll ? 'Less' : 'More'}
        </button>
      )}
    </div>
  );
});

CheckboxFilter.displayName = 'CheckboxFilter';

export default CheckboxFilter;
