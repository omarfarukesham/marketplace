import { merge } from '@/app/_lib/merge';
import { ComponentProps, forwardRef } from 'react';
import { InputType } from './input.type';
import './inputs.css';

export const RadioField = forwardRef<HTMLInputElement, ComponentProps<'input'>>(({ className, ...rest }, ref) => {
  return <input type='radio' className={merge('radio peer/radio h-4 w-4', className)} ref={ref} {...rest} />;
});

RadioField.displayName = 'RadioField';

export const Radio = forwardRef<HTMLInputElement, InputType>(({ label, containerClassName, ...rest }, ref) => {
  return (
    <div className={merge('flex items-center gap-2', containerClassName)}>
      <RadioField {...rest} ref={ref} />
      <label htmlFor={rest.id} className='cursor-pointer text-label peer-checked/radio:text-secondary-900'>
        {label}
        {rest.required && <span className='text-danger'> *</span>}
      </label>
    </div>
  );
});

Radio.displayName = 'Radio';
