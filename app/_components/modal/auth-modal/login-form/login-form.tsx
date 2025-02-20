import Form from '@/app/_components/ui/form/form';
import FormInput from '@/app/_components/ui/form/form-input';
import { EMAIL_INVALID_MESSAGE, EMAIL_REQUIRED_MESSAGE, PASSWORD_REQUIRED_MESSAGE } from '@/app/_config/validations';
import dataLayer from '@/app/_lib/gtm/send-data';
import { isValidEmailOrPhone } from '@/app/_lib/validations';
import { useLogin } from '@/app/_services/auth/use-auth';
import { useCartContext } from '@/app/_store/cart/cart.context';
import { useUser } from '@/app/_store/user/user.context';
import { CustomerType } from '@/app/_types/user.type';
import { ApiError } from 'next/dist/server/api-utils';
import toast from 'react-hot-toast';
import LoginFormFooter from './login-form-footer';

type LoginFormType = {
  setAuthViewMode: React.Dispatch<React.SetStateAction<string>>;
  closeAuthModal: () => void;
};

const LoginForm = ({ setAuthViewMode, closeAuthModal }: LoginFormType) => {
  const { setUser } = useUser();
  const cart = useCartContext();

  const onLoginSuccess = (customer: CustomerType) => {
    toast.success('Welcome back ' + customer.name);
    setUser(customer);
    cart.refreshCart();
    closeAuthModal();
    dataLayer.login({ customerId: customer.id });
  };

  const onLoginFailure = (error: ApiError) => {
    toast.error(error.message);
  };

  const { mutate } = useLogin(onLoginSuccess, onLoginFailure);
  const handleSubmit = (formData: { username: string; password: string }) => {
    mutate(formData);
  };

  return (
    <div className='flex w-full flex-col gap-5 p-8 md:p-10'>
      <Form onSubmit={handleSubmit} className='flex flex-1 flex-col justify-evenly gap-5' role='form'>
        <FormInput
          name='username'
          id='username'
          label='Mobile/Email'
          placeholder='Username'
          validations={{
            required: EMAIL_REQUIRED_MESSAGE,
            validate: (value: string) => isValidEmailOrPhone(value) || EMAIL_INVALID_MESSAGE,
            setValueAs: (value: string) => value.replace('+', ''),
          }}
        />
        <FormInput
          name='password'
          id='password'
          label='Password'
          placeholder='******'
          type='password'
          validations={{ required: PASSWORD_REQUIRED_MESSAGE }}
        />
        <button
          type='submit'
          className='mx-auto my-3 w-2/3 rounded-full !bg-secondary-900 p-2 text-primary-900 hover:!bg-primary-900 hover:text-white'
        >
          Login
        </button>
      </Form>
      <LoginFormFooter setAuthViewMode={setAuthViewMode} />
    </div>
  );
};

export default LoginForm;
