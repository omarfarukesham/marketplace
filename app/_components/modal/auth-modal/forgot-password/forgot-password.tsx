import { AUTH_VIEW_MODES } from '@/app/_config/constants';
import { Dispatch, SetStateAction, useState } from 'react';
import ForgotPasswordForm from './forgot-password-form';
import ForgotPasswordResetPassword from './forgot-password-reset-password';
import ForgotPasswordVerifyOtp from './forgot-password-verify-otp';

type ForgotPasswordType = {
  setAuthViewMode: Dispatch<SetStateAction<string>>;
};

const ForgotPassword = ({ setAuthViewMode }: ForgotPasswordType) => {
  const [viewMode, setViewMode] = useState(AUTH_VIEW_MODES.forgot);
  const [forgotState, setForgotState] = useState({});

  return (
    <>
      {viewMode === AUTH_VIEW_MODES.forgot && (
        <ForgotPasswordForm setForgotState={setForgotState} setViewMode={setViewMode} />
      )}
      {viewMode === AUTH_VIEW_MODES.verify && (
        <ForgotPasswordVerifyOtp forgotState={forgotState} setForgotState={setForgotState} setViewMode={setViewMode} />
      )}
      {viewMode === AUTH_VIEW_MODES.reset && (
        <ForgotPasswordResetPassword forgotData={forgotState} setAuthViewMode={setAuthViewMode} />
      )}
    </>
  );
};

export default ForgotPassword;
