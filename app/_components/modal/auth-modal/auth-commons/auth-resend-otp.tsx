import { ENDPOINTS } from '@/app/_config/endpoints';
import { useSendOTP } from '@/app/_services/auth/use-auth';
import { useIsMutating } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

type AuthResendOtpType = {
  username: string;
  otpActionType: string;
};

const AuthResendOtp = ({ username, otpActionType }: AuthResendOtpType) => {
  const DEFAULT_SECONDS = 120;
  const [seconds, setSeconds] = useState(DEFAULT_SECONDS);
  const { mutate: sendOTP } = useSendOTP();
  const isOTPSending = useIsMutating({ mutationKey: [ENDPOINTS.sendOtp] });

  // Timer according to seconds left
  useEffect(() => {
    let timer: string | number | NodeJS.Timeout | undefined;

    if (seconds > 0) {
      timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }

    // Cleanup on component unmount
    return () => clearInterval(timer);
  }, [seconds]);

  const onSuccess = () => {
    toast.success('Successfully OTP sent');
    setSeconds(DEFAULT_SECONDS);
  };
  const onFailure = (error: Error) => {
    toast.error(error.message);
  };

  const sendOTPHandler = () => {
    const data = {
      mediumValue: username,
      actionType: otpActionType,
    };

    sendOTP(data, {
      onSuccess: onSuccess,
      onError: onFailure,
    });
  };

  return (
    <div className='text-gray-4 flex justify-end gap-1 text-label'>
      <button
        type='button'
        onClick={sendOTPHandler}
        className='text-secondary disabled:text-gray-4'
        disabled={!!seconds || !!isOTPSending}
      >
        {isOTPSending ? 'Sending...' : 'Resend'}
      </button>
      {!isOTPSending && <div>after {seconds} seconds</div>}
    </div>
  );
};

export default AuthResendOtp;
