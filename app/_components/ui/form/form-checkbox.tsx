import { RegisterOptions, useFormContext } from 'react-hook-form';
import { Checkbox } from '../inputs/checkbox';
import { InputType } from '../inputs/input.type';

const FormCheckbox = ({
  validations,
  ...rest
}: Omit<InputType, 'ref'> & { name: string; id: string; validations?: RegisterOptions }) => {
  const { register } = useFormContext();
  return <Checkbox {...register(rest.name, validations)} {...rest} />;
};
export default FormCheckbox;
