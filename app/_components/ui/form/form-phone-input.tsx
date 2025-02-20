import { merge } from '@/app/_lib/merge';
import { ActionOptionType, CustomDropdownButtonType } from '../dropdown/dropdown.type';
import { InputType } from '../inputs/input.type';
import FormDropdown from './form-dropdown';
import FormInput from './form-input';

export const FormPhoneInput = ({
  label,
  error,
  name,
  className,
  defaultCode,
  containerClassName,
  ...rest
}: InputType & { name: string; defaultCode?: string }) => {
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
    <div className={merge('grid gap-2', containerClassName)}>
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
        <FormDropdown
          name={`${name}.code`}
          customButton={countryCodeButton}
          options={[
            { label: 'BD +1', value: 'bd' },
            { label: 'CD +2', value: 'cd' },
          ]}
          defaultValue={defaultCode}
          optionsClassName='!px-1 py-2 !w-16 flex items-center flex-col top-8 -left-4'
        />

        <hr className='h-full w-[1px] bg-black' />

        <FormInput name={`${name}.number`} {...rest} className='w-full border-none !p-0 outline-none' />
      </div>
      {error && <p className='animate-fade-in text-sm text-danger'>{error}</p>}
    </div>
  );
};
