'use client';

import Form from '@/app/_components/ui/form/form';
import FormCheckbox from '@/app/_components/ui/form/form-checkbox';
import FormInput from '@/app/_components/ui/form/form-input';
import { FormPhoneInput2 } from '@/app/_components/ui/form/form-phone-input-2';
import LoadingSpinner from '@/app/_components/ui/loading-spinner';
import { ADMIN_PANEL_URL, API_SUCCESS, OTP_ACTION_TYPE } from '@/app/_config/constants';
import { SELLER_REG_BG } from '@/app/_config/resources';
import { useCheckUser, useSendOTP } from '@/app/_services/auth/use-auth';
import storeService from '@/app/_services/store/store.service';
import Image from 'next/image';
import { useState } from 'react';
import toast from 'react-hot-toast';
import SellerRegistrationOtpVerifyModal from './seller-registration-otp-verify-modal';

export type SellerRegistrationDataType = {
  firstName: string;
  lastName: string;
  email: string;
  companyName: string;
  vatNumber?: string;
  password: string;
  confirmPassword: string;
  notification: boolean;
  phone: string;
};

const SellerRegistration = () => {
  const [isVerifyModalOpen, setIsVerifyModalOpen] = useState(false);
  const [formData, setFormData] = useState<SellerRegistrationDataType>();

  const { mutate: checkUser } = useCheckUser();
  const { mutate: sendOtp, isPending: isSendingOtp } = useSendOTP();

  const handleSendOTP = (data: SellerRegistrationDataType) => {
    setFormData(data);

    sendOtp(
      {
        mediumValue: data.email,
        actionType: OTP_ACTION_TYPE.registration,
      },
      {
        onSuccess: () => {
          setIsVerifyModalOpen(true);
        },
        onError: (error: Error) => {
          toast.error(error.message || 'Failed to send OTP');
        },
      },
    );
  };
  const onSubmit = async (formData: SellerRegistrationDataType) => {
    checkUser(
      { username: formData.email },
      {
        onSuccess: (data) => {
          if (data.isExist) {
            toast.error(data.message || 'A user already exists with this email');
          } else {
            handleSendOTP(formData);
          }
        },
        onError: (error) => toast.error(error.message),
      },
    );
  };

  const onVerify = async (email: string) => {
    if (!formData) return;
    const toastId = toast.loading('Creating your account');

    const res = await storeService.registration({ ...formData, email });

    if (res.data?.status !== API_SUCCESS) {
      return toast.error(res.error?.message || "Couldn't create the account", { id: toastId });
    }

    toast.success('Account created successfully', { id: toastId });
    setIsVerifyModalOpen(false);
    if (ADMIN_PANEL_URL) {
      window.location.href = ADMIN_PANEL_URL;
    }
  };

  return (
    <main className='relative'>
      <section className='mx-auto flex min-h-screen max-w-3xl flex-col gap-8 px-5 py-3 md:py-20'>
        <Image src={SELLER_REG_BG} alt='Seller registration hero background' className='absolute left-0 top-0 -z-1' />
        <h1 className='text-center text-3xl text-white'>Create New Seller Account</h1>
        <Form<SellerRegistrationDataType> onSubmit={onSubmit} className='grid gap-6 rounded-lg bg-white p-10'>
          <div className='grid items-start gap-10 md:grid-cols-2'>
            <FormInput name='name' label='Name' className='py-2' validations={{ required: 'This is required.' }} />
            <FormInput
              name='companyName'
              label='Company Name'
              className='py-2'
              validations={{ required: 'This is required.' }}
            />
          </div>

          <div className='grid items-start gap-10 md:grid-cols-2'>
            <FormInput
              name='password'
              type='password'
              label='Password'
              className='py-2'
              validations={{ required: 'This is required.' }}
            />
            <FormInput
              name='confirmPassword'
              type='password'
              label='Confirm Password'
              className='py-2'
              validations={{
                required: 'This is required.',
                validate: (value, values) => {
                  return value === values.password || 'Password do not match.';
                },
              }}
            />
          </div>
          <div className='grid items-start gap-10 md:grid-cols-2'>
            <FormInput
              name='email'
              label='Email'
              className='py-2'
              validations={{ required: 'This is required.' }}
              extraInfo='An OTP will be sent to your email address'
            />
            <FormPhoneInput2
              name='phone'
              label='Phone Number'
              inputClassName='py-2 w-full'
              containerClassName='w-full'
              required
            />
          </div>

          <FormCheckbox
            name='notification'
            id='notification'
            label="I'd like to receive exclusive offers and promotions via SMS"
          />
          <button
            className='mx-auto mt-3 flex w-fit items-center justify-center gap-3 rounded-full bg-secondary-900 px-16 py-3 transition-colors hover:bg-primary-800 hover:text-white'
            disabled={isSendingOtp}
          >
            {isSendingOtp && <LoadingSpinner className='h-4 w-4' />}
            Create New Account
          </button>
        </Form>

        <p className='text-center text-label text-white'>
          Already have an account?{' '}
          <a href={ADMIN_PANEL_URL} className='underline'>
            Login
          </a>
        </p>
      </section>

      {isVerifyModalOpen && (
        <SellerRegistrationOtpVerifyModal
          closeModal={() => setIsVerifyModalOpen(false)}
          onVerify={onVerify}
          email={formData!.email}
        />
      )}
    </main>
  );
};

export default SellerRegistration;
