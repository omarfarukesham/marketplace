import Button from '@/app/_components/ui/button';
import Countdown from '@/app/_components/ui/countdown/countdown';
import { Input } from '@/app/_components/ui/inputs/input';
import Modal from '@/app/_components/ui/modal';
import { API_SUCCESS, OTP_ACTION_TYPE } from '@/app/_config/constants';
import { merge } from '@/app/_lib/merge';
import authService from '@/app/_services/auth/auth.service';
import userService from '@/app/_services/user/user.service';
import { useCheckout } from '@/app/_store/checkout/checkout.context';
import { CreateOrderData } from '@/app/_types/order.type';
import { useSearchParams } from 'next/navigation';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import PhoneInputField, { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

type GuestUserModalType = {
  closeModal: () => void;
  createOrder: (order: CreateOrderData) => void;
};

const GuestUserVerifyModal = ({ closeModal, createOrder }: GuestUserModalType) => {
  const [phoneNumber, setPhoneNumber] = useState<string | undefined>('');
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };
  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <Modal
      onClose={closeModal}
      title='Verification'
      className='pb-8 md:p-8'
      size={{ custom: 'w-11/12 max-h-[60%] md:w-1/3' }}
    >
      {step === 1 && <PhoneInput nextStep={nextStep} phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} />}
      {step === 2 && <OTPInput prevStep={prevStep} createOrder={createOrder} phoneNumber={phoneNumber} />}
    </Modal>
  );
};

const PhoneInput = ({
  nextStep,
  phoneNumber,
  setPhoneNumber,
}: {
  nextStep: () => void;
  phoneNumber: string | undefined;
  setPhoneNumber: Dispatch<SetStateAction<string | undefined>>;
}) => {
  const [error, setError] = useState<string>(isValidPhoneNumber(phoneNumber || '') ? 'FALSE' : 'PENDING');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendOtp = async () => {
    if (!phoneNumber) return;

    setIsLoading(true);
    const res = await userService.sendOtp(phoneNumber.slice(1));
    setIsLoading(false);

    if (res.data?.status !== API_SUCCESS) {
      toast.error(res.error?.message || 'Failed to send OTP');
      return;
    }

    toast.success(res.data.message);

    nextStep();
  };

  return (
    <div className='flex flex-wrap items-end justify-center gap-3'>
      {/* <Input label='Phone' placeholder='Enter your phone number' type='tel' className='py-2' /> */}
      <div>
        <label className='text-label font-medium' htmlFor='phone'>
          Phone Number<span className='text-danger'> *</span>
        </label>
        <PhoneInputField
          id='phone'
          name='phone'
          defaultCountry='BD'
          countries={['BD']}
          addInternationalOption={false}
          placeholder='Enter phone number'
          value={phoneNumber}
          onChange={(value) => {
            if (value && isValidPhoneNumber(value)) {
              setPhoneNumber(value);
              setError('FALSE');
            } else {
              setError('TRUE');
            }
          }}
          className={merge(
            'rounded-md border border-gray-600 px-4 py-2.5 [&>input]:bg-transparent [&>input]:outline-none',
            error === 'TRUE' && 'border-danger',
          )}
        />
      </div>
      <Button
        color='primary'
        size='lg'
        className='text-white'
        onClick={handleSendOtp}
        disabled={error === 'PENDING' || error === 'TRUE' || isLoading}
      >
        Send OTP
      </Button>
      {error === 'TRUE' && <p className='animate-fade-in w-full px-3 text-sm text-danger'>Invalid phone number</p>}
    </div>
  );
};

const OTPInput = ({
  createOrder,
  prevStep,
  phoneNumber,
}: {
  createOrder: (order: CreateOrderData) => void;
  prevStep: () => void;
  phoneNumber?: string;
}) => {
  const [otp, setOtp] = useState<string>('');
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [resendTime, setResendTime] = useState(new Date().getTime() + 60000); // one minute from now
  const [timerExpired, setTimerExpired] = useState(false);

  const { shippingAddress, setShippingAddress, paymentMethod } = useCheckout();

  const searchParams = useSearchParams();

  const handleVerifyOtp = async () => {
    if (!otp || !phoneNumber) return;

    setIsLoading(true);
    const res = await authService.verifyOtpCreateUser({
      mediumValue: phoneNumber.slice(1),
      otp,
      actionType: OTP_ACTION_TYPE.guest,
    });
    setIsLoading(false);

    if (res.data?.status !== API_SUCCESS) {
      setError(true);
      return;
    }

    toast.success(res.data?.message);

    const addressWithPhone = { ...shippingAddress!, phone: phoneNumber };
    setShippingAddress(addressWithPhone);

    createOrder({
      productId: searchParams.get('productId') as string,
      paymentMethod: paymentMethod!,
      shippingAddress: addressWithPhone,
      billingAddress: addressWithPhone,
      customerId: res.data?.data?.content[0]?.customerId,
      userId: res.data?.data?.content[0]?.userId,
    });
  };

  const resendOtp = async () => {
    if (!phoneNumber) return;

    setIsLoading(true);
    const res = await userService.sendOtp(phoneNumber);
    setIsLoading(false);

    if (res.data?.status !== API_SUCCESS) {
      return toast.error(res.error?.message || 'Failed to send OTP');
    }

    toast.success(res.data.message);
    setResendTime(new Date().getTime() + 60000);
    setTimerExpired(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimerExpired(true);
    }, 59000);

    return () => clearTimeout(timer);
  }, [resendTime]);

  return (
    <div>
      <div className='mb-2 flex flex-wrap items-end justify-center gap-3'>
        <Input
          label='OTP'
          placeholder='Enter The OTP'
          type='tel'
          className='py-2'
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
        <Button
          color='primary'
          size='lg'
          className='mb-3 text-white md:mb-0'
          onClick={handleVerifyOtp}
          disabled={!otp || isLoading}
        >
          Verify OTP
        </Button>
        {error && <p className='animate-fade-in mx-7 w-full text-sm text-danger'>Invalid OTP</p>}
      </div>
      <div className='flex flex-wrap justify-between gap-3 px-7 text-sm md:gap-5'>
        <button onClick={prevStep} className='hover:underline'>
          Change phone number?
        </button>
        <button
          onClick={resendOtp}
          className='flex items-center gap-2 hover:underline disabled:cursor-not-allowed disabled:text-gray-500'
          disabled={!timerExpired || isLoading}
        >
          Didn&apos;t get the OTP? Resend it.
          {!timerExpired && (
            <>
              ( after
              <Countdown
                targetDate={resendTime}
                className='gap-1 md:gap-1'
                itemClassName='text-sm md:text-sm font-regular p-0 md:p-0 h-3 w-3 md:h-3 md:w-3'
              />
              )
            </>
          )}
        </button>
      </div>
    </div>
  );
};
export default GuestUserVerifyModal;
