'use client';

import { merge } from '@/app/_lib/merge';
import { capitalize, isValidUrl } from '@/app/_lib/utils';
import { ProductType, VariantType } from '@/app/_types/product.type';
import Cross from '@/icons/cross';
import Tick from '@/icons/tick';
import Image from 'next/image';
import useVariant from './use-variant';

type VariantsType = {
  product: ProductType;
  onVariantChange?: (matchedVariant: VariantType | null) => void;
};

const renderOption = (option: string) => {
  if (isValidUrl(option)) {
    return (
      <div className='relative h-full w-full'>
        <Image src={option} alt={option} fill className='rounded' />
      </div>
    );
  } else {
    return capitalize(option);
  }
};

const Variants = ({ product, onVariantChange }: VariantsType) => {
  const { selectedVariant, setSelectedVariant, variantsWithUniqueOptions, variantMatched } = useVariant(
    product,
    onVariantChange,
  );

  if (!product.variants?.length) return null;

  return (
    <div className='mt-5 grid gap-2 md:gap-4'>
      {variantsWithUniqueOptions.map((variant) => {
        return (
          <div key={variant.property} className='items-center gap-4 md:flex'>
            <h3 className='font-semibold mb-2 min-w-[100px] text-base'>{capitalize(variant.property)}</h3>

            <div className='flex w-full flex-wrap gap-2 md:gap-5'>
              {variant.uniqueOptions?.map((option, index) => {
                const optionMatched = selectedVariant?.[variant.property] === option;
                return (
                  <button
                    key={index}
                    className={merge(
                      'relative flex h-9 max-w-[120px] flex-[1_1_0] items-center justify-center rounded border border-gray-500 bg-gray-100 px-1 text-sm hover:bg-secondary-300',
                      optionMatched ? 'bg-secondary-300 ring-1 ring-gray-900' : '',
                    )}
                    onClick={() => {
                      const newSelectedVariant = { ...selectedVariant, [variant.property]: option };
                      setSelectedVariant(newSelectedVariant);
                    }}
                  >
                    {renderOption(option)}
                    {optionMatched && (
                      <span className='absolute left-full top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-success'>
                        <Tick className='h-[14px] w-[14px] fill-white md:h-[18px] md:w-[18px]' />
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
      {!variantMatched && (
        <p className='animate-fade-in flex items-center text-label text-danger'>
          <Cross className='h-6 w-6 fill-danger' /> No Variant With Selected Options
        </p>
      )}
      {/* {product.sizes && <Sizes product={product} isDesktop={isDesktop} />}
      {product.colors && <Colors product={product} />} */}
    </div>
  );
};

export default Variants;
