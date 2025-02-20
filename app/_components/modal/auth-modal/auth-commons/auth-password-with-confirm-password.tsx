import FormInput from '@/app/_components/ui/form/form-input';
import { useFormContext, useWatch } from 'react-hook-form';

const AuthPasswordWithConfirmPassword = () => {
  const { setError, clearErrors } = useFormContext();
  const password: string = useWatch({ name: 'password' });

  const validateConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (password != e.target.value) {
      setError('confirmPassword', {
        type: 'manual',
        message: "Password and confirm password doesn't match",
      });
    } else {
      clearErrors('confirmPassword');
    }
  };

  return (
    <>
      <FormInput
        name='password'
        label='Password'
        placeholder='******'
        type='password'
        validations={{
          required: {
            value: true,
            message: 'Please write a valid password',
          },
          minLength: {
            value: 6,
            message: 'Password must have minimum 6 characters',
          },
        }}
      />
      <FormInput
        name='confirmPassword'
        label='Confirm Password'
        placeholder='******'
        type='password'
        validations={{ required: 'Please write a valid password' }}
        onChange={validateConfirmPassword}
      />
    </>
  );
};

export default AuthPasswordWithConfirmPassword;
