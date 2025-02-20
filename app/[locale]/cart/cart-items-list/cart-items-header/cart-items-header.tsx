import Cookies from 'js-cookie';
import CartItemsFilter from './cart-items-filter';
import CartItemsManage from './cart-items-manage';

const CartItemsHeader = () => {
  // const { isDesktop } = getViewport();
  const isDesktop = Cookies.get('viewport') === 'desktop';

  return (
    <div className='flex items-center justify-between border-b border-gray-300 py-4'>
      <CartItemsFilter />
      <CartItemsManage isDesktop={isDesktop} />
    </div>
  );
};

export default CartItemsHeader;
