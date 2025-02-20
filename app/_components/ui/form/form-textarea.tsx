import { RegisterOptions, useFormContext } from 'react-hook-form';
import { TextareaType } from '../inputs/input.type';
import { Textarea } from '../inputs/textarea';

const FormTextarea = ({
  validations,
  required,
  ...rest
}: Omit<TextareaType, 'ref'> & { name: string; validations?: RegisterOptions }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const formRequired = !!validations?.required || required;

  return (
    <Textarea
      {...register(rest.name, validations)}
      error={errors[rest.name]?.message as string}
      required={formRequired}
      {...rest}
    />
  );
};

export default FormTextarea;
