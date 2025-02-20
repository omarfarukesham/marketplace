'use client';

import AuthModal from '@/app/_components/modal/auth-modal/auth-modal';
import { PROFILE_AVATAR } from '@/app/_config/resources';
import useOutsideClick from '@/app/_lib/hooks/use-outside-click';
import { useUser } from '@/app/_store/user/user.context';
import UserIcon from '@/icons/user';
import Image from 'next/image';
import { useState } from 'react';
import UserDropdownMenu from './user-dropdown-menu';

const UserDropdown = () => {
  const { user } = useUser();
  const [openMenu, setOpenMenu] = useState(false);
  const [openAuthModal, setOpenAuthModal] = useState(false);

  const toggleMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  const ref = useOutsideClick(() => setOpenMenu(false));

  return (
    <div className='relative leading-0' ref={ref}>
      <button onClick={toggleMenu}>
        {!user && <UserIcon className='h-[1.375rem] w-[1.375rem] cursor-pointer md:h-10 md:w-10' />}
        {user && (
          <div className='flex flex-col items-center gap-1'>
            <Image
              src={user.image?.url || PROFILE_AVATAR}
              alt={user.name}
              title={user.name}
              className='h-[1.5rem] w-[1.5rem] rounded-full md:h-[2.5rem] md:w-[2.5rem]'
              width={40}
              height={40}
            />
            <span className='line-clamp-1 text-xs md:text-sm'>{user.name}</span>
          </div>
        )}
      </button>
      {openMenu && <UserDropdownMenu setOpenMenu={setOpenMenu} setOpenAuthModal={setOpenAuthModal} />}
      {openAuthModal && <AuthModal setOpenModal={setOpenAuthModal} />}
    </div>
  );
};

export default UserDropdown;
