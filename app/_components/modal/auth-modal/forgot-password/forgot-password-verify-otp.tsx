import Form from '@/app/_components/ui/form/form';
import FormInput from '@/app/_components/ui/form/form-input';
import { AUTH_VIEW_MODES, OTP_ACTION_TYPE } from '@/app/_config/constants';
import { useVerifyOTP } from '@/app/_services/auth/use-auth';
import { Dispatch, SetStateAction } from 'react';
import toast from 'react-hot-toast';
import AuthResendOtp from '../auth-commons/auth-resend-otp';

type ForgotPasswordVerifyOtpType = {
  forgotState: Record<string, string>;
  setForgotState: Dispatch<SetStateAction<Record<string, string>>>;
  setViewMode: Dispatch<SetStateAction<string>>;
};

const ForgotPasswordVerifyOtp = ({ forgotState, setForgotState, setViewMode }: ForgotPasswordVerifyOtpType) => {
  const { mutate: sendOtp } = useVerifyOTP();
  const handleSubmit = (formData: { otp: string }) => {
    const data = {
      mediumValue: forgotState.mediumValue,
      actionType: forgotState.actionType,
      otp: formData.otp,
    };

    sendOtp(data, {
      onSuccess: () => {
        toast.success('Successfully OTP verified');
        setForgotState(data);
        setViewMode(AUTH_VIEW_MODES.reset);
      },
      onError: (error) => toast.error(error.message),
    });
  };

  return (
    <div className='flex w-full flex-col gap-5 p-8 md:p-10'>
      <Form onSubmit={handleSubmit} className='flex flex-1 flex-col justify-evenly gap-5'>
        <FormInput
          name='otp'
          label='OTP'
          placeholder='OTP'
          validations={{
            required: 'Please give your otp number',
          }}
        />

        <button
          type='submit'
          className='mx-auto my-3 w-2/3  rounded-full !bg-secondary-900 p-2 text-primary-900 hover:!bg-primary-900 hover:text-white'
        >
          Verify
        </button>

        <AuthResendOtp username={forgotState.mediumValue} otpActionType={OTP_ACTION_TYPE.forgotPassword} />
      </Form>
    </div>
  );
};

export default ForgotPasswordVerifyOtp;
