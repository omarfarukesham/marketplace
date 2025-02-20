import { Dispatch, SetStateAction } from 'react';

type UserLoggedOutMenuType = {
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
  setOpenAuthModal: Dispatch<SetStateAction<boolean>>;
};

const UserLoggedOutMenu = ({ setOpenMenu, setOpenAuthModal }: UserLoggedOutMenuType) => {
  const handleLogin = () => {
    setOpenAuthModal(true);
    setOpenMenu(false);
  };

  return (
    <ul>
      <button
        onClick={handleLogin}
        className='whitespace-nowrap rounded-full bg-secondary-900 px-10 py-3 text-label text-primary-900  hover:text-white'
      >
        Sign In/Register
      </button>
      <li className='p-3 text-center text-label text-gray-400'>You are not currently signed in</li>
    </ul>
  );
};

export default UserLoggedOutMenu;
