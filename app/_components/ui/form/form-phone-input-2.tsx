import { merge } from '@/app/_lib/merge';
import {
  Controller,
  ControllerFieldState,
  ControllerRenderProps,
  FieldValues,
  UseFormStateReturn,
  useFormContext,
} from 'react-hook-form';
import PhoneInputField, { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

export const FormPhoneInput2 = ({
  name,
  label = 'Phone',
  ...rest
}: {
  name: string;
  label?: string;
  id?: string;
  className?: string;
  containerClassName?: string;
  inputClassName?: string;
  required?: boolean;
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const PhoneInput = ({
    field,
  }: {
    field: ControllerRenderProps<FieldValues, string>;
    fieldState: ControllerFieldState;
    formState: UseFormStateReturn<FieldValues>;
  }) => {
    return (
      <div className={merge('flex flex-col gap-2', rest.containerClassName)}>
        {label && (
          <label htmlFor={rest.id} className='text-label font-medium'>
            {label}
            {rest.required && <span className='text-danger'> *</span>}
          </label>
        )}

        <PhoneInputField
          defaultCountry='BD'
          countries={['BD']}
          addInternationalOption={false}
          placeholder='Enter phone number'
          value={field.value}
          onChange={(value) => field.onChange(value)}
          onBlur={field.onBlur}
          ref={field.ref}
          className={merge(
            'rounded-md border border-gray-600 px-4 py-2.5 [&>input]:bg-transparent [&>input]:outline-none',
            rest.inputClassName,
            errors[name] && 'border-danger',
            rest.className,
          )}
        />
        {errors[name] && <p className='animate-fade-in text-sm text-danger'>{errors[name]?.message as string}</p>}
      </div>
    );
  };

  return (
    <Controller
      name={name}
      render={PhoneInput}
      control={control}
      rules={{
        validate: (inputValue) => {
          if (rest.required && !inputValue) {
            return `${label} is required`;
          }
          if (inputValue) return isValidPhoneNumber(inputValue) ? true : 'Invalid number';
        },
      }}
    />
  );
};
