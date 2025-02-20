import Form from '@/app/_components/ui/form/form';
import FormInput from '@/app/_components/ui/form/form-input';
import { AUTH_VIEW_MODES, OTP_ACTION_TYPE } from '@/app/_config/constants';
import { useSendOTP } from '@/app/_services/auth/use-auth';
import { Dispatch, SetStateAction } from 'react';
import toast from 'react-hot-toast';

type ForgotPasswordFormType = {
  setViewMode: Dispatch<SetStateAction<string>>;
  setForgotState: Dispatch<SetStateAction<Record<string, string>>>;
};

const ForgotPasswordForm = ({ setViewMode, setForgotState }: ForgotPasswordFormType) => {
  const { mutate: sendOtp } = useSendOTP();
  const handleSubmit = (formData: { username: string }) => {
    const data = {
      mediumValue: formData.username,
      actionType: OTP_ACTION_TYPE.forgotPassword,
    };

    sendOtp(data, {
      onSuccess: () => {
        toast.success('Successfully OTP sent');
        setForgotState(data);
        setViewMode(AUTH_VIEW_MODES.verify);
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  };

  return (
    <div className='flex w-full flex-col gap-5 p-8 md:p-10'>
      <Form onSubmit={handleSubmit} className='flex flex-1 flex-col justify-evenly gap-5'>
        <FormInput
          name='username'
          label='Mobile/Email'
          placeholder='Username'
          validations={{
            required: 'Please enter a valid email address',
          }}
        />
        <button
          type='submit'
          className='mx-auto my-3 w-2/3  rounded-full !bg-secondary-900 p-2 text-primary-900 hover:!bg-primary-900 hover:text-white'
        >
          Send OTP
        </button>
      </Form>
    </div>
  );
};

export default ForgotPasswordForm;
