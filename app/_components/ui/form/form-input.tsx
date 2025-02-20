import { RegisterOptions, useFormContext } from 'react-hook-form';
import { Input } from '../inputs/input';
import { InputType } from '../inputs/input.type';

const FormInput = ({
  validations,
  required,
  ...rest
}: Omit<InputType, 'ref'> & { name: string; validations?: RegisterOptions }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const formRequired = !!validations?.required || required;

  return (
    <Input
      {...register(rest.name, validations)}
      error={errors[rest.name]?.message as string}
      required={formRequired}
      {...rest}
    />
  );
};

export default FormInput;
