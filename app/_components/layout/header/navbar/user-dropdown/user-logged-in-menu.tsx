import { CUSTOMER_PANEL_BASE_URL } from '@/app/_config/constants';
import authService from '@/app/_services/auth/auth.service';
import Eye from '@/icons/eye';
import List from '@/icons/list';
import Location from '@/icons/location';
import Logout from '@/icons/logout';
import Person from '@/icons/person';
import Link from 'next/link';
import toast from 'react-hot-toast';

const UserLoggedInMenu = () => {
  const appMenu = [
    {
      label: 'Profile Overview',
      icon: Eye,
      link: '/profile-overview',
    },
    {
      label: 'My Order',
      icon: List,
      link: '/orders',
    },
    {
      label: 'Personal Information',
      icon: Person,
      link: '/personal-information',
    },
    {
      label: 'Addresses',
      icon: Location,
      link: '/addresses',
    },
  ];

  const handleLogout = () => {
    authService.logout();

    toast.success('Logged out');
    window.location.reload();
  };

  return (
    <ul>
      {appMenu.map((menu) => (
        <li key={menu.link}>
          <Link
            href={`${CUSTOMER_PANEL_BASE_URL}${menu.link}?sid=${btoa(authService.getToken() || '')}`}
            className='flex items-center gap-3 rounded object-fill p-3 text-label hover:bg-secondary-200'
          >
            <menu.icon className='w-6 text-gray-900' />
            <div className='flex-1 whitespace-nowrap'>{menu.label}</div>
          </Link>
        </li>
      ))}

      <hr className='text-gray-3 m-1' />
      <button
        onClick={handleLogout}
        className='flex w-full items-center gap-3 rounded p-3 text-label hover:bg-secondary-200'
      >
        <Logout className='w-6 text-gray-900' /> Logout
      </button>
    </ul>
  );
};

export default UserLoggedInMenu;
