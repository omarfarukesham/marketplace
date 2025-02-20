import { Radio } from '@/app/_components/ui/inputs/radio';
import { REVIEW_OPTIONS } from '@/app/_config/filters';
import { useRouter, useSearchParams } from 'next/navigation';

const CategoryFiltersReview = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const queryParamMin = 'averageRatingMin';
  const queryParamMax = 'averageRatingMax';

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
      <h4 className='border-b border-gray-300 pb-2.5 text-base font-medium'>Review</h4>
      <ul className='grid gap-3 transition-all'>
        {REVIEW_OPTIONS?.map((option) => (
          <li key={option.value}>
            <Radio
              label={option.label}
              id={option.value}
              name='review'
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

export default CategoryFiltersReview;
