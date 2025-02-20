import { ComponentProps, ReactNode, useEffect } from 'react';
import { DefaultValues, FieldValues, FormProvider, SubmitHandler, useForm } from 'react-hook-form';

const Form = <Values extends FieldValues>({
  children,
  onSubmit,
  defaultValues,
  ...rest
}: Omit<ComponentProps<'form'>, 'onSubmit'> & {
  children: ReactNode;
  onSubmit: SubmitHandler<Values>;
  defaultValues?: DefaultValues<Values>;
}) => {
  const methods = useForm<Values>({
    defaultValues,
  });

  useEffect(() => {
    methods.reset(defaultValues);
  }, [defaultValues, methods]);

  // eslint-disable-next-line no-console
  Object.keys(methods.formState.errors).length && console.log(methods.formState.errors);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} {...rest} noValidate>
        {children}
      </form>
    </FormProvider>
  );
};

export default Form;
