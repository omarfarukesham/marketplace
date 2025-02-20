import Form from '@/app/_components/ui/form/form';
import FormInput from '@/app/_components/ui/form/form-input';
import { AUTH_VIEW_MODES, OTP_ACTION_TYPE } from '@/app/_config/constants';
import { isValidEmailOrPhone } from '@/app/_lib/validations';
import { useCheckUser, useSendOTP } from '@/app/_services/auth/use-auth';
import { Dispatch, SetStateAction } from 'react';
import toast from 'react-hot-toast';
import AuthPasswordWithConfirmPassword from '../auth-commons/auth-password-with-confirm-password';

type RegistrationFormType = {
  setViewMode: Dispatch<SetStateAction<string>>;
  setRegistrationState: Dispatch<SetStateAction<Record<string, string>>>;
};

const RegistrationForm = ({ setViewMode, setRegistrationState }: RegistrationFormType) => {
  const { mutate: checkUser } = useCheckUser();
  const { mutate: sendOTP } = useSendOTP();

  // For failed request
  const onFailure = (error: Error) => toast.error(error.message);

  // Send OTP
  const handleSendOTP = (formData: { username: string; personName: string; password: string }) => {
    const data = {
      mediumValue: formData.username,
      actionType: OTP_ACTION_TYPE.registration,
    };

    sendOTP(data, {
      onSuccess: () => {
        toast.success('Successfully OTP sent');
        setRegistrationState(formData);
        setViewMode(AUTH_VIEW_MODES.verifyAccount);
      },
      onError: onFailure,
    });
  };

  // Checkout user first
  const handleSubmit = (formData: { username: string; personName: string; password: string }) => {
    const data = { username: formData.username };
    checkUser(data, {
      onSuccess: (data) => {
        if (data.isExist) {
          toast.error('User already exist');
        } else {
          handleSendOTP(formData);
        }
      },
      onError: onFailure,
    });
  };

  return (
    <div className='flex w-full flex-col gap-5 p-8 md:p-10'>
      <Form onSubmit={handleSubmit} className='flex flex-1 flex-col justify-center gap-5'>
        <FormInput
          name='username'
          label='Mobile/Email'
          placeholder='Username'
          validations={{
            required: 'Please write an email or mobile number',
            validate: (value: string) => isValidEmailOrPhone(value) || 'Please enter a valid email or mobile number',
            setValueAs: (value: string) => value.replace('+', ''),
          }}
        />
        <FormInput name='personName' label='Name' placeholder='Name' />
        <AuthPasswordWithConfirmPassword />
        <button
          type='submit'
          className='mx-auto my-3 w-2/3 rounded-full !bg-secondary-900 p-2 text-primary-900 hover:!bg-primary-900 hover:text-white'
        >
          Send Code
        </button>
      </Form>
    </div>
  );
};

export default RegistrationForm;
