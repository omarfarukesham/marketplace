import Form from '@/app/_components/ui/form/form';
import { AUTH_VIEW_MODES } from '@/app/_config/constants';
import { useResetPassword } from '@/app/_services/auth/use-auth';
import { Dispatch, SetStateAction } from 'react';
import toast from 'react-hot-toast';
import AuthPasswordWithConfirmPassword from '../auth-commons/auth-password-with-confirm-password';

type ForgotPasswordResetPasswordType = {
  forgotData: Record<string, string>;
  setAuthViewMode: Dispatch<SetStateAction<string>>;
};

const ForgotPasswordResetPassword = ({ forgotData, setAuthViewMode }: ForgotPasswordResetPasswordType) => {
  const { mutate: resetPassword } = useResetPassword();
  const handleSubmit = (formData: { password: string }) => {
    const data = {
      username: forgotData.mediumValue,
      password: formData.password,
      otp: forgotData.otp,
    };
    resetPassword(data, {
      onSuccess: () => {
        toast.success('Successfully ');
        setAuthViewMode(AUTH_VIEW_MODES.login);
      },
      onError: (error) => toast.error(error.message),
    });
  };

  return (
    <div className='flex w-full flex-col gap-5 p-8 md:p-10'>
      <Form onSubmit={handleSubmit} className='flex flex-1 flex-col justify-evenly gap-5'>
        <AuthPasswordWithConfirmPassword />

        <button
          type='submit'
          className='mx-auto my-3 w-2/3 rounded-full !bg-secondary-900 p-2 text-primary-900 hover:!bg-primary-900 hover:text-white'
        >
          Reset
        </button>
      </Form>
    </div>
  );
};

export default ForgotPasswordResetPassword;
