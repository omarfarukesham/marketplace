'use client';

import SideFilters from '@/app/_components/layout/side-filters/side-filters';
import { REVIEW_OPTIONS } from '@/app/_config/filters';
import { TempCategoryType } from '@/app/_lib/static-data/categories-data';
import { useCategoryFilters } from '@/app/_services/category/use-category';
import { CategoryFiltersType } from '@/app/_types/category.type';
import CategoryFiltersPrice from './category-filters-price';
import CheckboxFilter from './checkbox-filter';
import RadioFilter from './radio-filter';

const CategoryFilters = ({
  category,
  isDesktop,
  initialFilters,
}: {
  category?: TempCategoryType;
  isDesktop: boolean;
  initialFilters?: CategoryFiltersType;
}) => {
  const { slug } = category || {};

  const { data: filters } = useCategoryFilters({
    slug: slug ?? '',
    queryOptions: { enabled: !!slug, initialData: initialFilters },
  });

  const { brands, filterOptions = [] } = filters ?? {};

  const priceOptions = filterOptions.find((option) => option.type === 'PRICE_OPTION')?.options ?? [];
  const discountOptions = filterOptions.find((option) => option.type === 'DISCOUNT_OPTION')?.options;

  return (
    <SideFilters isDesktop={isDesktop}>
      <CategoryFiltersPrice options={priceOptions} />

      {discountOptions && (
        <RadioFilter
          label='Discount'
          options={discountOptions}
          queryParamMin='discountPercentageMin'
          queryParamMax='discountPercentageMax'
        />
      )}

      <RadioFilter
        label='Review'
        options={REVIEW_OPTIONS}
        queryParamMin='averageRatingMin'
        queryParamMax='averageRatingMax'
      />

      {brands && (
        <CheckboxFilter
          label='Brand'
          options={brands.map((brand) => ({ label: brand.name, value: brand.id }))}
          initialLength={brands.length > 5 ? 5 : brands.length}
          paramName='brandIds'
        />
      )}
    </SideFilters>
  );
};

export default CategoryFilters;
