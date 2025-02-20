import { useUser } from '@/app/_store/user/user.context';
import { Dispatch, SetStateAction } from 'react';
import UserLoggedInMenu from './user-logged-in-menu';
import UserLoggedOutMenu from './user-logged-out-menu';

type UserDropdownMenuType = {
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
  setOpenAuthModal: Dispatch<SetStateAction<boolean>>;
};

const UserDropdownMenu = ({ setOpenMenu, setOpenAuthModal }: UserDropdownMenuType) => {
  const { isAuthenticated } = useUser();

  return (
    <div className='animate-fade-in absolute -right-[10%] top-[110%] z-10 flex flex-col gap-4 rounded-md bg-white p-2 shadow-lg'>
      {isAuthenticated && <UserLoggedInMenu />}
      {!isAuthenticated && <UserLoggedOutMenu setOpenMenu={setOpenMenu} setOpenAuthModal={setOpenAuthModal} />}
    </div>
  );
};

export default UserDropdownMenu;
