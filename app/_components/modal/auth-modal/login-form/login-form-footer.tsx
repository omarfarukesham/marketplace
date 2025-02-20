import { AUTH_VIEW_MODES } from '@/app/_config/constants';
import React from 'react';

type LoginFormFooterType = {
  setAuthViewMode: React.Dispatch<React.SetStateAction<string>>;
};

const LoginFormFooter = ({ setAuthViewMode }: LoginFormFooterType) => {
  return (
    <div className='text-gray-6 flex justify-between gap-3 text-label'>
      <button
        className='hover:text-secondary text-left'
        type='button'
        onClick={() => setAuthViewMode(AUTH_VIEW_MODES.registration)}
      >
        Create an account
      </button>
      <button
        className='hover:text-secondary text-right'
        type='button'
        onClick={() => setAuthViewMode(AUTH_VIEW_MODES.forgot)}
      >
        Forgot password?
      </button>
    </div>
  );
};

export default LoginFormFooter;
