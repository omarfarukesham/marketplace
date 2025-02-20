import { AUTH_VIEW_MODES } from '@/app/_config/constants';
import { useState } from 'react';
import RegistrationForm from './registration-form';
import RegistrationVerifyForm from './registration-verify-form';

type RegistrationFormType = {
  closeAuthModal: () => void;
};

const Registration = ({ closeAuthModal }: RegistrationFormType) => {
  const [registrationState, setRegistrationState] = useState({});
  const [viewMode, setViewMode] = useState(AUTH_VIEW_MODES.registration);

  return (
    <>
      {viewMode === AUTH_VIEW_MODES.registration && (
        <RegistrationForm setViewMode={setViewMode} setRegistrationState={setRegistrationState} />
      )}
      {viewMode === AUTH_VIEW_MODES.verifyAccount && (
        <RegistrationVerifyForm registrationState={registrationState} closeAuthModal={closeAuthModal} />
      )}
    </>
  );
};

export default Registration;
