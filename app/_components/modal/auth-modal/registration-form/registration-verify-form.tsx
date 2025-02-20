import Form from '@/app/_components/ui/form/form';
import FormInput from '@/app/_components/ui/form/form-input';
import { OTP_ACTION_TYPE } from '@/app/_config/constants';
import { useRegistration, useVerifyOTP } from '@/app/_services/auth/use-auth';
import { useUser } from '@/app/_store/user/user.context';
import { CustomerType } from '@/app/_types/user.type';
import toast from 'react-hot-toast';
import AuthResendOtp from '../auth-commons/auth-resend-otp';

type RegistrationVerifyFormType = {
  registrationState: Record<string, string>;
  closeAuthModal: () => void;
};

const RegistrationVerifyForm = ({ registrationState, closeAuthModal }: RegistrationVerifyFormType) => {
  const { setUser } = useUser();
  const onRegistrationSuccess = (customer: CustomerType) => {
    toast.success('Successfully registered');
    setUser(customer);
    closeAuthModal();
  };
  const onFailure = (error: Error) => toast.error(error.message);

  const { mutate: verifyOTP } = useVerifyOTP();
  const { mutate: register } = useRegistration(onRegistrationSuccess, onFailure);

  const handleRegistration = (formData: { otp: string }) => {
    const data = {
      username: registrationState.username,
      personName: registrationState.personName,
      password: registrationState.password,
      otp: formData.otp,
    };

    register(data);
  };

  const handleSubmit = (formData: { otp: string }) => {
    const data = {
      mediumValue: registrationState.username,
      actionType: OTP_ACTION_TYPE.registration,
      otp: formData.otp,
    };

    verifyOTP(data, {
      onSuccess: () => {
        toast.success('Successfully OTP verified');
        handleRegistration(formData);
      },
      onError: onFailure,
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

        <AuthResendOtp username={registrationState.username} otpActionType={OTP_ACTION_TYPE.registration} />
      </Form>
    </div>
  );
};

export default RegistrationVerifyForm;
