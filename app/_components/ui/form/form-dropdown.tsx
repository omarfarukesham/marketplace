import { RegisterOptions, useFormContext } from 'react-hook-form';
import DropdownAction from '../dropdown/dropdown-action';
import { ActionOptionType, DropdownType } from '../dropdown/dropdown.type';

type FormDropdownType = {
  name: string;
  validations?: RegisterOptions;
} & DropdownType<ActionOptionType>;

const FormDropdown = ({ validations, required, name, onChange, defaultValue, ...rest }: FormDropdownType) => {
  const {
    register,
    setValue,
    formState: { errors },
    getValues,
  } = useFormContext();

  const onOptionChange = (option: ActionOptionType) => {
    setValue(name, option.value, {
      shouldValidate: true,
    });
    if (onChange) onChange(option);
  };

  const formRequired = !!validations?.required || required;
  const formDefaultValue = defaultValue || getValues(name);

  return (
    <>
      <input
        className='sr-only'
        {...register(name, { ...validations, value: formDefaultValue })}
        disabled={rest.disabled}
      />
      <DropdownAction
        required={formRequired}
        onChange={onOptionChange}
        error={errors[name]?.message as string}
        defaultValue={formDefaultValue}
        {...rest}
      />
    </>
  );
};

export default FormDropdown;
