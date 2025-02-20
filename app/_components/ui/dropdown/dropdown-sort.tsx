'use client';

import { createUrl } from '@/app/_lib/create-url';
import { merge } from '@/app/_lib/merge';
import ArrowDown from '@/icons/arrows/arrow-down';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { DropdownProvider, useDropdownContext } from './dropdown.context';
import { ActionOptionType, DropdownType, SortOptionType } from './dropdown.type';

export type DropdownActionType = DropdownType<SortOptionType>;

const DropdownSort = (props: DropdownActionType) => {
  return (
    <DropdownProvider<SortOptionType> {...props}>
      <DropdownRoot />
    </DropdownProvider>
  );
};

const DropdownRoot = () => {
  const { optionsOpen, setActiveOption, options, ref, ...rest } = useDropdownContext<SortOptionType>();
  const searchParams = useSearchParams();

  useEffect(() => {
    options.forEach((listItem: SortOptionType) => {
      if (listItem.slug && searchParams.get('sort') === listItem.slug) {
        setActiveOption(listItem);
      }
    });
  }, [options, searchParams, setActiveOption]);

  return (
    <div className={merge('relative grid gap-2', rest.className)} ref={ref}>
      {rest.label && <DropdownLabel />}

      <Button />

      {rest.error && <p className='animate-fade-in text-sm text-danger'>{rest.error}</p>}

      {optionsOpen && <SortOptions />}
    </div>
  );
};

const DropdownLabel = () => {
  const { label, required } = useDropdownContext();

  return (
    <label className='text-label font-medium'>
      {label}
      {required && <span className='text-danger'> *</span>}
    </label>
  );
};

const Button = () => {
  const { optionsOpen, setOptionsOpen, activeOption, customButton, ...rest } = useDropdownContext<ActionOptionType>();

  if (customButton) {
    return customButton({ optionsOpen, setOptionsOpen, activeOption });
  }

  return (
    <button
      type='button'
      onClick={() => {
        setOptionsOpen(!optionsOpen);
      }}
      className={merge(
        'flex w-full items-center justify-between rounded-md border px-4 py-2',
        rest.error ? 'border-danger outline-danger' : 'border-gray-600',
        rest.buttonClassName,
      )}
    >
      <input
        readOnly
        placeholder={rest.placeholder || 'Select an option'}
        className='w-fit max-w-[80%] outline-none placeholder:text-gray-900'
        value={activeOption?.label}
      />
      <ArrowDown className={merge('fill-gray-600 transition-transform', optionsOpen && 'rotate-180')} />
    </button>
  );
};

const SortOptions = () => {
  const { options, setOptionsOpen, optionsOpen, ...rest } = useDropdownContext<SortOptionType>();
  return (
    <div
      className={merge(
        'thin-scrollbar absolute z-10 max-h-60 w-full overflow-y-auto whitespace-nowrap rounded-md bg-white p-4 shadow',
        rest.error ? 'top-[80%]' : 'top-full',
        rest.optionsClassName,
      )}
      onClick={() => setOptionsOpen(!optionsOpen)}
      role='listbox'
      tabIndex={0}
      onKeyDown={() => {}} // implement later
    >
      {options.map((item) => (
        <SortOption key={item.slug} item={item} />
      ))}
    </div>
  );
};

function SortOption({ item }: { item: SortOptionType }) {
  const { activeOption } = useDropdownContext<SortOptionType>();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  // const isActive = searchParams.get('sort') === item.slug;
  const isActive = activeOption?.slug === item.slug;
  const q = searchParams.get('q');
  const href = createUrl(
    pathname,
    new URLSearchParams({
      ...(q && { q }),
      ...(item.slug && item.slug.length && { sort: item.slug }),
    }),
  );
  const DynamicTag = isActive ? 'p' : Link;

  return (
    <li className='mt-2 flex text-sm' key={item.label}>
      <DynamicTag
        prefetch={!isActive ? false : undefined}
        href={href}
        className={merge('w-full hover:underline hover:underline-offset-4', {
          'underline underline-offset-4': isActive,
        })}
      >
        {item.label}
      </DynamicTag>
    </li>
  );
}

export default DropdownSort;
