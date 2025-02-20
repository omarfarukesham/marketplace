import { ComponentProps } from 'react';

type InputWrapperProps = {
  label?: string | JSX.Element;
  error?: string;
  containerClassName?: string;
  extraInfo?: string;
};

export type InputType = ComponentProps<'input'> & InputWrapperProps;

export type TextareaType = ComponentProps<'textarea'> & InputWrapperProps;
