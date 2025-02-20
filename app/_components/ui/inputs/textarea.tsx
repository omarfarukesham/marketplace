import { merge } from '@/app/_lib/merge';
import Info from '@/icons/info';
import { ComponentProps, forwardRef } from 'react';
import { TextareaType } from './input.type';

export const TextareaField = forwardRef<HTMLTextAreaElement, ComponentProps<'textarea'>>(
  ({ className, ...rest }, ref) => {
    return <textarea className={merge('rounded-md border border-gray-600 px-4 py-3', className)} ref={ref} {...rest} />;
  },
);

TextareaField.displayName = 'TextareaField';

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaType>(
  ({ label, error, containerClassName, className, extraInfo, ...rest }, ref) => {
    return (
      <div className={merge('grid gap-2', containerClassName)}>
        {label && (
          <label htmlFor={rest.id} className='text-label font-medium'>
            {label}
            {rest.required && <span className='text-danger'> *</span>}
          </label>
        )}

        <TextareaField {...rest} ref={ref} className={merge({ '!border-danger outline-danger': error }, className)} />
        {!error && extraInfo && (
          <small className='flex items-center gap-0.5'>
            <Info className='h-3 w-3' /> {extraInfo}
          </small>
        )}
        {error && (
          <p className='animate-fade-in text-sm text-danger' role='alert'>
            {error}
          </p>
        )}
      </div>
    );
  },
);

Textarea.displayName = 'Textarea';
