import Button from '@/app/_components/ui/button';
import Countdown from '@/app/_components/ui/countdown/countdown';
import { Input } from '@/app/_components/ui/inputs/input';
import Modal from '@/app/_components/ui/modal';
import { OTP_ACTION_TYPE } from '@/app/_config/constants';
import { useSendOTP, useVerifyOTP } from '@/app/_services/auth/use-auth';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import 'react-phone-number-input/style.css';

type SellerRegistrationOtpVerifyModalType = {
  closeModal: () => void;
  onVerify: (email: string) => void;
  email: string;
};

const SellerRegistrationOtpVerifyModal = ({ closeModal, email, onVerify }: SellerRegistrationOtpVerifyModalType) => {
  const [otp, setOtp] = useState<string>('');

  const [resendTime, setResendTime] = useState(new Date().getTime() + 60000); // one minute from now
  const [timerExpired, setTimerExpired] = useState(false);

  const { mutate: verifyOtp, isPending: isVerifying } = useVerifyOTP();

  const { mutate: sendOtp, isPending: isSending } = useSendOTP();

  const isLoading = isVerifying || isSending;

  const handleVerifyOtp = async () => {
    if (!otp || !email) return;
    verifyOtp(
      {
        mediumValue: email,
        otp,
        actionType: OTP_ACTION_TYPE.registration,
      },
      {
        onSuccess: (data) => {
          toast.success(data.message);
          onVerify(email);
        },
        onError: (error) => {
          toast.error(error.message);
        },
      },
    );
  };

  const resendOtp = async () => {
    if (!email) return;
    sendOtp(
      {
        mediumValue: email,
        actionType: OTP_ACTION_TYPE.registration,
      },
      {
        onSuccess: (data) => {
          toast.success(data.message);
          setResendTime(new Date().getTime() + 60000);
          setTimerExpired(false);
        },
        onError: (error) => {
          toast.error(error.message || 'Failed to send OTP');
        },
      },
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimerExpired(true);
    }, 59000);

    return () => clearTimeout(timer);
  }, [resendTime]);

  return (
    <Modal
      onClose={closeModal}
      title='Verify Email Address'
      className='px-4 pb-8'
      size={{ custom: 'w-11/12 max-h-[60%] md:w-1/3' }}
    >
      <p className='mb-4 text-center text-label'>An OTP is sent to your email. Please enter it here.</p>
      <div className='relative flex items-end justify-center gap-3'>
        <Input
          label='OTP'
          placeholder='Enter The OTP'
          type='number'
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
      </div>
      <div className='my-2 flex flex-wrap justify-between gap-3 px-10 text-sm md:gap-5'>
        <button onClick={closeModal} className='hover:underline'>
          Change email?
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
    </Modal>
  );
};

export default SellerRegistrationOtpVerifyModal;
