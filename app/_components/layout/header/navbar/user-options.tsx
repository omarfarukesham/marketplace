import CartRoot from '../../cart-drawer/cart-root';
import { getLayoutComponents } from '../../layout.service';
import UserDropdown from './user-dropdown/user-dropdown';

const UserOptions = async () => {
  const userOptionsComponents = await getLayoutComponents('Header.Navbar.UserOptions');

  return (
    <div className='flex items-center gap-2.5 md:gap-5'>
      {userOptionsComponents.User && <UserDropdown />}
      {userOptionsComponents.Cart && <CartRoot />}
    </div>
  );
};

export default UserOptions;
