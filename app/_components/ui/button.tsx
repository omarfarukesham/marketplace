import { merge } from '@/app/_lib/merge';
import { ComponentProps } from 'react';

type ButtonType = {
  color?: 'default' | 'primary' | 'secondary' | 'danger' | 'white';
  outlined?: boolean;
  size?: 'default' | 'xs' | 'sm' | 'md' | 'lg' | 'full';
  rounded?: boolean;
} & ComponentProps<'button'>;

const Button = ({
  color = 'default',
  size = 'default',
  outlined = false,
  rounded = false,

  className,
  children,
  ...rest
}: ButtonType) => {
  const colors = {
    default: '',
    primary: 'bg-primary-900 border-primary-900 hover:bg-secondary-900',
    secondary: 'bg-secondary-900 border-secondary-900 hover:bg-primary-900 hover:text-white',
    danger: 'bg-danger',
    white: 'bg-white hover:bg-primary-900 hover:text-white',
  };

  const sizes = {
    default: '',
    xs: '',
    sm: 'px-2 py-1 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 md:px-16 py-3 md:text-lg',
    full: 'w-full py-4',
  };

  return (
    <button
      className={merge(
        'group flex w-fit items-center gap-2 rounded-md text-base font-bold transition-all',
        colors[color],
        outlined && 'border bg-transparent hover:border-transparent',
        sizes[size],
        rounded && 'rounded-full',
        rest.disabled && 'bg-gray-200 text-gray-400 hover:bg-gray-200 hover:text-gray-400',
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
