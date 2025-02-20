import { merge } from '@/app/_lib/merge';
import { ComponentProps, forwardRef } from 'react';
import { InputType } from './input.type';
import './inputs.css';

export const CheckboxField = forwardRef<HTMLInputElement, ComponentProps<'input'>>(({ className, ...rest }, ref) => {
  return <input type='checkbox' className={merge('checkbox h-4 w-4 shrink-0', className)} ref={ref} {...rest} />;
});

CheckboxField.displayName = 'CheckboxField';

export const Checkbox = forwardRef<HTMLInputElement, InputType>(({ label, containerClassName, ...rest }, ref) => {
  return (
    <div className={merge('flex items-center gap-2', containerClassName)}>
      <CheckboxField {...rest} ref={ref} />
      <label htmlFor={rest.id} className='text-label'>
        {label}
        {rest.required && <span className='text-danger'> *</span>}
      </label>
    </div>
  );
});

Checkbox.displayName = 'Checkbox';
