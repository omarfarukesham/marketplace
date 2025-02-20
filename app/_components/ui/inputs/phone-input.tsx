import { merge } from '@/app/_lib/merge';
import { forwardRef } from 'react';
import DropdownAction from '../dropdown/dropdown-action';
import { ActionOptionType, CustomDropdownButtonType } from '../dropdown/dropdown.type';
import { InputField } from './input';
import { InputType } from './input.type';

export const PhoneInput = forwardRef<HTMLInputElement, InputType>(({ label, error, className, ...rest }, ref) => {
  const countryCodeButton: CustomDropdownButtonType<ActionOptionType> = ({
    activeOption,
    optionsOpen,
    setOptionsOpen,
  }) => {
    return (
      <button
        type='button'
        onClick={() => {
          setOptionsOpen(!optionsOpen);
        }}
      >
        {activeOption?.label || '-'}
      </button>
    );
  };
  return (
    <div className='grid gap-2'>
      <label htmlFor={rest.id} className='text-label font-medium'>
        {label}
        {rest.required && <span className='text-danger'> *</span>}
      </label>

      <div
        className={merge(
          'flex items-center gap-3 rounded-md border border-gray-600 px-4 py-3',
          { '!border-danger outline-danger': error },
          className,
        )}
      >
        <DropdownAction
          customButton={countryCodeButton}
          options={[
            { label: 'BD +1', value: 'bd' },
            { label: 'CD +2', value: 'cd' },
          ]}
          optionsClassName='!px-1 py-2 !w-16 flex items-center flex-col top-8 -left-4'
        />

        <hr className='h-full w-[1px] bg-black' />

        <InputField {...rest} ref={ref} className='grow border-none !p-0 outline-none' />
      </div>
      {error && <p className='animate-fade-in text-sm text-danger'>{error}</p>}
    </div>
  );
});

PhoneInput.displayName = 'PhoneInput';
