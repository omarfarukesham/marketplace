import Modal from '@/app/_components/ui/modal';
import { AUTH_VIEW_MODES } from '@/app/_config/constants';
import { Dispatch, SetStateAction, useState } from 'react';
import ForgotPassword from './forgot-password/forgot-password';
import LoginForm from './login-form/login-form';
import Registration from './registration-form/registration';

type AuthModalType = {
  setOpenModal: Dispatch<SetStateAction<boolean>>;
};

const AuthModal = ({ setOpenModal }: AuthModalType) => {
  const closeAuthModal = () => setOpenModal(false);
  const [authViewMode, setAuthViewMode] = useState(AUTH_VIEW_MODES.login);

  const views = {
    [AUTH_VIEW_MODES.login]: { title: 'Login', onBack: undefined },
    [AUTH_VIEW_MODES.registration]: { title: 'Registration', onBack: () => setAuthViewMode(AUTH_VIEW_MODES.login) },
    [AUTH_VIEW_MODES.forgot]: { title: 'Forgot Password', onBack: () => setAuthViewMode(AUTH_VIEW_MODES.login) },
  };

  return (
    <Modal
      title={views[authViewMode].title}
      onBack={views[authViewMode].onBack}
      onClose={closeAuthModal}
      size={{ custom: 'w-full m-[20px] sm:w-[500px]' }}
    >
      {authViewMode === AUTH_VIEW_MODES.login && (
        <LoginForm setAuthViewMode={setAuthViewMode} closeAuthModal={closeAuthModal} />
      )}
      {authViewMode === AUTH_VIEW_MODES.registration && <Registration closeAuthModal={closeAuthModal} />}
      {authViewMode === AUTH_VIEW_MODES.forgot && <ForgotPassword setAuthViewMode={setAuthViewMode} />}
    </Modal>
  );
};

export default AuthModal;
